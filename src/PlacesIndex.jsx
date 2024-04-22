/* eslint-disable react/prop-types */
export function PlacesIndex(props) {
  return (
    <div>
      <h1>Places</h1>
      {props.places.map((place, index) => (
        <div key={index}>
          <p>{place.trip_id}</p>
          <h2>{place.name}</h2>
          <p>{place.address}</p>
          <p>{place.description}</p>
          <img src={place.image_url} />
        </div>
      ))}
    </div>
  );
}
