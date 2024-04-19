import axios from "axios";
import { TripsIndex } from "./TripsIndex";
import { useState, useEffect } from "react";

export function Content() {
  const [trips, setTrips] = useState([]);
  const handleTripsIndex = () => {
    console.log("handleTripsIndex");
    axios.get("http://localhost:3000/trips.json").then((response) => {
      console.log("axios");
      setTrips(response.data);
    });
  };

  useEffect(handleTripsIndex, []);

  return (
    <div>
      <TripsIndex trips={trips} />
    </div>
  );
}
