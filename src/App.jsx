import { useDispatch } from "react-redux";
import AppLayout from "./components/utilities/AppLayout";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { setTypeNews } from "./slices/LatestSlice";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <AppLayout />
      <ToastContainer />
    </div>
  );
}

export default App;
