import Image from "next/image";
import Card from "./components/Card";

export default function Home() {
  return (
    <main className="pt-20 h-screen flex flex-col items-center justify-around">
      <div className="flex flex-row justify-center gap-10">
        <button className="px-4 py-2 font-semibold rounded-xl bg-[#7b3fe4]">
          Mint NFT
        </button>
        <button className="px-4 py-2 font-semibold rounded-xl bg-[#7b3fe4]">
          Check your NFT&apos;s
        </button>
      </div>
      <div className="w-full h-full flex flex-row items-center justify-center gap-10">
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
