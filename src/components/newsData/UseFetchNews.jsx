import { useEffect } from "react";
import {
  dataFailure,
  dataLoading,
  loadingSuccess,
} from "../../slices/LatestSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UseFetchHeadlines from "./UseFetchHeadlines";

const API_KEY = "1b06db323a6641108397cfcd62d2c714";

function UseFetchNews(query = "") {
  const dispatch = useDispatch();

  useEffect(
    function () {
      function getArticles(articles) {
        const CompleteArticles = articles.filter((article) => {
          return (
            article.title &&
            article.author &&
            article.description &&
            article.content &&
            article.publishedAt &&
            article.urlToImage
          );
        });

        dispatch(loadingSuccess(CompleteArticles));
      }

      const controller = new AbortController();
      async function fetchNews() {
        try {
          dispatch(dataLoading());

          const res = await fetch(
            `https://newsapi.org/v2/everything?q=${
              query ? query : "latest"
            }&apiKey=${API_KEY}`,
            { signal: controller.signal } // Ensure the AbortController is used correctly
          );

          if (!res.ok) {
            throw new Error("Something went wrong 🧯check your connection");
          }

          const data = await res.json();

          if (!data.articles || data.articles.length === 0) {
            throw new Error("🧯Could not find news");
          }

          getArticles(data.articles);
        } catch (err) {
          dispatch(dataFailure(err.message)); // Ensure you handle the error state in Redux
        }
      }

      fetchNews();
      return function () {
        controller.abort(); // Properly clean up the fetch request
      };
    },
    [query, dispatch]
  );
}

export default UseFetchNews;
