import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { TRIPS_API_URL, PLACES_API_URL } from "./config";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { TripsIndex } from "./TripsIndex";
import { PlacesIndex } from "./PlacesIndex";
import { TripsNew } from "./TripsNew";
import { PlacesNew } from "./PlacesNew";
import { Modal } from "./Modal";
import { TripsShow } from "./TripsShow";
import { FavoritesIndex } from "./FavoritesIndex";
import { MyTripsIndex } from "./MyTripsIndex";

export function Content() {
  const [trips, setTrips] = useState([]);
  const [places, setPlaces] = useState([]);
  const [isTripsShowVisable, setisTripsShowVisable] = useState(false);
  const [currentTrip, setCurrentTrip] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [myTrips, setMyTrips] = useState([]);

  const handleCreateTrip = (params, successCallBack) => {
    console.log("handleCreateTrip", params);
    axios.post(TRIPS_API_URL, params).then((response) => {
      console.log(response.data);
      setTrips([...trips, response.data]);
      successCallBack();
    });
  };

  const handleCreatePlace = (params, successCallBack) => {
    console.log("handleCreatePlace", params);
    axios.post(PLACES_API_URL, params).then((response) => {
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
      axios.get(TRIPS_API_URL).then((response) => {
        console.log("axios");
        setTrips(response.data);
      });
    };
    const handlePlacesIndex = () => {
      console.log("handlePlacesndex");
      axios.get(PLACES_API_URL).then((response) => {
        console.log("Places data:", response.data);
        setPlaces(response.data);
      });
    };

    const handleFavoritesIndex = () => {
      console.log("handleFavoritesIndex");
      axios.get("http://localhost:3000/favorites").then((response) => {
        console.log(response.data);
        setFavorites(response.data);
      });
    };
    const handleMyTripsIndex = () => {
      console.log("handleMy_TripsIndex");
      axios.get("http://localhost:3000/my_trips").then((response) => {
        console.log(response.data);
        setMyTrips(response.data);
      });
    };

    handleTripsIndex();
    handlePlacesIndex();
    handleFavoritesIndex();
    handleMyTripsIndex();
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/favorites" element={<FavoritesIndex favorites={favorites} onShowTrip={handleShowTrip} />} />
        <Route path="/my&nbsptrips" element={<MyTripsIndex myTrips={myTrips} onShowTrip={handleShowTrip} />} />
        <Route
          path="/"
          element={
            <div className="">
              <TripsNew onCreateTrip={handleCreateTrip} />
              <TripsIndex
                myTrips={myTrips}
                favorites={favorites}
                trips={trips}
                trip={currentTrip}
                onShowTrip={handleShowTrip}
                onDestroyTrip={handleDestroyTrip}
              />
            </div>
          }
        />
      </Routes>
      <div className="container">
        <Modal show={isTripsShowVisable} onClose={handleCloseTrip}>
          <TripsShow trip={currentTrip} />
          <PlacesIndex places={places} trips={currentTrip} onUpdatePlace={handleUpdatePlace} />
          <PlacesNew onCreatePlace={handleCreatePlace} />
        </Modal>
      </div>
    </main>
  );
}
