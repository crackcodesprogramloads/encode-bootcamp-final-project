import ConnectWallet from "./ConnectWallet";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-screen h-20 px-10 flex items-center justify-between">
      <p className="w-40 flex justify-center text-2xl">Logo</p>
      <h1 className="text-4xl font-bold">NFT PROJECT</h1>
      <div className="w-40 flex justify-center">
        <ConnectWallet />
      </div>
    </div>
  );
}
