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
                <Link to="/o-dashboard" className="nav-link">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/all-projects" className="nav-link">
                  All Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/all-ready" className="nav-link">
                  Ready to Releasing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
