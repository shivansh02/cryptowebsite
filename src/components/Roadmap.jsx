import React from "react";

const Roadmap = () => {
  return (
    <div className="roadmap-container my-10" id="roadmap">
      <h1 className=" text-4xl fo font-bold text-white mb-2 md:mb-8">
        Roadmap
      </h1>
      <div className="flex flex-wrap justify-around">
        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
          <div className="bg-blue-950 rounded-2xl shadow p-6 text-white">
            <h2 className="font-bold mb-4 text-2xl">Phase 1</h2>
            <ul className="list-disc text-left mx-8 p-2">
              <li>Idea born</li>
              <li>Socials, website, design</li>
              <li>Contract creation</li>
              <li>Audit</li>
              <li>Torkpad Launchpad</li>
              <li>Community building (Telegram, Twitter)</li>
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
          <div className="bg-blue-950 rounded-lg shadow p-6 text-white">
            <h2 className="font-bold mb-4 text-2xl">Phase 2</h2>
            <ul className="list-disc mx-8 text-left p-2">
              <li>Community partnerships</li>
              <li>Giveaways</li>
              <li>$BTCETF launch</li>
              <li>CEX listings</li>
              <li>CG/CMC applications</li>
              <li>Trendings</li>
              <li>KOL partnerships</li>
              <li>PR campaigns</li>
              <li>Billboards</li>
              <li>Buyback System</li>
              <li>Big marketing campaigns with Twitter/X influencers</li>
              <li>Staking dApp</li>
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
          <div className="bg-blue-950 rounded-lg shadow p-6 text-white">
            <h2 className="font-bold mb-4 text-2xl">Phase 3</h2>
            <ul className="list-disc mx-8 text-left p-2">
              <li>Lottery dApp with auto-burn system</li>
              <li>BTCETF events</li>
              <li>Tier 1 CEX listings</li>
              <li>Website V2</li>
              <li>Major partnerships</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
