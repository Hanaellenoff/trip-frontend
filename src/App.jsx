// import "./App.css";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { TRIPS_API_URL } from "./config";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
function App() {
  const [trips, setTrips] = useState([]);

  const handleTripsIndex = () => {
    console.log("handleTripsIndex");
    axios.get(TRIPS_API_URL).then((response) => {
      console.log("axios");
      setTrips(response.data);
    });
  };
  useEffect(handleTripsIndex, []);
  console.log(trips);
  return (
    <div>
      <BrowserRouter>
        <Header trips={trips} />
        <Content trips={trips} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
