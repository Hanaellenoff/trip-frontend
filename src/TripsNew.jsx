/* eslint-disable react/prop-types */
export function TripsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateTrip(params, () => event.target.reset());
  };
  return (
    <div className="form-container">
      <h2>Add a Trip</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" className="form-control" />
        </div>
        <div className="form-group">
          Image_url: <input name="image_url" type="img" className="form-control" />
        </div>
        <button className="button_style" type="submit">
          Add new
        </button>
      </form>
    </div>
  );
}
