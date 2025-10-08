import { useState, useEffect } from "react";
import fetchNews from "../api.js";

export default function DesignNews() {
  const [articles, setArticles] = useState([]);
   const currentDate = new Date().toISOString().split('T')[0]; 
    console.log('Current date:', currentDate); 

    

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetchNews('design'); // wait for the promise to resolve
      console.log("Fetched articles:", response);
      console.log('Hello');                                               // log the fetched articles
      setArticles(response);
    };
    fetchArticles();
  }, []);

  const currentPath = window.location.pathname; 
  const label = currentPath.replace("/", "").charAt(0).toUpperCase() + currentPath.replace("/", "").slice(1) + ' ' + 'News';// Get current path of the page

  // Helper function to capitalize first letter
  
  const breadcrumbPath = (currentPath) => {
    if (!currentPath) return "";
    return currentPath.charAt(0).toUpperCase() + currentPath.slice(1);
  };

  return (
    <div>
      <div
        id="top"
        className="flex flex-row items-center justify-between my-3 px-1"
      >
        <div>
          <a href="/" className="text-xs text-gray-400 ">
            Home
          </a>
          <span className="text-xs text-gray-400 px-1 ">/</span>
          <a href={currentPath} className="text-xs text-gray-400">
            {breadcrumbPath(currentPath.replace("/", ""))}
          </a>
        </div>
        <div>
          <h1 className="text-sm">{label}</h1>
        </div>
      </div>

      <article className="grid grid-cols-1 relative">
        {articles &&
          articles.map((article, index) => (
            <div key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border-t border-gray-200 my-2">
                <div className="text-left">
                  <span className="text-black text-sm bg-green-300 py-1 px-2 mt-1">
                    {article.source.name}
                  </span>
                  <h2 className="font-bold  my-4 text-2xl">{article.title}</h2>
                  <p className="my-4 text-md text-black">
                    {article.description}
                  </p>
                  <div className="flex flex-row items-center justify-between">
                    <h6 className="text-sm text-gray-500">
                      — {article.author}
                    </h6>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3"
                    >
                      <span className="text-sm text-blue-500">
                        Read full article
                      </span>
                    </a>
                  </div>
                </div>
                <div className="overflow-hidden my-4 md:pl-4">
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="object-fit"
                  />
                </div>
              </div>
            </div>
          ))}
        <div className="fixed bottom-0 right-0 z-50 p-4  bg-white text-black">
          <button
            className="text-xs cursor-pointer border-b py-1"
            onClick={() => window.scrollTo(0, 0)}
          >
            Back to Top
          </button>
        </div>
      </article>
    </div>
  );
}
