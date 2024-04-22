/* eslint-disable react/prop-types */
export function TripsIndex(props) {
  const handleClick = () => {
    console.log("HERE:", props.trips);
    props.onDestroyTrip(props.trips.id);
  };

  return (
    <div className="card">
      {props.trips.map((trip, index) => (
        <div key={index}>
          <h1>{trip.title}</h1>
          <p>Trip Number: {trip.id}</p>
          <img src={trip.image_url} />
          <button onClick={() => props.onShowTrip(trip)}>More Info</button>
          <button onClick={handleClick}>Delete Trip</button>
        </div>
      ))}
    </div>
  );
}
