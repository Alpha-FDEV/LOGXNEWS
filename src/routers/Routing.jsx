import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Followed from "../components/followandblocked/Followed";
import ContentAndLanguage from "../components/feed/ContentAndLanguage";
import Feed from "../components/feed/Feed";

import UseFetchHeadlines from "../components/newsData/UseFetchHeadlines";
import TopLoader from "nextjs-toploader";
import Headlines from "../components/headlines/Headlines";
import UsehandleStates from "../components/UseHandleStates.jsz";
import { useSelector } from "react-redux";
import SelectFeed from "../components/feed/SelectFeed";
import LatestNews from "../components/latestNews/LatestNews";
import AppLayout from "../components/utilities/AppLayout";
import FeedFavored from "../components/feed/FeedFavored";
import Blocked from "../components/followandblocked/Blocked";
import FollowedUsers from "../components/feed/FollowedUsers";
import Bookamark from "../components/feed/Bookamark";
import LeaderBoard from "../components/feed/LeaderBoard";
import Login from "../components/login/Login";
import Explore from "../components/feed/explore/Explore";
import Trending from "../components/feed/trending/Trending";

function Routing() {
  const headlines = UseFetchHeadlines();
  const [status, articles, query, error, isOnline, dispatch] =
    UsehandleStates();

  return (
    <div>
      <TopLoader />

      <Routes>
        {/* Base Route */}
        <Route path="/news" element={<AppLayout />} />

        {/* Dynamic Feed Route */}
        <Route path=":type" element={<Feed isOnline={isOnline} />}>
          {/* Default route under :type */}
          <Route index element={<LatestNews />} />

          {/* Specific routes under :type */}
          <Route path="headlines" element={<Headlines />} />
          <Route path="programming" element={<Headlines />} />
          <Route path="environment" element={<Headlines />} />
          <Route path="sports" element={<Headlines />} />
          <Route path="technology" element={<Headlines />} />
          <Route path="stockmarket" element={<Headlines />} />
          <Route path="science" element={<Headlines />} />
          <Route path="travel" element={<Headlines />} />
          <Route path="ai" element={<Headlines />} />
          <Route path="fashionbusiness" element={<Headlines />} />
          <Route path="politics" element={<Headlines />} />
          <Route path="health" element={<Headlines />} />
          <Route path="business" element={<Headlines />} />
          <Route path="entertainment" element={<Headlines />} />
          <Route path="education" element={<Headlines />} />
          <Route path="enviroment" element={<Headlines />} />
          <Route path="history" element={<Headlines />} />
          <Route path="lifestyle" element={<Headlines />} />
          <Route path="explores" element={<Explore />} />
          <Route path="trending" element={<Trending />} />
          <Route path="following" element={<FollowedUsers />} />
          <Route path="bookmarkedPosts" element={<Bookamark />} />
          <Route path="users" element={<LeaderBoard />} />
          <Route path="latest" element={<LatestNews />} />
        </Route>
        {/* Feed Overview Nested Routes */}
        <Route path="news/feedoverview" element={<SelectFeed />}>
          <Route path="myfeed" element={<FeedFavored />} />
          <Route index element={<Navigate replace to="myfeed" />} />
          <Route path="contentandlanguage" element={<ContentAndLanguage />} />
          <Route path="following" element={<Followed />} />
          <Route path="blocked" element={<Blocked />} />
        </Route>

        {/* Fallback for unsupported routes */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default Routing;
