import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { TripsIndex } from "./TripsIndex";
import { PlacesIndex } from "./PlacesIndex";
import { TripsNew } from "./TripsNew";
import { PlacesNew } from "./PlacesNew";

export function Content() {
  const [trips, setTrips] = useState([]);
  const [places, setPlaces] = useState([]);
  const handleCreateTrip = (params, successCallBack) => {
    console.log("handleCreateTrip", params);
    axios.post("http://localhost:3000/trips.json", params).then((response) => {
      console.log(response.data);
      setTrips([...trips, response.data]);
      successCallBack();
    });
  };

  const handleCreatePlace = (params, successCallBack) => {
    console.log("handleCreatePlace", params);
    axios.post("http://localhost:3000/places.json", params).then((response) => {
      console.log(response.data);
      setPlaces([...places, response.data]);
      successCallBack();
    });
  };

  useEffect(() => {
    const handleTripsIndex = () => {
      console.log("handleTripsIndex");
      axios.get("http://localhost:3000/trips.json").then((response) => {
        console.log("axios");
        setTrips(response.data);
      });
    };
    const handlePlacesIndex = () => {
      console.log("handlePlacesndex");
      axios.get("http://localhost:3000/places.json").then((response) => {
        console.log("Places data:", response.data);
        setPlaces(response.data);
      });
    };

    handleTripsIndex();
    handlePlacesIndex();
  }, []);

  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <TripsNew onCreateTrip={handleCreateTrip} />
      <PlacesNew onCreatePlace={handleCreatePlace} />
      <TripsIndex trips={trips} />
      <PlacesIndex places={places} />
    </div>
  );
}
