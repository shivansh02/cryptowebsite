import React, { useState } from "react";
import { FaPlus, FaMinus, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FAQ = () => {
  const faqData = [
    {
      id: 1,
      title: "What is the purpose of the BTCETF token?",
      content:
        "Bitcoin ETF Token (BTCETF) is an AVAX token that can be staked in our verified smart contract to earn passive rewards at a dynamic rate. It has been created to celebrate the expected arrival of Bitcoin ETFs in the U.S. financial markets.",
    },
    {
      id: 2,
      title: "Is BTCETF a Bitcoin ETF?",
      content: `No, Bitcoin ETF Token is not linked to any Bitcoin ETF products that may enter the market. The roadmap does, however, correspond with actual events that are expected to occur in the crypto markets.`,
    },
    {
      id: 3,
      title: "What are the tokenomics for BTCETF?",
      content: `SYMBOL: $BTCETF\n
              SUPPLY: 21,000,000,000\n
              Airdrop: 10%\n
              Liquidity: 15%\n
              Marketing & Promotion : 7%\n
              CEX Listing: 13%\n
              Launchpad: 10%\n
              Team: 15%\n
              Partners: 10%\n
              Staking Reward: 20%`,
    },
    {
      id: 4,
      title: "How do I contact team?",
      content: `Follow our official channels to get the latest Bitcoin ETF Token news and updates. For team contact or marketing enquiries, reach out to a moderator in our Telegram channel. (Link In Bio)`,
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <h1 className=" text-4xl  font-bold text-white mt-10 mb-2 md:mb-8">
        FAQs
      </h1>
      <div className="mx-4">
        <div className="max-w-2xl mx-auto mt-8">
          {faqData.map((item) => (
            <div key={item.id} className="mb-4 border-b border-gray-300">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleAccordion(item.id)}>
                <h3 className="text-lg text-white font-medium">{item.title}</h3>
                {openIndex === item.id ? (
                  <FaMinus className="h-5 w-5 text-white" />
                ) : (
                  <FaPlus className="h-5 w-5 text-white" />
                )}
              </div>
              {openIndex === item.id && (
                <div className="mt-4 text-white">
                  {item.content.split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <hr className="mt-10 w-vw h-2 text-white"></hr>
      <div className="flex justify-center">
        <div className="w-4/5 ">
          <h1 className="text-2xl font-bold text-white mb-8">
            Join our Community
          </h1>
          <div className="flex justify-center">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl mr-8">
              <FaTelegram />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl">
              <FaXTwitter />
            </a>
          </div>
          <p className="mt-4 text-white">Copyright &copy; 2024 BTCETF &reg;</p>
        </div>
      </div>
    </>
  );
};

export default FAQ;
