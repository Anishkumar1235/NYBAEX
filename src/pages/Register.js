import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="login-bg vh-100 vw-100">
        <div className="container h-100 w-100 d-flex align-items-center">
          <div className="col-lg-5 col-md-7 col-12 offset-lg-7 offset-md-5">
            <div className="p-5 rounded-4 bg-white">
              <div className="m-5">
                <h2 className="lh-1 mb-2">
                  Create Account : Finish Your Registration Process
                </h2>
                <div className="vh-60 overflow-scroll">
                  <div className="mt-4">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mt-3">
                    <label>What is your occupation?</label>
                    <select className="form-control mt-1" name="">
                      <option>Salaried</option>
                      <option>Self-employed</option>
                      <option>Professional</option>
                      <option>Retired</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <label>Have you participated in any of these?</label>
                    <div className="mt-1">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="option1"
                        />
                        <label class="form-check-label" for="inlineCheckbox1">
                          Invoice Discounting
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          value="option2"
                        />
                        <label class="form-check-label" for="inlineCheckbox2">
                          Real Estate
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox3"
                          value="option3"
                        />
                        <label class="form-check-label" for="inlineCheckbox3">
                          Stocks/Market Funds
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox3"
                          value="option3"
                        />
                        <label class="form-check-label" for="inlineCheckbox3">
                          Bonds/FD/RD
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox3"
                          value="option3"
                        />
                        <label class="form-check-label" for="inlineCheckbox3">
                          AIF (Alternative Investment Funds)
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox3"
                          value="option3"
                        />
                        <label class="form-check-label" for="inlineCheckbox3">
                          Startups
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox3"
                          value="option3"
                        />
                        <label class="form-check-label" for="inlineCheckbox3">
                          Portfolio Management Services
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label>
                      Why are you opting for Invoice Discounting in movies?
                    </label>
                    <div className="mt-1">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="option1"
                        />
                        <label class="form-check-label" for="inlineCheckbox1">
                          High Return - P.A
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          value="option2"
                        />
                        <label class="form-check-label" for="inlineCheckbox2">
                          Secured – Confirmed cash flows from top OTTs
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox3"
                          value="option3"
                        />
                        <label class="form-check-label" for="inlineCheckbox3">
                          Short Term – Receive return within 1-12 months
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox3"
                          value="option3"
                        />
                        <label class="form-check-label" for="inlineCheckbox3">
                          Diversification
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox3"
                          value="option3"
                        />
                        <label class="form-check-label" for="inlineCheckbox3">
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label>Referral Code (Optional)</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="Referral Code"
                    />
                  </div>
                  <Link
                    to="/c-dashboard"
                    class="btn btn-primary btn-lg mt-4 w-100 rounded-3 fs-5 text-dark"
                  >
                    Register Now
                  </Link>
                </div>
              </div>

              {/* <div className="m-5">
                <h2 className="lh-1 mb-2">
                  Create Account : Finish Your Registration Process
                </h2>
                <div className="vh-60 overflow-scroll">
                  <div className="mt-4">
                    <label>Company Name</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="mt-3">
                    <label>Company Type</label>
                    <select className="form-control mt-1" name="">
                      <option>Private Limited</option>
                      <option>LLP</option>
                      <option>Partnership</option>
                      <option>Proprietorship</option>
                    </select>
                  </div>
                  <div className="mt-3">
                    <label>Upload Agreements</label>
                    <input type="file" className="form-control mt-1" />
                  </div>
                  <div className="mt-3">
                    <label>Declaration of Work Done</label>
                    <input type="file" className="form-control mt-1" />
                  </div>
                  <div className="mt-3">
                    <label>Referral Code (Optional)</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="Referral Code"
                    />
                  </div>
                  <Link
                    to="/i-dashboard"
                    class="btn btn-primary btn-lg mt-4 w-100 rounded-3 fs-5 text-dark"
                  >
                    Register Now
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
