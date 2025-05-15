import { Dela_Gothic_One } from "next/font/google";

import Navbar from "@/app/components/Navbar/Navbar";

const dela = Dela_Gothic_One({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
    </main>
  );
}
 