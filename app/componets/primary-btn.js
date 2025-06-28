import { ChevronRight } from "lucide-react";

const Pributton = ({text,padding}) => {
  return (
     <div className={`inline-flex items-center gap-1 transition-all duration-300 hover:gap-3 cursor-pointer group  text-blue-700 border border-blue-700 rounded-full px-4 py-${padding} w-max `}>
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-500">
              {text}
            </span>
            <span className="text-xl transition-transform duration-300 group-hover:-translate-x-1">
              <ChevronRight />
            </span>
          </div>
  )
}

export default Pributton
