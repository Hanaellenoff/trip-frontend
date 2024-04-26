/* eslint-disable react/prop-types */
export function PlacesIndex(props) {
  {
    console.log("props:", props);
    console.log("trip id", props.trips.id);
    var trip_id = props.trips.id;
    var tp = props.places.filter((p) => p.trip_id === trip_id);
    console.log("tp", tp);
    return (
      <div className="card">
        <h1>Places</h1>
        {tp.map((place, index) => (
          <div key={index}>
            <h2>{place.name}</h2>
            <p>Trip Number: {place.trip_id}</p>
            <p>{place.address}</p>
            <p>{place.description}</p>
            <img src={place.image_url} />
          </div>
        ))}
      </div>
    );
  }
}
