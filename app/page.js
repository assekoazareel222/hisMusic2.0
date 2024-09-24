import Image from "next/image";
import { Header } from "./composants/header";
import { Section2 } from "./composants/section2";
import { Section3 } from "./composants/section3";
import { Section4 } from "./composants/section4";
import { Section5 } from "./composants/section5";
import { Section6 } from "./composants/section6";
import { formulaire } from "./composants/formulaire";

export default function Home() {
  return (
<<<<<<< HEAD
    <>
      <div className="body">
        <Header />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
    </>
=======
    <div className="body">
      <div className="section1"></div>
      <div className="section2"></div>
      <div className="section3"></div>
      <div className="section4">
        <Section4/>
      </div>
      <div className="section5"></div>
      <div className="section6"></div>
    </div>
>>>>>>> 6a2aefdd130498357498a7c80db50c913ee2e1f1
  );
}
