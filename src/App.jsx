import { ScrollTrigger,SplitText } from "gsap/all"
import gsap from "gsap";

import Navbar from "./components/navbar.jsx";
import Hero from './components/Hero.jsx'
import Cocktails from "./components/Cocktails.jsx";
import About from "./components/About.jsx";
import Art from "./components/Art.jsx";

// we have to do this because they are not automatically active
gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
   <main>
    <Navbar />
    <Hero />
    <Cocktails />
    <About/>
    <Art/>
   </main>
  )
}

export default App