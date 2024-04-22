/* eslint-disable react/prop-types */
export function PlacesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePlace(params, () => event.target.reset());
  };
  return (
    <div>
      <h2>Add a Place</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>

        <div>
          Trip Number: <input name="trip_id" type="integer" />
        </div>

        <div>
          Address: <input name="address" type="text" />
        </div>

        <div>
          Description: <input name="description" type="text" />
        </div>

        <div>
          Image_url: <input name="image_url" type="img" />
        </div>

        <button type="onSubmit">Add new</button>
      </form>
    </div>
  );
}
