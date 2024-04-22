/* eslint-disable react/prop-types */
export function TripsShow(props) {
  return (
    <div>
      <h1> Trip #{props.trip.id} </h1>
      <h2> {props.trip.title} </h2>
      <img src={props.trip.image_url} />
    </div>
  );
}
