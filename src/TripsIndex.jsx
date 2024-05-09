/* eslint-disable react/prop-types */
import axios from "axios";
import React from "react";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";

export function TripsIndex(props) {
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
                    window.location.reload();
                  }}
                >
                  <i
                    className={isFavorited.includes(trip.id) ? "star-filled fa fa-star" : "star-not-filled fa fa-star"}
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
