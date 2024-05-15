/* eslint-disable react/prop-types */
import axios from "axios";

export function MyTripsIndex(props) {
  console.log(props.myTrips);

  const handleMyTrips = (tripId) => {
    console.log("Favoriting Trip:", tripId);
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

  console.log(props.myTrips);

  const isMyTrips = props.myTrips.map((trip) => trip.id);

  return (
    <div className="container">
      <h2> My Trips </h2>
      <div className="row">
        {props.myTrips.map((trip) => (
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
                    handleMyTrips(trip.id);
                    window.location.reload();
                  }}
                  style={{ position: "relative" }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
