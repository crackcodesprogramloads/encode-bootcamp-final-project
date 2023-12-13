import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import WagmiRainbowProvider from "./services/WagmiRainbowProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Encode final project",
  description: "NFT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-zinc-200 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black`}
      >
        <WagmiRainbowProvider>
          <Navbar />
          {children}
        </WagmiRainbowProvider>
      </body>
    </html>
  );
}
