/* eslint-disable react/prop-types */
export function FavoritesIndex(props) {
  console.log(props.favorites);
  return (
    <div className="container">
      <h2> Favorite Trips </h2>
      <div className="row">
        {props.favorites.map((trip) => (
          <div key={trip.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={trip.image_url} className="card-img-top h-50" alt="Trip" />
              <div className="card-body">
                <h5 className="card-title">{trip.title}</h5>
                <p className="card-text">Trip Number: {trip.id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
