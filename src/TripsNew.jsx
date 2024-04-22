/* eslint-disable react/prop-types */
export function TripsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateTrip(params, () => event.target.reset());
  };
  return (
    <div>
      <h2>Add a Trip</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          image_url: <input name="image_url" type="img" />
        </div>
        <button type="submit">Add new</button>
      </form>
    </div>
  );
}
