import { Link } from "react-router-dom";

export function Header() {
  let authenticationLinks;
  let hanaLink;
  let isLoggedIn;
  if (localStorage.jwt === undefined) {
    isLoggedIn = false;
    authenticationLinks = (
      <>
        <li>
          <Link className="dropdown-item" to="/signup">
            Signup
          </Link>
        </li>
        <li>
          <a className="dropdown-item" href="/login">
            Login
          </a>
        </li>
      </>
    );
  } else {
    isLoggedIn = true;
    hanaLink = (
      <>
        <li>
          <Link className="nav-link active" to="/my&nbsptrips">
            My&nbsp;Trips
          </Link>
        </li>
        <li>
          <Link className="nav-link active" to="/favorites">
            Favorites
          </Link>
        </li>
      </>
    );
  }

  return (
    // <div id="top-menu">
    <div className="bottom_50px">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            AdventureAisle
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="dropdown-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              {hanaLink}

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profile
                </a>
                <ul className="dropdown-menu">
                  {authenticationLinks}
                  {localStorage.jwt && (
                    <>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/logout">
                          Logout
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                    </>
                  )}
                  {/* <li>
                  <a className="dropdown-item" href="#">
                  Something else here
                  </a>
                </li> */}
                </ul>
              </li>

              {/* <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
              Disabled
              </a>
            </li> */}
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="bannerimage"></div>
    </div>
  );
}
