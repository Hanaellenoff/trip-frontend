/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.css";

export function TripsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  const [displayedTrips, setDisplayedTrips] = useState(props.trips);

  const handleSearch = () => {
    setDisplayedTrips(props.trips.filter((trip) => trip.title.toLowerCase().includes(searchFilter.toLowerCase())));
    setSearchFilter("");
    console.log("search barrr", props.trip);
  };

  const handleClick = (tripId) => {
    console.log("HERE:", tripId);
    props.onDestroyTrip(tripId);
  };

  const handleFavorite = (tripId) => {
    console.log("Favoriting Trip:", tripId);
    if (isFavorited.includes(tripId)) {
      axios.delete(`http://localhost:3000/unfavorite/${tripId}.json`).then((response) => {
        console.log(response.data);
      });
    } else {
      axios.post("http://localhost:3000/favorites.json", { id: tripId }).then((response) => {
        console.log(response.data);
      });
    }
  };

  const handleMyTrips = (tripId) => {
    console.log("MyTrips:", tripId);
    if (isMyTrips.includes(tripId)) {
      axios.delete(`http://localhost:3000/my_trips/${tripId}.json`).then((response) => {
        console.log(response.data);
      });
    } else {
      axios.post("http://localhost:3000/my_trips.json", { id: tripId }).then((response) => {
        console.log(response.data);
      });
    }
  };

  console.log(props.favorites);
  console.log("myTrips", props.myTrips);

  const isFavorited = props.favorites.map((trip) => trip.id);
  const isMyTrips = props.myTrips.map((trip) => trip.id);

  useEffect(() => {
    setDisplayedTrips("");
  }, [props.trips]);

  return (
    <div>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          list="vacations"
          onChange={(event) => setSearchFilter(event.target.value)}
        />
        <datalist id="vacations">
          {searchFilter === "" ? (
            <option> </option>
          ) : (
            props.trips.map((trip) => <option key={trip.id}>{trip.title}</option>)
          )}
        </datalist>
        <button className="btn btn-outline-success" type="submit" onClick={handleSearch}>
          Search
        </button>
        {/* SEARCH INDEX  */}
        {/* {displayedTrips.map((trip) => (
          <div id={props}>
          <p>Hiiiii</p>
          </div>
        ))} */}

        {/* INDEX */}
      </form>
      <div id="bannerimage"></div>
      <div className="container">
        <div className="row">
          {props.trips
            .filter((trip) => trip.title.toLowerCase().includes(searchFilter.toLowerCase()))
            .map((trip, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img src={trip.image_url} className="card-img-top h-100" alt="Trip" />
                  <div className="card-body">
                    <h5 className="card-title">{trip.title}</h5>
                    <p className="card-text">Trip Number: {trip.id}</p>
                    <button
                      type="button"
                      className="btn btn-outline-success mr-2"
                      onClick={() => props.onShowTrip(trip)}
                    >
                      More Info
                    </button>
                    <button type="button" className="btn btn-outline-danger" onClick={() => handleClick(trip.id)}>
                      Delete Trip
                    </button>
                    {localStorage.jwt !== undefined && (
                      <>
                        <div
                          className={`btn btn-secondary bg-transparent border-0`}
                          onClick={() => {
                            handleFavorite(trip.id);
                            window.location.reload();
                          }}
                          style={{ position: "relative" }}
                        >
                          <i
                            className={`bi ${
                              isFavorited.includes(trip.id)
                                ? "bi-heart-fill text-danger fs-4"
                                : "bi-heart text-black fs-4"
                            }`}
                            style={{ transition: "color 0.3s" }}
                          ></i>
                        </div>

                        <button
                          className="button_style"
                          onClick={() => {
                            handleMyTrips(trip.id);
                            window.location.reload();
                          }}
                        >
                          Add to My Trips
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
