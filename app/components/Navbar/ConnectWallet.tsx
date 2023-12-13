import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function ConnectWallet() {
  return (
    <ConnectButton
      accountStatus="address"
      chainStatus="name"
      showBalance={false}
    />
  );
}
