import React from "react";

const Tokenomics = () => {
  const tokenomicsData = [
    { symbol: "SYMBOL", value: "21,000,000,000" },
    { symbol: "Airdrop", value: "10%" },
    { symbol: "Liquidity", value: "15%" },
    { symbol: "Marketing & Promotion", value: "7%" },
    { symbol: "CEX Listing", value: "13%" },
    { symbol: "Launchpad", value: "10%" },
    { symbol: "Team", value: "15%" },
    { symbol: "Partners", value: "10%" },
    { symbol: "Staking Reward", value: "20%" },
    { symbol: "Airdrop", value: "10%" },
    { symbol: "Liquidity", value: "15%" },
    { symbol: "Marketing & Promotion", value: "7%" },
  ];

  const splitIndex = Math.ceil(tokenomicsData.length / 2);
  const firstColumn = tokenomicsData.slice(0, splitIndex);
  const secondColumn = tokenomicsData.slice(splitIndex);

  const renderColumn = (columnData) => (
    <div className="flex-1">
      {columnData.map((row, index) => (
        <div key={index} className="flex justify-between items-center border-b border-white py-2">
          <span className="text-sm font-thin mr-8 text-white">{row.symbol}</span>
          <span className="text-lg font-bold text-white">{row.value}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="overflow-x-auto mb-10">
      <h1 className="font-bold text-5xl text-white mb-4 md:mb-8">Tokenomics</h1>
      <div className="flex flex-col md:flex-row gap-x-20">
        {renderColumn(firstColumn)}
        {renderColumn(secondColumn)}
      </div>
    </div>
  );
};

export default Tokenomics;
