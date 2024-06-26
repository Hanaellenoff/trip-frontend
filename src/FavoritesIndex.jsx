/* eslint-disable react/prop-types */
import axios from "axios";

export function FavoritesIndex(props) {
  console.log(props.favorites);

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
      <h2> Favorite Trips </h2>
      <div className="row">
        {props.favorites.map((trip) => (
          <div key={trip.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={trip.image_url} className="card-img-top h-50" alt="Trip" />
              <div className="card-body">
                <h5 className="card-title">{trip.title}</h5>
                <p className="card-text">Trip Number: {trip.id}</p>
                <button type="button" className="btn btn-outline-success mr-2" onClick={() => props.onShowTrip(trip)}>
                  More Info
                </button>
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
                      isFavorited.includes(trip.id) ? "bi-heart-fill text-danger fs-4" : "bi-heart text-black fs-4"
                    }`}
                    style={{ transition: "color 0.3s" }}
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
