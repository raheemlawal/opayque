"use client";

import Image from "next/image";
import { WalletProvider } from "@demox-labs/aleo-wallet-adapter-react";
import { WalletModalProvider } from "@demox-labs/aleo-wallet-adapter-reactui";
import { LeoWalletAdapter } from "@demox-labs/aleo-wallet-adapter-leo";
import {
  DecryptPermission,
  WalletAdapterNetwork,
} from "@demox-labs/aleo-wallet-adapter-base";
import { WalletMultiButton } from "@demox-labs/aleo-wallet-adapter-reactui";
import { useMemo } from "react";
import Hero from "./hero";
import styles from "./style";

// Default styles that can be overridden by your app
require("@demox-labs/aleo-wallet-adapter-reactui/styles.css");

export default function Home() {

  const wallets = useMemo(
    () => [
      new LeoWalletAdapter({
        appName: "Leo Demo App",
      }),
    ],
    []
  );

  return (
    <WalletProvider
      wallets={wallets}
      decryptPermission={DecryptPermission.UponRequest}
      network={WalletAdapterNetwork.Testnet}
      autoConnect
    >
      <WalletModalProvider>
        <div className="flex flex-col px-24 pt-6 bg-black">
          
          {/* Navbar */}
          <div className="w-full items-center justify-between font-mono lg:flex h-10">
            <div className="flex flex-row h-screen items-center">
              <h1 className="text-3xl font-black ms-4 me-4">Opayque!</h1>
              <h1 className="ms-4 me-4 text-3xl font-extralight">|</h1>
              <button className="btn p-2 rounded me-4 font-bold  hover:underline">Create</button>
              <button className="btn p-2 rounded me-4 font-bold  hover:underline">Explore</button>
              
            </div>
            <input className="shadow appearance-none border rounded w-2/6 p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-bold" id="username" type="text" placeholder="Search NFT Marketplace..."></input>
            <div>
              <WalletMultiButton className="selectWalletButton"/>
            </div>
          </div>

          {/* Main */}
          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
            </div>
          </div>

          {/* Footer */}
          <div className="w-full items-center justify-between font-mono lg:flex h-10">
            <div className="flex flex-row h-screen items-center">
            </div>
            <div>
              <h1 className="text-sm font-black ms-4 me-4">Built by Raheem/1418 Technologies.</h1>
            </div>
          </div>
        </div>
        </WalletModalProvider>
    </WalletProvider>
  );
}
