import React from "react";
import "./styles/App.css";
import HomePage from "./components/pages/HomePage.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Trains from "./components/pages/Trains";
import ArtistUpload from "./components/pages/ArtistUpload.jsx";

function App() {
  return (
    <div>
		<Routes>
			<Route path="/" element = {<HomePage />} />
			<Route path="/homepage" element = {<Trains />} />
			<Route path="/contentid" element = {<ArtistUpload />} />
		</Routes>
    </div>
  );
}
export default App;
