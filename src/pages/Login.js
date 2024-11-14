import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="login-bg vh-100 vw-100">
        <div
          className="container h-100 w-100 d-flex align-items-center"
        >
          <div className="col-lg-5 col-md-7 col-12 offset-lg-7 offset-md-5">
            <div className="p-5 rounded-4 bg-white">
              <div className="m-5">
                <h2 className="lh-1 mb-5">
                  Get started with your phone number
                </h2>
                <div>
                  <div className="row g-2">
                    <div className="mb-2 mb-md-0 col-md-6">
                      <button className="border border-1 bg-white shadow-sm p-4 rounded-4">
                        <span>Investor</span>
                        <img
                          src="https://cdn.prod.website-files.com/660fec29bd77a271c07eb5b6/66718347d3a6d3a05cfd0fdd_Frame%2037746%20(2)%20(1).png"
                          className="mt-4"
                          width="100"
                        />
                      </button>
                    </div>
                    <div className="mb-2 mb-md-0 col-md-6">
                      <button className="border border-1 bg-light shadow-sm p-4 rounded-4">
                        <span>Content Producer</span>
                        <img
                          src="https://cdn.prod.website-files.com/660fec29bd77a271c07eb5b6/66717f3f1ca65dd5891f5132_Frame%2037746%20(1).png"
                          className="mt-4"
                          width="100"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <label>
                    Phone No{" "}
                    <i className="bi bi-info-circle-fill text-secondary ms-1"></i>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Phone Number"
                  />
                </div>
                <Link
                  to="/register"
                  class="btn btn-primary btn-lg mt-4 w-100 rounded-3 fs-5 text-dark"
                >
                  Continue <i className="bi bi-arrow-right ms-2"></i>
                </Link>
                <div className="mt-3 px-6">
                  <p className="mb-0 text-center">
                    By continuing you accept the{" "}
                    <a href="#" className="text-inherit fw-semibold">
                      <u>T&C Apply</u>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
