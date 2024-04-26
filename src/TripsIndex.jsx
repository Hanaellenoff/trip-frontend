/* eslint-disable react/prop-types */

export function TripsIndex(props) {
  const handleClick = (tripId) => {
    console.log("HERE:", tripId);
    props.onDestroyTrip(tripId);
  };

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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
