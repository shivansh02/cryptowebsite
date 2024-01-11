import React, { useState } from "react";
import { TbCopy } from "react-icons/tb";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Roadmap from "./components/Roadmap";
import HowToBuy from "./components/HowToBuy";
import News from "./components/News";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import WhatIsToken from "./components/WhatIsToken";
import Tokenomics from "./components/Tokenomics";
import FAQ from "./components/FAQ";
function App() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText("0x2399EC8c5E34f83F24c43f8b0a02616fF0ad5525");
    setIsCopied(true);

    // Reset the copied status after a short delay
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div className="App bg-black min-h-screen">
      <NavBar />
      <div className="page-container mx-4 md:mx-20 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-500 to-yellow-700 inline-block text-transparent bg-clip-text mt-8 md:mt-20">
          $BTCETF
        </h1>
        <div className="header flex flex-col md:flex-row items-center justify-center mx-4 md:mx-10 my-4 md:my-8">
          <p className="text-white text-md md:text-2xl text-center md:text-left mb-4 md:mr-4">
            Introducing BTCETF Token (BTCETF) – an AVAX token celebrating
            Bitcoin ETF approvals. Stake in our verified smart contract for
            dynamic passive rewards. Join the Bitcoin community, and let's soar
            to the moon together as we showcase the power of crypto! 🚀 #BTCETF
            #BitcoinETFApproval
          </p>
          <div className="links-pill flex items-center justify-center md:bg-blue-950 md:w-96 md:h-20 md:p-10 rounded-full mb-4 md:mb-0">
            <a
              href="https://twitter.com/bitcoinetf_t"
              target="_blank"
              rel="noopener noreferrer"
              className="m-2 md:m-4"
            >
              <BsTwitterX size={30} className="text-white" />
            </a>
            <a
              href="https://t.me/BitcoinETF_Community"
              target="_blank"
              rel="noopener noreferrer"
              className="m-2 md:m-4"
            >
              <FaTelegramPlane size={30} className="text-white" />
            </a>
          </div>
        </div>
        <div className="bg-yellow-500 text-white w-full lg:w-3/5 p-2 md:p-4 rounded-full flex flex-col md:flex-row items-center justify-center gap-2">
          <a
            href="https://snowtrace.io/address/0x2399EC8c5E34f83F24c43f8b0a02616fF0ad5525"
            target="_blank"
            rel="noopener noreferrer"
            className="md:mb-0 text-center text-xs md:text-lg sm:text-base overflow-auto whitespace-nowrap"
          >
            CA:0x2399EC8c5E34f83F24c43f8b0a02616fF0ad5525
          </a>
          <button
            className="cursor-pointer focus:outline mb-2 md:mb-0 hidden md:block"
            onClick={handleCopyToClipboard}
            title="Copy to clipboard"
          >
            <TbCopy size={20} />
          </button>
        </div>
        <button
          className="cursor-pointer focus:outline mt-2 block md:hidden "
          onClick={handleCopyToClipboard}
          title="Copy to clipboard"
        >
          <TbCopy size={20} className="text-white" />
        </button>

        <Roadmap />
        <HowToBuy />
        <Tokenomics />
      </div>
      <div className="mx-4 md:mx-10">
        <News />
      </div>
      <div className="mx-4 md:mx-20">
        <WhatIsToken />
      </div>
      <div className="">
        <FAQ />
      </div>
    </div>
  );
}

export default App;
