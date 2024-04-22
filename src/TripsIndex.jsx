/* eslint-disable react/prop-types */
export function TripsIndex(props) {
  return (
    <div className="card">
      {props.trips.map((trip, index) => (
        <div key={index}>
          <h1>{trip.title}</h1>
          <p>Trip Number: {trip.id}</p>
          <img src={trip.image_url} />
        </div>
      ))}
    </div>
  );
}
