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

            {/* form */}
            <form>
              <h1>Edit Place</h1>
              <div>
                Name: <input defaultValue={place.name} name="name" type="text" />
              </div>

              <div>
                Trip Number: <input defaultValue={place.trip_id} name="trip_id" type="integer" />
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

              <button className="button_style" type="onSubmit">
                Update
              </button>
            </form>
          </div>
        ))}
      </div>
    );
  }
}
