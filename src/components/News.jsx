import React from "react";

const News = () => {
  const newsData = [
    {
      id: 1,
      title: "Bitcoin ETF Will Be Approved Before Jan-10th 2024",
      imageUrl: "https://placekitten.com/300/200",
      websiteUrl: "https://example.com/news1",
    },
    {
      id: 2,
      title: "Latest Update 2",
      imageUrl: "https://placekitten.com/301/200",
      websiteUrl: "https://example.com/news2",
    },
    {
      id: 3,
      title: "Top Story 3",
      imageUrl: "https://placekitten.com/302/200",
      websiteUrl: "https://example.com/news3",
    },
  ];
  return (
    <div className="mb-20">
      <h1 className="text-3xl font-bold text-white text-left mb-4">
        Latest Bitcoin ETF News
      </h1>
      <div className="flex justify-evenly flex-wrap">
        {newsData.map((news) => (
          <div key={news.id} className="w-80 m-4 p-4 border rounded shadow-md">
            <img
              src={news.imageUrl}
              alt={news.title}
              className="w-full h-auto rounded"
            />
            <div className="mt-4">
              <h3 className="text-lg text-white font-bold mb-12">
                {news.title}
              </h3>
              <a
                href={news.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
