import CardComponent from "./CardComponent";
import FeedTopBar from "./FeedTopBar";

// import SelectFeed from "./SelectFeed";
import Loader from "../utilities/Loader";
import Error from "../utilities/Error";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { setTypeNews } from "../../slices/LatestSlice";

export default function Feed({ error, isOnline }) {
  const dataState = useSelector((state) => state.latestNews);
  console.log(dataState.status);
  const headlinesState = useSelector((state) => state.headlines);

  return (
    <div className="flex-2 bg-white px-2 relative w-full ">
      {dataState.status === "ready" && headlinesState.status === "ready" && (
        <div className="w-full">
          <Outlet />
        </div>
      )}
      {dataState.status === "loading" ||
        (headlinesState.status === "loading" && <Loader />)}
      {dataState.status === "error" ||
        (headlinesState.status === "error" && (
          <Error error={dataState.errMsg} />
        ))}
    </div>
  );
}
