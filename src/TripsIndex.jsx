/* eslint-disable react/prop-types */
import axios from "axios";
import React from "react";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";

export function TripsIndex(props) {
  // const [starFill, setStarFill] = useState(false);
  // const handleStar = () => setStarFill(!starFill);
  // const [favoriteIds, setFavoriteIds] = useState([]);

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

  // const handleUnfavorite = (tripId) => {
  //   console.log("Unfavoriting Trip:", tripId);
  //   axios.delete(`http://localhost:3000/unfavorite/${tripId}.json`).then((response) => {
  //     console.log(response.data);
  //   });
  // };

  // const handleFavoriteIds = (id) => {
  //   setFavoriteIds((prev) => {
  //     // Check if the id is already in the favorites array
  //     const isFavorited = prev.includes(id);
  //     if (isFavorited) {
  //       // Remove the id from favorites
  //       return prev.filter((favId) => favId !== id);
  //     } else {
  //       // Add the id to favorites
  //       return [...prev, id];
  //     }
  //   });
  // };

  console.log(props.favorites);

  const isFavorited = props.favorites.map((trip) => trip.id);

  return (
    <div className="container">
      <div className="row">
        {props.trips.map((trip, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img src={trip.image_url} className="card-img-top" alt="Trip" />
              <div className="card-body">
                <h5 className="card-title">{trip.title}</h5>
                <p className="card-text">Trip Number: {trip.id}</p>
                <button type="button" className="btn btn-outline-success mr-2" onClick={() => props.onShowTrip(trip)}>
                  More Info
                </button>
                <button type="button" className="btn btn-outline-danger" onClick={() => handleClick(trip.id)}>
                  Delete Trip
                </button>
                <div
                  onClick={() => {
                    handleFavorite(trip.id);
                    // handleStar();
                    // handleFavoriteIds();
                    window.location.reload();
                  }}
                >
                  <i
                    className={isFavorited.includes(trip.id) ? "star-filled fa fa-star" : "star-not-filled fa fa-star"}
                    aria-hidden="true"
                  ></i>
                </div>
                {/* <div className={isFavorited.includes(trip.id) ? "star-filled" : "star-not-filled"}>
                    <i className="fa fa-star" aria-hidden="true"></i> */}
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-star"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                </svg> */}
                {/* </div> */}
                {/* <button type="button" className="btn btn-outline-success" onClick={() => handleFavorite(trip.id)}>
                  Favorite
                </button>
                <button type="button" className="btn btn-outline-danger" onClick={() => handleUnfavorite(trip.id)}>
                  Unfavorite
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
