import Header from "./Header";

function Profile() {
  return (
    <>
      <Header />

      <section class="pt-5 mt-4 pb-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-4 col-md-6 col-12">
              <div class="rounded-top"></div>
              <div class="card bg-light px-4 pt-2 pb-4 shadow-sm rounded-top-0 rounded-bottom-0 rounded-bottom-md-2">
                <div class="d-flex align-items-end justify-content-between">
                  <div class="d-flex align-items-center">
                    <div class="me-2 position-relative d-flex justify-content-end align-items-end mt-n5">
                      <img
                        src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-1.jpg"
                        class="avatar-xl rounded-circle border border-4 border-white position-relative"
                        alt="avatar"
                      />
                      <a
                        href="#"
                        class="position-absolute top-0 end-0"
                        data-bs-toggle="tooltip"
                        data-placement="top"
                        title="Verified"
                      >
                        <img
                          src="https://geeksui.codescandy.com/geeks/assets/images/svg/checked-mark.svg"
                          alt="checked"
                          height="30"
                          width="30"
                        />
                      </a>
                    </div>
                    <div class="lh-1">
                      <h2 class="mb-0">Nybaex India</h2>
                      <p class="mb-0 d-block">@nybaex</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mb-7">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="mx-5 my-3">
                  <h2 className="lh-1 mb-2">Account Details</h2>
                  <div className="row g-5">
                    <div className="col-lg-6 col-12">
                      <div className="mt-4">
                        <label>Name</label>
                        <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="Your Name"
                          value="Nybaex India"
                          readOnly
                        />
                      </div>
                      <div className="mt-4">
                        <label>Phone No.</label>
                        <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="Phone No."
                          value="+91 8825315449"
                          readOnly
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox1"
                            >
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox2"
                            >
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox3"
                            >
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox3"
                            >
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox3"
                            >
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox3"
                            >
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox3"
                            >
                              Portfolio Management Services
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div>
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox1"
                            >
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox2"
                            >
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox3"
                            >
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox3"
                            >
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
                            <label
                              class="form-check-label"
                              for="inlineCheckbox3"
                            >
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
                    </div>
                  </div>
                  <div className="mt-5">
                    <hr />
                  </div>
                  <h2 className="lh-1 mt-5 mb-2">Payment Details</h2>
                  <div className="row g-5">
                    <div className="col-lg-6 col-12">
                      <div className="mt-4">
                        <label>Account Number</label>
                        <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="Account Number"
                        />
                      </div>
                      <div className="mt-4">
                        <label>IFSC Code</label>
                        <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="Account Number"
                        />
                      </div>
                      <div className="mt-4">
                        <label>Bank Name</label>
                        <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="Bank Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="mt-4">
                        <label>A/C Holder Name</label>
                        <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="A/C Holder Name"
                        />
                      </div>
                      <div className="mt-4">
                        <label>Branch</label>
                        <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="Branch"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <hr />
                  </div>
                  <h2 className="lh-1 mt-5 mb-2">KYC Details</h2>
                  <div className="row g-5">
                    <div className="col-lg-6 col-12">
                      <div className="mt-4">
                        <label>CIN No.</label>
                        <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="CIN No."
                        />
                      </div>
                      <div className="mt-4">
                        <label>PAN No.</label>
                        <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="PAN No."
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="mt-4">
                        <label>GST No.</label>
                        <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="GST No."
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <a class="btn btn-warning btn-lg mt-4 px-5 rounded-3 fs-5 mt-8 text-white">
                      <span className="mx-4">Update Account</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
