import React from "react";
import { useSelector } from "react-redux";
import "./globals.css";
import Loader from "./components/Loader/loader";
import { UserReducerType } from "./utils/types";
import DataEntry from "./views/database/data-base";
import Admin from "./views/admin";
import Header from "./components/header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IpoDatabase from "./views/database/ipo";
import IpoTracker from "./components/tabpanel/ipoTracker";
import GmpDatabase from "./views/database/gmp";
import IpoReviewsDatabase from "./views/database/reviews";
import AddIpo from "./components/database/addIpoDb";
import UpdateAndDeleteIpo from "./components/database/updateDeleteIpo";
import Home from "./views/home";
import IpoTrackerDatabase from "./views/database/ipoTracker";

function App() {
  const view = useSelector((state: UserReducerType) => state.user.view);

  return (
    <div className="App h-[100vh] overflow-hidden">
      {/* {view !== "auth" && <Header />}
      {view === "auth" && <Loader />}
      {view === "DATABASE" && <DataEntry />}
      {view === "ADMIN" && <Admin />} */}
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/database" element={<DataEntry />} />

          <Route path="/database/ipo" element={<IpoDatabase />} />
          <Route path="/database/ipo/add" element={<AddIpo />} />
          <Route path="/database/ipo/update_delete" element={<UpdateAndDeleteIpo />} />

          <Route path="/database/tracker" element={<IpoTrackerDatabase />} />
          <Route path="/database/gmp" element={<GmpDatabase />} />
          <Route path="/database/reviews" element={<IpoReviewsDatabase />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
