/* eslint-disable react/prop-types */
export function PlacesIndex(props) {
  return (
    <div className="card">
      <h1>Places</h1>
      {props.places.map((place, index) => (
        <div key={index}>
          <p>Trip Number: {place.trip_id}</p>
          <h2>{place.name}</h2>
          <p>{place.address}</p>
          <p>{place.description}</p>
          <img src={place.image_url} />
        </div>
      ))}
    </div>
  );
}
