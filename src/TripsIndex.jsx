/* eslint-disable react/prop-types */
export function TripsIndex(props) {
  const handleClick = (tripId) => {
    console.log("HERE:", tripId);
    props.onDestroyTrip(tripId);
  };

  return (
    <div className="card">
      {props.trips.map((trip, index) => (
        <div key={index}>
          <h1>{trip.title}</h1>
          <p>Trip Number: {trip.id}</p>
          <img src={trip.image_url} />
          <button onClick={() => props.onShowTrip(trip)}>More Info</button>
          <button onClick={() => handleClick(trip.id)}>Delete Trip</button>
        </div>
      ))}
    </div>
  );
}
