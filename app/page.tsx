import { Dela_Gothic_One } from "next/font/google";

import Navbar from "@/app/components/Navbar/Navbar";
import Hero from "@/app/components/Hero/Hero";
import Features from "@/app/components/Features/Features";


const dela = Dela_Gothic_One({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero delaClass={dela.className}/>
      <Features delaClass={dela.className}/>
    </main>
  );
}
 