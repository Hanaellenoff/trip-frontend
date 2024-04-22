/* eslint-disable react/prop-types */
export function TripsIndex(props) {
  return (
    <div>
      {props.trips.map((trip, index) => (
        <div key={index}>
          <h1>{trip.title}</h1>
          <p>{trip.id}</p>
          <img src={trip.image_url} />
        </div>
      ))}
    </div>
  );
}
