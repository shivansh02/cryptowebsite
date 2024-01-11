import React from "react";

const HowToBuy = () => {
  return (
    <div className="howtobuy-container my-8 md:my-10" id="howToBuy">
      <h1 className="text-3xl md:text-5xl font-semibold text-white">
        How To Buy
      </h1>
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-500 to-yellow-700 inline-block text-transparent bg-clip-text md:mt-2">
        $BTCETF
      </h1>
      <div className="flex flex-col md:flex-row items-start justify-start space-y-8 md:space-y-0 md:space-x-0 md:space-x-4 my-8 md:my-16">
        <div className="relative flex flex-col items-center w-full md:w-1/4">
          <div className="w-28 h-28 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-yellow-500 text-white rounded-full flex items-center justify-center text-4xl font-bold md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl shadow-xl">
            1
          </div>
          <div className="mt-2 text-center text-white px-4 lg:px-8">
            <h3 className="text-xl pb-2 md:text-4xl font-bold font-semibold">
              Create a Wallet
            </h3>
            <p className="text-xs md:text-sm lg:text-base">
              Install MetaMask or TrustWallet and follow their simple setup
              instructions.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col items-center w-full md:w-1/4">
          <div className="w-28 h-28 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-yellow-500 text-white rounded-full flex items-center justify-center text-4xl font-bold md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl shadow-xl">
            2
          </div>
          <div className="mt-2 text-center text-white px-4 lg:px-8">
            <h3 className="text-xl pb-2 md:text-4xl font-bold font-semibold">
              Get Some AVAX
            </h3>
            <p className="text-xs md:text-sm lg:text-base">
              Add AVAX to your new wallet by transferring from an exchange (ex.
              CoinBase, Binance) or purchasing directly.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col items-center w-full md:w-1/4">
          <div className="w-28 h-28 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-yellow-500 text-white rounded-full flex items-center justify-center text-4xl font-bold md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl shadow-xl">
            3
          </div>
          <div className="mt-2 text-center text-white px-4 lg:px-8">
            <h3 className="text-xl pb-2 md:text-4xl font-bold font-semibold">
              Go To TraderJOE
            </h3>
            <p className="text-xs md:text-sm lg:text-base">
              Connect MetaMask wallet and swap $AVAX or any other token for
              $BTCETF on PancakeSwap.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col items-center w-full md:w-1/4">
          <div className="w-28 h-28 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-yellow-500 text-white rounded-full flex items-center justify-center text-4xl font-bold md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl shadow-xl">
            4
          </div>
          <div className="mt-2 text-center text-white px-4 lg:px-8">
            <h3 className="text-xl pb-2 md:text-4xl font-bold font-semibold">
              HODL
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
