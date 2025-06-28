import { Link2} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f0c2b] text-white px-6 md:px-20 py-8 flex items-center justify-center flex-col gap-5">
      <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
        <div className="p-5 flex flex-col items-start">
          <h2 className="flex font-bold gap-2 text-2xl items-center">
            <Link2 size={30} />
            Tinylinks
          </h2>
          <p className="text-sm mt-2">
            Looking for a way to shorten long URLs? Try our short URL and QR
            code service for cleaner, easy-to-share links.
          </p>
        </div>

        <ul className="flex flex-col gap-2 items-center">
          <li className="text-xl font-bold">Solutions</li>
          <li>QR codes</li>
          <li>Bio Pages</li>
        </ul>

        <ul className="flex flex-col gap-2 items-center">
          <li className="text-xl font-bold">Company</li>
          <li>Developer API</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <hr className="w-[90vw] border border-gray-600 rounded-full" />

      <div className="w-full max-w-screen-xl flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>&copy; 2025 - All Rights Reserved</p>
        <p className="flex items-center gap-1">
          Made by Ishan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
