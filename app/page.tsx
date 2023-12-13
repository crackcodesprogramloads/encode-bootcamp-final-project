import Card from "./components/Card";
import { useContractWrite } from "wagmi";

export default function Home() {
  // const { data, isLoading, isSuccess, write } = useContractWrite({
  //   address: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1",
  //   abi: wagmigotchiABI,
  //   functionName: "feed",
  // });

  // const { data, isError, isLoading, read } = useContractRead({
  //   address: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1",
  //   abi: wagmigotchiABI,
  //   functionName: "getHunger",
  // });
  return (
    <main className="pt-20 h-screen flex flex-col items-center justify-around">
      <div className="flex flex-row justify-center gap-10">
        <button
          // onClick={() => write()}
          className="px-4 py-2 font-semibold rounded-xl bg-[#7b3fe4]"
        >
          Mint NFT
        </button>
        <button // onClick={() => read()}
          className="px-4 py-2 font-semibold rounded-xl bg-[#7b3fe4]"
        >
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
