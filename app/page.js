import Hero from "./componets/Home";
import About from "./componets/About";
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {
  return (
    <div>
      <Hero />
      <About/>
      
    </div>
  );
}
