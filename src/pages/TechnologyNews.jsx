import { useState, useEffect } from "react";
import fetchTechnologyNews from "../api.js";

export default function TechnologyNews() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetchTechnologyNews();
      console.log(response);
      setArticles(response);
    };
    fetchArticles();
  }, []);

  return (
    <div>

      <div className="flex flex-row items-center justify-between my-3 px-1">
        <div>
          <span className="text-xs text-gray-400">News / </span>{" "}
          <span className="text-xs text-gray-400">Technology</span>
        </div>
        <div>
          <h1>Technology News</h1>
        </div>
      </div>

      <article className="grid grid-cols-1">
        {articles &&
          articles.map((article, index) => (
            <div key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border-t border-gray-200 my-2">
                <div className="text-left">
                  <span className="text-black text-sm bg-green-300 py-1 px-2 mt-1">
                    {article.source.name}
                  </span>
                  <h2 className="font-bold  my-4 text-2xl">{article.title}</h2>
                  <p className="my-4 text-md text-black">{article.description}</p>
                  <h6 className="text-sm text-gray-500">— {article.author}</h6>
                </div>
                <div className="overflow-hidden my-4 pl-4">
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="object-fit"
                  />
                </div>
              </div>
            </div>
          ))}
      </article>
    </div>
  );
}
