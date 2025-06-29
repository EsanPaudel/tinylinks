
"use client";

import { useState, useEffect } from "react";
import QRCode from "qrcode";
import { Unlink } from "lucide-react"
import { ToastContainer, toast } from "react-toastify";
import { Trash,Clipboard } from "lucide-react";

const Dashboard = () => {
  const [orginalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [userUrls, setUserUrls] = useState([]);
  const [qrCodes, setQrCodes] = useState({});


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/shorten", {
        method: "POST",
        body: JSON.stringify({ orginalUrl }),
      });
      if (!res.ok) throw new Error("Failed to shorten URL");

      const data = await res.json();
      setShortUrl(data.shortUrl);

      const qr = await QRCode.toDataURL(data.shortUrl);
      setQrCode(qr);
      setOriginalUrl("");
      fetchUserUrls();
    } catch (err) {
      console.error("Error shortening URL:", err.message);
    }
  };

  const fetchUserUrls = async () => {
    try {
      const res = await fetch("/api/user-urls");
      if (!res.ok) throw new Error("Failed to fetch user URLs");
      const data = await res.json();

      if (!Array.isArray(data.urls)) throw new Error("Invalid URL data");
// console.log(data.urls)
      setUserUrls(data.urls);

      const qrMap = {};
      await Promise.all(
        data.urls.map(async (url) => {
          const qr = await QRCode.toDataURL(
            `${process.env.NEXT_PUBLIC_URL}/${url.shortId}`
          );
          qrMap[url._id] = qr;
        })
      );
      setQrCodes(qrMap);
    } catch (error) {
      console.error("Error loading user URLs:", error.message);
      setUserUrls([]);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch("/api/delete-urls", {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
      if (!res.ok) toast.error("URL delete Failed");
      if(res.ok) toast.error("URL deleted Successfully")
      fetchUserUrls();
    } catch (error) {
      console.error("Error deleting URL:", error.message);
    }
  };

  useEffect(() => {
    fetchUserUrls();
  }, []);
  
  return (
    
    <div className="min-h-screen">
      <div className="flex items-center justify-center flex-col p-10">
        <form onSubmit={handleSubmit} className="my-12 w-200 max-lg:w-screen">
          <div className="shorten bg-slate-100 rounded-full py-2 pl-5 pr-2 flex w-full items-center gap-3 justify-between">
            <div className="flex items-center justify-center gap-3">
              <Unlink color="gray" size={"20px"} />
              <input
                type="text"
                placeholder="Enter Your Long URL"
                className="border-none outline-none w-[45vw]"
                value={orginalUrl}
                onChange={(e) => setOriginalUrl(e.target.value)}
              />
            </div>
            <button className="bg-blue-500 px-6 py-3 rounded-full text-white font-medium hover:text-white hover:bg-blue-300 cursor-pointer transition duration-500">
              Shorten
            </button>
          </div>
        </form>


        <div>
       
          <h2 className="text-xl font-semibold mb-2">Your Shortened URLs</h2>
          {Array.isArray(userUrls) && userUrls.length === 0 ? (
            <p className="text-gray-600">No URLs created yet.</p>
          ) : (
            userUrls.map((url) => (
              <div key={url._id} className="bg-slate-200 p-4 w-200 rounded-3xl shadow mb-4 flex items-center  justify-between gap-3 max-lg:w-screen  max-lg:flex-col">
                <div className="flex gap-3 items-center justify-center max-lg:flex-col">

                {qrCodes[url._id] && (
                  <img src={qrCodes[url._id]} alt="QR Code" className="w-24 h-24 mt-2" />
                )}
                <div>
                  <p>
                    <strong>Original:</strong>{" "}
                    <a
                      href={url.orginalUrl}
                      target="_blank"
                      className="text-blue-600"
                      rel="noopener noreferrer"
                    >
                      {url.orginalUrl}
                    </a>
                  </p>
                  <p>
                    <strong>Short:</strong>{" "}
                    <a
                      href={`${process.env.NEXT_PUBLIC_URL}/${url.shortId}`}
                      target="_blank"
                      className="text-blue-600"
                      rel="noopener noreferrer"
                    >
                      {process.env.NEXT_PUBLIC_URL}/{url.shortId}
                    </a>
                  </p>
                  <p>
                    <strong>Clicks:</strong> {url.clicks}
                  </p>
                 </div>
                  
                </div>
                
                <div className=" flex items-center justify-center flex-col max-lg:flex-row">
                  <div className="hover:text-green-300 cursor-pointer"onClick={()=>{navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_URL}/${url.shortId}`)
                  toast.success("Copied To Clipboard")
                  
                }}><Clipboard/></div>
                 <div
                    className="hover:text-red-500 cursor-pointer mt-2"
                    onClick={() => handleDelete(url._id)}
                  >
                    <Trash/>
                  </div>
                  </div>
              </div>
            ))
          )}
        </div>
      </div>
       <ToastContainer/>
    </div>
   
  );
};

export default Dashboard;
