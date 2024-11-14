//

import Header from "./Header";

function AllProjects() {
  return (
    <>
      <Header />

      <section>
        <div className="container">
          <h2 className="mb-4 mt-5">101 Project</h2>
          <div className="row">
            <div className="col-lg-6 col-12">
              <button
                // data-bs-toggle="modal"
                // data-bs-target="#detailsModal"
                className="card card-bordered mb-4 card-hover cursor-pointer"
                type="button" // Correct element for click actions
              >
                <div className="card-body">
                  <div>
                    <div className="d-xl-flex">
                      <div className="mb-3 mb-md-0">
                        <img
                          src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dharmaveer-2-et00403175-1719817449.jpg"
                          alt=""
                          className="icon-shape border rounded-4 object-fit-cover"
                          height="180"
                          width="150"
                        />
                      </div>
                      <div className="ms-xl-3 w-100 mt-3 mt-xl-1 d-flex flex-column justify-content-between">
                        <div className="d-flex justify-content-between mb-3">
                          <div>
                            <span className="badge bg-danger-soft mb-2">
                              Pending
                            </span>
                            <h3 className="mb-1 fs-4">
                              <span className="text-inherit">
                                Dharmaveeraaaaaaaaaaaaaaaaaaaa: Mukkam Post
                                Thane 2 (UA)
                              </span>
                            </h3>
                            <div>
                              <span>New Project</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="mb-2 mb-md-0">
                            <span className="me-4">
                              <i className="bi bi-camera-reels"></i>
                              <span className="ms-1">TV Show</span>
                            </span>
                            <span className="me-2">
                              <i className="bi bi-chat-square-quote"></i>
                              <span className="ms-1">English</span>
                            </span>
                            <div>
                              <i className="bi bi-calendar-week me-1"></i>{" "}
                              <span>15/10/2024</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal fade"
        id="detailsModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content rounded-4">
            <div className="end-0 position-absolute z-1">
              <button
                type="button"
                className="btn-close bg-primary opacity-100 p-3 rounded-circle m-n3"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <div className="card-body px-lg-6 px-4 py-3">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <span className="badge bg-danger-soft mb-2">Pending</span>
                    <h3 className="mb-1 fs-4">
                      <span className="text-inherit">
                        Dharmaveer: Mukkam Post Thane 2 (UA)
                      </span>
                    </h3>
                    <div>
                      <span>New Project</span>
                    </div>
                    <div className="mt-4">
                      <p className="text-dark">1.1 Content Type Selection</p>
                      <ul>
                        <li>
                          Type of content -{" "}
                          <span className="text-danger">TV Show</span>
                        </li>
                        <li>
                          Language -{" "}
                          <span className="text-danger">Bengali</span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-4">
                      <p className="text-dark">1.2 Project Details</p>
                      <ul>
                        <li>
                          Rights Buyer -{" "}
                          <span className="text-danger">...</span>
                        </li>
                        <li>
                          Project Name -{" "}
                          <span className="text-danger">...</span>
                        </li>
                        <li>
                          Poster -{" "}
                          <span className="text-danger">View Poster</span>
                        </li>
                        <li>
                          Contract -{" "}
                          <span className="text-danger">View Contract</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <img
                      src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dharmaveer-2-et00403175-1719817449.jpg"
                      alt=""
                      className="icon-shape border rounded-4 object-fit-cover w-100"
                      height="350"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <div className="mt-4">
                    <p className="text-dark">1.3 Multiple Contracts Option</p>
                    <ul>
                      <li>
                        All Contracts -{" "}
                        <span className="text-danger">View All Contracts</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <p className="text-dark">1.4 New Project Submission</p>
                    <ul>
                      <li>
                        Synopsis / One-Line Story -{" "}
                        <span className="text-danger">...</span>
                      </li>
                      <li>
                        Story - <span className="text-danger">...</span>
                      </li>
                      <li>
                        Production House Name -{" "}
                        <span className="text-danger">...</span>
                      </li>
                      <li>
                        Producer - <span className="text-danger">...</span>
                      </li>
                      <li>
                        Director - <span className="text-danger">...</span>
                      </li>
                      <li>
                        Creative Director -{" "}
                        <span className="text-danger">...</span>
                      </li>
                      <li>
                        Writer - <span className="text-danger">...</span>
                      </li>
                      <li>
                        Director of Photography (DOP) -{" "}
                        <span className="text-danger">...</span>
                      </li>
                      <li>
                        Project PPT Look and Feel -{" "}
                        <span className="text-danger">View PPT</span>
                      </li>
                      <li>
                        Story Narration (Screenplay with Dialogue) -{" "}
                        <span className="text-danger">View File</span>
                      </li>
                      <li>
                        Casting - <span className="text-danger">...</span>
                      </li>
                      <li>
                        Tentative Budget -{" "}
                        <span className="text-danger">...</span>
                      </li>
                      <li>
                        Budget Sheet -{" "}
                        <span className="text-danger">View Budget Sheet</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-5">
                  <h3>OTT Updates</h3>
                  <span className="badge bg-danger-soft mb-2">Pending</span>

                  <div className="col-8">
                    <div className="mt-4">
                      <label>Add Remark</label>
                      <textarea
                        type="text"
                        rows="5"
                        className="form-control mt-1"
                        placeholder="Remark"
                      ></textarea>
                    </div>
                    <div className="mt-4">
                      <label>Budget</label>
                      <input
                        type="number"
                        className="form-control mt-1"
                        placeholder="45000000"
                      />
                    </div>
                    <div className="mt-4">
                      <label>Update Status</label>
                      <select className="form-control mt-1">
                        <option>Need Clarification</option>
                        <option>Approved</option>
                        <option>Rejected</option>
                      </select>
                    </div>
                    <div>
                      <button className="btn btn-warning btn-lg mt-4 px-5 rounded-3 fs-5 mt-3 text-white">
                        <span className="mx-4">Update</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProjects;
