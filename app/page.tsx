"use client";

import Card from "./components/Card";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";

import { NFT_URI } from "./constants.ts";
import mintABI from "./mintABI.json";

export default function Home() {
  const { address, isConnecting, isDisconnected } = useAccount();

  function getRandomLink() {
    const randomIndex = Math.floor(Math.random() * NFT_URI.length);
    return NFT_URI[randomIndex];
  }

  const randomLink = getRandomLink();

  const { config } = usePrepareContractWrite({
    address: "0x59e3be9d86582fF7dC671Ba39de5cF33324fD723",
    abi: mintABI,
    functionName: "safeMint",
    args: [address, randomLink],
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  // const { data, isError, isLoading, read } = useContractRead({
  //   address: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1",
  //   abi: wagmigotchiABI,
  //   functionName: "getHunger",
  // });
  return (
    <main className="pt-20 h-screen flex flex-col items-center justify-around">
      <div className="flex flex-row justify-center gap-10">
        <button
          onClick={() => write?.()}
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
      {isLoading && <div>Minting...</div>}
      {isSuccess && (
        <div>
          NFT Minted! Check it out at: https://sepolia.etherscan.io/tx/
          {JSON.stringify(data?.hash)}
        </div>
      )}
      <div className="w-full h-full flex flex-row items-center justify-center gap-10">
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
