import Image from "next/image";
import { Header } from "./composants/header";
import { Section2 } from "./composants/section2";
import { Section3 } from "./composants/section3";
import { Section4 } from "./composants/section4";
import { Section5 } from "./composants/section5";
import { Section6 } from "./composants/section6";

export default function Home() {
  return (
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
  );
}
