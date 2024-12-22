import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataFailure, dataLoading, loadingSuccess } from "../../slices/LatestSlice";
import {
  dataHeadlinesLoading,
  loadingHeadlinesSuccess,
} from "../../slices/HeadlinesSlice";

export function Sports({ typeNews = "headlines" }) {
  console.log(typeNews);
  const dispatch = useDispatch();
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

    dispatch(loadingHeadlinesSuccess(CompleteArticles));
  }

  useEffect(
    function () {
      async function FetchSports() {
        try {
          dispatch(dataHeadlinesLoading());

          const res = await fetch(
            ` https://newsapi.org/v2/everything?q=${typeNews}&apiKey=1b06db323a6641108397cfcd62d2c714`
            );
            if(!res.ok) throw new Error("Check your connection 💭💭 and try again")
            const data = await res.json();
            
            if(!data.articles || data.articles.length === 0) throw new Error ("Could not get  any news at this time")
         
          getArticles(data.articles);
        } catch (error) {
            dispatch(dataFailure(error.message))
        }
      }
      FetchSports();
    },
    [typeNews]
  );
  return null;
}
