import React from "react";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import MatchDetails from "./Components/MatchDetails";
import Navbar from "./Components/Navbar";
import PointsTable from "./Components/PointsTable";

const App = () => {
  return (
      <div className="max-w-screen min-h-screen  bg-black
      ">

    <Routes className="w-full" >
      <Route path="/" element={<Navbar/>}>
      <Route path="/" element={<Home />} />
      <Route path="/pointstable" element={<PointsTable />} />
      <Route path="/news" element={<h1 className="flex justify-center text-4xl mt-30 lg:text-7xl">Coming Soon.....</h1>} />
      <Route path="/matchDetails/:id" element={<MatchDetails />} />
      </Route>
    </Routes>
      </div>
  );
};

export default App;
