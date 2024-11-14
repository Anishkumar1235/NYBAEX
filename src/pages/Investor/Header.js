import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg py-2">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src="/assets/images/logo.png" width="60" alt="" />
          </Link>
          <div className="ms-auto d-flex align-items-center order-lg-3">
            <div class="d-none d-md-block">
              <Link to="/" class="btn btn-primary px-5 rounded-3 text-dark">
                Logout
              </Link>
            </div>
          </div>
          <div>
            <button
              className="navbar-toggler collapsed ms-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-default"
              aria-controls="navbar-default"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar mt-0" />
              <span className="icon-bar middle-bar" />
              <span className="icon-bar bottom-bar" />
            </button>
          </div>
          <div className="collapse navbar-collapse ps-lg-5" id="navbar-default">
            <ul className="navbar-nav mt-3 mt-lg-0">
              <li className="nav-item">
                <Link to="/i-dashboard" className="nav-link">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Invested
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Manage Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
