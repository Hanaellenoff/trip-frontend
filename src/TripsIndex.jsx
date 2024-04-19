/* eslint-disable react/prop-types */
export function TripsIndex(props) {
  return (
    <div>
      {props.trips.map((trip, index) => (
        <div key={index}>
          <p>{trip.title}</p>
          <img src={trip.image_url} />
        </div>
      ))}
    </div>
  );
}
