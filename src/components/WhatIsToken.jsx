import React from "react";

const WhatIsToken = () => {
  const tokenData = [
    {
      id: 1,
      title: "A Token For New Bitcoin ETFs",
      data: "An exchange-traded fund (ETF) for Bitcoin has been a modern dream for Bitcoin believers for years. From the first applications to the latest official validation by global investment titan BlackRock, ETFs for Bitcoin now appear inevitable. A flood of spot ETFs is expected to bolster the crypto market with billions or even trillions more dollars. Make sure you buy Bitcoin ETF Token before that happens!",
    },
    {
      id: 2,
      title: "BITCOIN ETF ALERTS",
      data: "Bitcoin ETF Token is a cryptocurrency tied to the fate of Bitcoin (BTC) and the expected ETF approvals coming from the SEC. Our news feed will keep you abreast of all the latest news surrounding Bitcoin ETFs from around the globe. Subscribe to our social media channels, turn on notifications, and you'll never miss a beat ahead of these historic events in Bitcoin's incredible history.",
    },
  ];
  return (
    <>
      <div className="flex justify-center">
        <div className="w-4/5 ">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-8">
            What is Bitcoin ETF Token ?
          </h1>
          <p className="text-white text-base md:text-xl ">
            An exchange-traded fund (ETF) for Bitcoin has been a modern dream
            for Bitcoin believers for years. From the first applications to the
            latest official validation by global investment titan BlackRock,
            ETFs for Bitcoin now appear.
          </p>
        </div>
      </div>

      <div className="flex justify-around flex-wrap mt-20 mx-8 gap-6 md:gap-4">
        {tokenData.map((token) => (
          <div key={token.id} className="w-96 bg-blue-950 rounded-xl shadow-md">
            <h3 className="p-4  text-white rounded-t-xl bg-yellow-500 font-bold text-lg md:text-xl">
              {token.title}
            </h3>
            <div className="p-4 md:p-8">
              <h3 className="text-base md:text-lg text-white">{token.data}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WhatIsToken;
