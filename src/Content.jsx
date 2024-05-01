import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { TripsIndex } from "./TripsIndex";
import { PlacesIndex } from "./PlacesIndex";
import { TripsNew } from "./TripsNew";
import { PlacesNew } from "./PlacesNew";
import { Modal } from "./Modal";
import { TripsShow } from "./TripsShow";

export function Content() {
  const [trips, setTrips] = useState([]);
  const [places, setPlaces] = useState([]);
  const [isTripsShowVisable, setisTripsShowVisable] = useState(false);
  const [currentTrip, setCurrentTrip] = useState({});

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

  const handleDestroyTrip = (id) => {
    console.log("handleDestroyTrip", id);
    axios
      .delete(`http://localhost:3000/trips/${id}.json`)
      .then((response) => {
        // Filter out the deleted trip by comparing trip IDs
        setTrips(trips.filter((trip) => trip.id !== id));
        handleCloseTrip();
      })
      .catch((error) => {
        // Handle errors, such as displaying an error message
        console.error("Error deleting trip:", error);
      });
  };

  const handleShowTrip = (trip) => {
    setisTripsShowVisable(true);
    setCurrentTrip(trip);
  };
  const handleCloseTrip = () => {
    setisTripsShowVisable(false);
  };

  const handleUpdatePlace = (params, id) => {
    console.log(params);
    axios.patch(`http://localhost:3000/places/${id}.json`, params).then((response) => {
      setPlaces(
        places.map((place) => {
          if (place.id === params.id) {
            return response.data;
          } else {
            return place;
          }
        })
      );
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
    <main>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route
          path="/"
          element={
            <TripsIndex
              trips={trips}
              trip={currentTrip}
              onShowTrip={handleShowTrip}
              onDestroyTrip={handleDestroyTrip}
            />
          }
        />
      </Routes>
      <div className="container">
        <Modal show={isTripsShowVisable} onClose={handleCloseTrip}>
          <TripsShow trip={currentTrip} />
          <PlacesIndex places={places} trips={currentTrip} onUpdatePlace={handleUpdatePlace} />
          <PlacesNew onCreatePlace={handleCreatePlace} />
        </Modal>
        <TripsNew onCreateTrip={handleCreateTrip} />
      </div>
    </main>
  );
}
