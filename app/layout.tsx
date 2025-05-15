import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/logo.svg",
  },
  title: "Sell",
  description: "Challenge Spikes by @0xEzis | Realised by FISS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(dm_sans.className, "bg-[#F5F5F5]")}>{children}</body>
    </html>
  );
}
