import { ScrollTrigger,SplitText } from "gsap/all"
import gsap from "gsap";

import Navbar from "./components/navbar.jsx";
import Hero from './components/Hero.jsx'
import Cocktails from "./components/Cocktails.jsx";
// we have to do this because they are not automatically active
gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
   <main>
    <Navbar />
    <Hero />
    <Cocktails />
    <div className="h-dvh  bg:black"></div>
   </main>
  )
}

export default App