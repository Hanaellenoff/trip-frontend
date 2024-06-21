/* eslint-disable react/prop-types */
import "bootstrap-icons/font/bootstrap-icons.css";

export function PlacesIndex(props) {
  const handleSubmit = (event) => {
    console.log("hana", props.places.id);
    event.preventDefault();
    const params = new FormData(event.target);
    const id = params.get("id");
    console.log(params, id);
    props.onUpdatePlace(params, id);
    event.target.reset();
  };

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
          <img src={place.image_url} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{place.name}</h5>
            <p className="card-text">{place.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Trips Number: {place.trip_id}</li>
            <li className="list-group-item">Address: {place.address}</li>
          </ul>
          <div className="card-body">
            {/* <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a> */}
          </div>

          {/* <img src={place.image_url} /> */}

          {/* form */}
          <form onSubmit={handleSubmit}>
            <h1>Edit Place</h1>
            <div>
              Name: <input defaultValue={place.name} name="name" type="text" />
            </div>

            <div>
              Trip Number: <input defaultValue={place.trip_id} name="trip_id" type="integer" />
            </div>
            <div>
              <input defaultValue={place.id} name="id" type="hidden" />
            </div>

            <div>
              Address: <input defaultValue={place.address} name="address" type="text" />
            </div>

            <div>
              Description: <input defaultValue={place.description} name="description" type="text" />
            </div>

            <div>
              Image_url: <input defaultValue={place.image_url} name="image_url" type="img" />
            </div>

            <button
              onClick={() => {
                window.location.reload();
              }}
              className="button_style"
              type="onSubmit"
            >
              Update
            </button>
          </form>
        </div>
      ))}
    </div>
  );
}
