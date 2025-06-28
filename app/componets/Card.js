import Image from "next/image";
const Card = ({ icon, h3, p }) => {
  return (
    <div className="bg-[#f5fefd] rounded-2xl  shadow-2xl  shadow-gray-300 p-6 flex gap-3 flex-col reveal">
      <Image src={icon} alt={h3} width={50} />
      <h3 className="font-bold text-xl">{h3}</h3>
      <p className="text-gray-500">{p}</p>
    </div>
  );
};

export default Card;
