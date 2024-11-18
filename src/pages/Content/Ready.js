import Header from "./Header";

function Ready() {
  return (
    <>
      <Header />

      <div class="modal fade" id="addModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content rounded-4">
            <div className="end-0 position-absolute z-1">
              <button
                type="button"
                class="btn-close bg-primary opacity-100 p-3 rounded-circle m-n3"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">
              <div className="card-body px-lg-6 px-4 py-3">
                <h2 className="lh-1 mb-4">Add Details</h2>
                <div>
                  <div className="mb-3">
                    <p className="text-dark mb-1 bg-light py-2 text-center rounded-pill">
                      1.1 Content Type Selection
                    </p>
                  </div>
                  <div>
                    <label>Select your type of content</label>
                    <select className="form-control mt-1" name="">
                      <option>TV Show</option>
                      <option>Web Series</option>
                      <option>Movie</option>
                      <option>Short Film</option>
                      <option>Regional</option>
                    </select>
                  </div>
                  <div className="mt-3">
                    <label>Select language</label>
                    <select className="form-control mt-1" name="">
                      <option>Bengali</option>
                      <option>Telugu</option>
                      <option>Marathi</option>
                      <option>Tamil</option>
                      <option>Urdu</option>
                      <option>Gujarati</option>
                      <option>Malayalam</option>
                      <option>Kannada</option>
                      <option>Odia</option>
                      <option>Punjabi</option>
                      <option>Kashmiri</option>
                      <option>Manipuri</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className="mt-4 mb-3">
                    <p className="text-dark mb-1 bg-light py-2 text-center rounded-pill">
                      1.2 Project Details
                    </p>
                  </div>
                  <div className="mt-2">
                    <label>Enter your project name</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder=""
                    />
                  </div>
                  <div className="mt-2">
                    <label>Upload Poster</label>
                    <input type="file" className="form-control mt-1" />
                  </div>
                  <div className="mt-2">
                    <label>Upload Contract</label>
                    <input
                      type="file"
                      className="form-control mt-1"
                      placeholder=""
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-4 mb-3">
                    <p className="text-dark mb-1 bg-light py-2 text-center rounded-pill">
                      1.3 Form Fields for Content Submission
                    </p>
                  </div>
                  <div className="mt-2">
                    <label>Content Descriptions</label>
                    <textarea rows="5" className="form-control mt-1"></textarea>
                  </div>
                  <div className="mt-2">
                    <label>Upload Trailer</label>
                    <input
                      type="file"
                      className="form-control mt-1"
                      placeholder=""
                    />
                  </div>
                  <div className="mt-2">
                    <label>Production House Name</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder=""
                    />
                  </div>
                  <div className="mt-2">
                    <label>Producer / Investor</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder=""
                    />
                  </div>
                  <div className="mt-2">
                    <label>Director</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder=""
                    />
                  </div>
                  <div className="mt-2">
                    <label>Creative Director</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder=""
                    />
                  </div>
                  <div className="mt-2">
                    <label>Writer</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder=""
                    />
                  </div>
                  <div className="mt-2">
                    <label>Director of Photography (DOP)</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder=""
                    />
                  </div>
                  <div className="mt-2">
                    <label>Content Files</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder=""
                    />
                  </div>
                  <div className="mt-2">
                    <label>Cast & Crew Details</label>
                    <input
                      type="file"
                      className="form-control mt-1"
                      placeholder=""
                    />
                  </div>
                  <div className="mt-2">
                    <label>Social Media Links & IDs</label>
                    <textarea rows="4" className="form-control mt-1"></textarea>
                  </div>
                  <div className="mt-2">
                    <label>Cast Bite Related to Content</label>
                    <input
                      type="file"
                      className="form-control mt-1"
                      placeholder=""
                    />
                  </div>
                  <div className="mt-2">
                    <label>Cast Bite Related to Content</label>
                    <input
                      type="file"
                      className="form-control mt-1"
                      placeholder=""
                    />
                  </div>
                  <div className="mt-2">
                    <label>Clip Cut (1-3 Minutes)</label>
                    <input
                      type="file"
                      className="form-control mt-1"
                      placeholder=""
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-4 mb-3">
                    <p className="text-dark mb-1 bg-light py-2 text-center rounded-pill">
                      Project Declaration
                    </p>
                  </div>
                  <div className="mt-2">
                    <label>NOC file of all artist and all technicians</label>
                    <input
                      type="file"
                      className="form-control mt-1"
                      placeholder=""
                    />
                  </div>
                  <div className="mt-2">
                    <label>Budget</label>
                    <input type="text" className="form-control mt-1" />
                  </div>
                </div>
                <button class="btn btn-primary btn-lg mt-5 w-100 rounded-3 fs-5 text-dark">
                  Submit
                </button>
              </div>
              <div className="card-footer rounded-4 px-6 pb-4">
                <p className="mb-0 text-center">
                  By submitting you accept our{" "}
                  <a href="#" className="text-inherit fw-semibold">
                    <u>Policies</u>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-2">
        <div>
          <a
            data-bs-toggle="modal"
            data-bs-target="#addModal"
            class="btn btn-dark px-5 rounded-3 mt-3"
          >
            <span className="mx-2">Ready to Releasing</span>
          </a>
        </div>
      </div>

      <section>
        <div className="container">
          <h2 class="mb-4 mt-5">1 Project</h2>
          <div class="row">
            <div class="col-lg-6 col-12">
              <a
                data-bs-toggle="modal"
                data-bs-target="#detailsModal"
                class="card card-bordered mb-4 card-hover cursor-pointer"
              >
                <div class="card-body">
                  <div>
                    <div class="d-xl-flex">
                      <div class="mb-3 mb-md-0">
                        <img
                          src="https://www.91-cdn.com/metareel-images/content/backdrops-6-1729536414437-bG6Prtffazz89cgSNas7IZZZoEz.jpg"
                          alt=""
                          class="icon-shape border rounded-4 object-fit-cover"
                          height="180"
                          width="150"
                        />
                      </div>
                      <div class="ms-xl-3 w-100 mt-3 mt-xl-1 d-flex flex-column justify-content-between">
                        <div class="d-flex justify-content-between mb-3">
                          <div>
                            <span class="badge bg-danger-soft mb-2">
                              Pending
                            </span>
                            <h3 class="mb-1 fs-4">
                              <span class="text-inherit">Vedaa</span>
                            </h3>
                            <div>
                              <span>Ready to Releasing</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="mb-2 mb-md-0">
                            <span class="me-4">
                              <i class="bi bi-camera-reels"></i>
                              <span class="ms-1">TV Show</span>
                            </span>
                            <span class="me-2">
                              <i class="bi bi-chat-square-quote"></i>
                              <span class="ms-1">English</span>
                            </span>
                            <div>
                              <i class="bi bi-calendar-week me-1"></i>{" "}
                              <span>15/10/2024</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div
        class="modal fade"
        id="detailsModal"
        tabindex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content rounded-4">
            <div className="end-0 position-absolute z-1">
              <button
                type="button"
                class="btn-close bg-primary opacity-100 p-3 rounded-circle m-n3"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">
              <div className="card-body px-lg-6 px-4 py-3">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <span class="badge bg-danger-soft mb-2">Pending</span>
                    <h3 class="mb-1 fs-4">
                      <span class="text-inherit">Vedaa</span>
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
                      src="https://www.91-cdn.com/metareel-images/content/backdrops-6-1729536414437-bG6Prtffazz89cgSNas7IZZZoEz.jpg"
                      alt=""
                      class="icon-shape border rounded-4 object-fit-cover w-100"
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
                        Content Descriptions -{" "}
                        <span className="text-danger">...</span>
                      </li>
                      <li>
                        Trailer -{" "}
                        <span className="text-danger">View Trailer</span>
                      </li>
                      <li>
                        Production House Name -{" "}
                        <span className="text-danger">...</span>
                      </li>
                      <li>
                        Producer / Investor -{" "}
                        <span className="text-danger">...</span>
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
                        Content Files -{" "}
                        <span className="text-danger">View Files</span>
                      </li>
                      <li>
                        Cast & Crew Details -{" "}
                        <span className="text-danger">View File</span>
                      </li>
                      <li>
                        Social Media Links & IDs -{" "}
                        <span className="text-danger">...</span>
                      </li>
                      <li>
                        Cast Bite Related to Content -{" "}
                        <span className="text-danger">View File</span>
                      </li>
                      <li>
                        Clip Cut (1-3 Minutes) -{" "}
                        <span className="text-danger">View Clip Cut</span>
                      </li>
                      <li>
                        NOC file of all artist and all technicians. -{" "}
                        <span className="text-danger">View NOC</span>
                      </li>
                      <li>
                        Budget - <span className="text-danger">...</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-5">
                  <h3>OTT Updates</h3>
                  <span class="badge bg-danger-soft mb-2">Pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ready;

////////////////////////////////////////////////////////////////

// import { useState } from "react";
// import Axios from "axios";
// import Header from "./Header";

// function Ready() {
//   // Initialize state variables for each field
//   const [contentType, setContentType] = useState("");
//   const [language, setLanguage] = useState("");
//   const [projectName, setProjectName] = useState("");
//   const [poster, setPoster] = useState(null);
//   const [contract, setContract] = useState(null);
//   const [contentDescription, setContentDescription] = useState("");
//   const [trailer, setTrailer] = useState(null);
//   const [productionHouse, setProductionHouse] = useState("");
//   const [producerOrInvestor, setProducerOrInvestor] = useState("");
//   const [director, setDirector] = useState("");
//   const [creativeDirector, setCreativeDirector] = useState("");
//   const [writer, setWriter] = useState("");
//   const [dop, setDop] = useState("");
//   const [contentFiles, setContentFiles] = useState([]); // To handle multiple file uploads
//   const [castCrewDetails, setCastCrewDetails] = useState(null);
//   const [socialMediaLinks, setSocialMediaLinks] = useState({});
//   const [castBiteRelated, setCastBiteRelated] = useState(null);
//   const [clipCut, setClipCut] = useState(null);
//   const [nocFiles, setNocFiles] = useState([]); // Multiple file uploads for NOC files
//   const [budget, setBudget] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Client-side validation to check if required fields are filled
//     if (!projectName || !language || !contentType) {
//       alert(
//         "Please fill in all the required fields: Project Name, Language, and Content Type."
//       );
//       return; // Stop submission if required fields are missing
//     }

//     const formData = new FormData();

//     // Append fields to FormData
//     formData.append("contentType", contentType);
//     formData.append("language", language);
//     formData.append("projectName", projectName);
//     formData.append("contentDescription", contentDescription);
//     formData.append("productionHouse", productionHouse);
//     formData.append("producerOrInvestor", producerOrInvestor);
//     formData.append("director", director);
//     formData.append("creativeDirector", creativeDirector);
//     formData.append("writer", writer);
//     formData.append("dop", dop);
//     formData.append("budget", budget);

//     // Ensure all files are appended only if selected
//     if (poster) formData.append("poster", poster);
//     if (contract) formData.append("contract", contract);
//     if (trailer) formData.append("trailer", trailer);
//     if (contentFiles.length > 0) {
//       contentFiles.forEach((file) => formData.append("contentFiles[]", file));
//     }
//     if (nocFiles.length > 0) {
//       nocFiles.forEach((file) => formData.append("nocFiles[]", file));
//     }

//     // Log the form data for debugging
//     for (let [key, value] of formData.entries()) {
//       console.log(`${key}: ${value}`);
//     }

//     // Make the API call
//     try {
//       const response = await Axios.post(
//         "http://localhost:9001/api/v1/ready-to-release/",
//         formData
//       );

//       if (response.data.success) {
//         alert("Content created successfully!");
//       } else {
//         console.error("Error response from server:", response.data);
//         alert("Error creating content!");
//       }
//     } catch (error) {
//       console.error("Error during form submission:", error);
//       if (error.response) {
//         console.error("Response error:", error.response.data);
//         alert(
//           "Error occurred during submission: " + error.response.data.message
//         );
//       } else {
//         console.error("Error message:", error.message);
//         alert("An unknown error occurred.");
//       }
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div
//         className="modal fade"
//         id="addModal"
//         tabIndex="-1"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-lg modal-dialog-centered">
//           <div className="modal-content rounded-4">
//             <div className="end-0 position-absolute z-1">
//               <button
//                 type="button"
//                 className="btn-close bg-primary opacity-100 p-3 rounded-circle m-n3"
//                 data-bs-dismiss="modal"
//               ></button>
//             </div>
//             <div className="modal-body">
//               <div className="card-body px-lg-6 px-4 py-3">
//                 <h2 className="lh-1 mb-4">Add Details</h2>
//                 <form onSubmit={handleSubmit}>
//                   {/* Content Type Selection */}
//                   <div className="mb-3">
//                     <label>Select your type of content</label>
//                     <select
//                       className="form-control mt-1"
//                       onChange={(e) => setContentType(e.target.value)}
//                       value={contentType}
//                     >
//                       <option value="">Select Type</option>
//                       <option value="tvshow">TV Show</option>
//                       <option value="webseries">Web Series</option>
//                       <option value="movie">Movie</option>
//                       <option value="shortfilm">Short Film</option>
//                       <option value="regional">Regional</option>
//                     </select>
//                   </div>

//                   {/* Language Selection */}
//                   <div className="mt-3">
//                     <label>Select language</label>
//                     <select
//                       className="form-control mt-1"
//                       onChange={(e) => setLanguage(e.target.value)}
//                       value={language}
//                     >
//                       <option value="">Select Language</option>
//                       <option value="bengali">Bengali</option>
//                       <option value="telugu">Telugu</option>
//                       <option value="marathi">Marathi</option>
//                       <option value="tamil">Tamil</option>
//                       <option value="urdu">Urdu</option>
//                       <option value="gujarati">Gujarati</option>
//                       <option value="malayalam">Malayalam</option>
//                       <option value="kannada">Kannada</option>
//                       <option value="odia">Odia</option>
//                       <option value="punjabi">Punjabi</option>
//                       <option value="kashmiri">Kashmiri</option>
//                       <option value="manipuri">Manipuri</option>
//                     </select>
//                   </div>

//                   {/* Project Name */}
//                   <div className="mt-2">
//                     <label>Enter your project name</label>
//                     <input
//                       type="text"
//                       className="form-control mt-1"
//                       placeholder="Project Name"
//                       onChange={(e) => setProjectName(e.target.value)}
//                       value={projectName}
//                     />
//                   </div>

//                   {/* Budget Input */}
//                   <div className="mt-2">
//                     <label>Enter your project budget</label>
//                     <input
//                       type="text"
//                       className="form-control mt-1"
//                       placeholder="Project Budget"
//                       onChange={(e) => setBudget(e.target.value)}
//                       value={budget}
//                     />
//                   </div>

//                   {/* File Uploads */}
//                   <div className="mt-2">
//                     <label>Upload Poster</label>
//                     <input
//                       type="file"
//                       className="form-control mt-1"
//                       onChange={(e) => setPoster(e.target.files[0])}
//                     />
//                   </div>
//                   <div className="mt-2">
//                     <label>Upload Contract</label>
//                     <input
//                       type="file"
//                       className="form-control mt-1"
//                       onChange={(e) => setContract(e.target.files[0])}
//                     />
//                   </div>
//                   <div className="mt-2">
//                     <label>Upload Trailer</label>
//                     <input
//                       type="file"
//                       className="form-control mt-1"
//                       onChange={(e) => setTrailer(e.target.files[0])}
//                     />
//                   </div>

//                   {/* Content Files */}
//                   <div className="mt-2">
//                     <label>Upload Content Files</label>
//                     <input
//                       type="file"
//                       className="form-control mt-1"
//                       multiple
//                       onChange={(e) =>
//                         setContentFiles(Array.from(e.target.files))
//                       }
//                     />
//                   </div>

//                   {/* Social Media Links */}
//                   <div className="mt-2">
//                     <label>Social Media Links</label>
//                     <input
//                       type="text"
//                       className="form-control mt-1"
//                       placeholder="Enter social media links (key-value)"
//                       onChange={(e) => {
//                         const { value } = e.target;
//                         const [key, link] = value.split("=");
//                         if (key && link) {
//                           setSocialMediaLinks({
//                             ...socialMediaLinks,
//                             [key]: link,
//                           });
//                         }
//                       }}
//                     />
//                     <small>
//                       Format: platform=link (e.g., twitter=https://twitter.com)
//                     </small>
//                   </div>

//                   {/* Other Fields */}
//                   <div className="mt-2">
//                     <label>Director</label>
//                     <input
//                       type="text"
//                       className="form-control mt-1"
//                       placeholder="Director Name"
//                       onChange={(e) => setDirector(e.target.value)}
//                       value={director}
//                     />
//                   </div>

//                   <div className="mt-2">
//                     <label>Creative Director</label>
//                     <input
//                       type="text"
//                       className="form-control mt-1"
//                       placeholder="Creative Director Name"
//                       onChange={(e) => setCreativeDirector(e.target.value)}
//                       value={creativeDirector}
//                     />
//                   </div>

//                   <div className="mt-2">
//                     <label>Writer</label>
//                     <input
//                       type="text"
//                       className="form-control mt-1"
//                       placeholder="Writer Name"
//                       onChange={(e) => setWriter(e.target.value)}
//                       value={writer}
//                     />
//                   </div>

//                   <div className="mt-2">
//                     <label>DOP (Director of Photography)</label>
//                     <input
//                       type="text"
//                       className="form-control mt-1"
//                       placeholder="DOP Name"
//                       onChange={(e) => setDop(e.target.value)}
//                       value={dop}
//                     />
//                   </div>

//                   <div className="mt-2">
//                     <label>Upload NOC Files</label>
//                     <input
//                       type="file"
//                       className="form-control mt-1"
//                       multiple
//                       onChange={(e) => setNocFiles(Array.from(e.target.files))}
//                     />
//                   </div>

//                   {/* Submit Button */}
//                   <button
//                     type="submit"
//                     className="btn btn-primary btn-lg mt-5 w-100 rounded-3 fs-5 text-dark"
//                   >
//                     Submit
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal Trigger Button */}
//       <div className="container mt-2">
//         <div>
//           <a
//             data-bs-toggle="modal"
//             data-bs-target="#addModal"
//             className="btn btn-dark px-5 rounded-3 mt-3"
//           >
//             <span className="mx-2">Ready to Releasing</span>
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Ready;

////////////////////////////////////////
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Header from "./Header"; // Assuming you have a Header component
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// function Ready() {
//   const [projects, setProjects] = useState([]); // List of projects
//   const [loading, setLoading] = useState(true); // Loading state
//   const [selectedProject, setSelectedProject] = useState(null); // Selected project details
//   const [newProject, setNewProject] = useState({
//     contentType: "",
//     language: "",
//     projectName: "",
//     poster: null,
//     contract: null,
//     description: "",
//     trailer: null,
//     productionHouse: "",
//     producer: "",
//     director: "",
//     creativeDirector: "",
//     writer: "",
//     dop: "",
//     contentFiles: "",
//     castCrew: null,
//     socialMediaLinks: "",
//     castBite: null,
//     clipCut: null,
//     nocFile: null,
//     budget: "",
//   });

//   // Fetch projects from the API when the component loads
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8501/api/v1/ready-to-release/"
//         );
//         if (response.data && Array.isArray(response.data.data)) {
//           setProjects(response.data.data); // Assuming the API returns an array in `data.data`
//         } else {
//           console.error("Unexpected response format:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching projects:", error);
//       } finally {
//         setLoading(false); // Stop loading
//       }
//     };

//     fetchProjects();
//   }, []);

//   // Handle input changes for non-file inputs
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewProject((prevProject) => ({
//       ...prevProject,
//       [name]: name === "budget" ? Number(value) : value, // Convert budget to a number
//     }));
//   };

//   // Handle file changes for file inputs
//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setNewProject((prevProject) => ({
//       ...prevProject,
//       [name]: files[0], // Store the first file from the input
//     }));
//   };

//   // Handle form submission to add a new project
//   const handleAddProject = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();

//     // Append all data to FormData for file uploads
//     Object.keys(newProject).forEach((key) => {
//       if (newProject[key]) {
//         formData.append(key, newProject[key]);
//       }
//     });

//     try {
//       const response = await axios.post(
//         "http://localhost:8501/api/v1/ready-to-release/",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );

//       if (response.data && response.data.data) {
//         setProjects((prevProjects) => [...prevProjects, response.data.data]);
//         alert("Project added successfully!");
//         setNewProject({
//           contentType: "",
//           language: "",
//           projectName: "",
//           poster: null,
//           contract: null,
//           description: "",
//           trailer: null,
//           productionHouse: "",
//           producer: "",
//           director: "",
//           creativeDirector: "",
//           writer: "",
//           dop: "",
//           contentFiles: "",
//           castCrew: null,
//           socialMediaLinks: "",
//           castBite: null,
//           clipCut: null,
//           nocFile: null,
//           budget: "",
//         });
//       }
//     } catch (error) {
//       console.error("Error adding project:", error);
//       alert("Failed to add project. Check console for details.");
//     }
//   };

//   // Fetch project details by ID
//   const fetchProjectById = async (projectId) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:8501/api/v1/ready-to-release/${projectId}`
//       );
//       if (response.data && response.data.data) {
//         setSelectedProject(response.data.data); // Store selected project
//       } else {
//         console.error("Unexpected response format:", response.data);
//       }
//     } catch (error) {
//       console.error("Error fetching project details:", error);
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div className="container mt-2">
//         <button
//           data-bs-toggle="modal"
//           data-bs-target="#addModal"
//           className="btn btn-dark px-5 rounded-3 mt-3"
//         >
//           <span className="mx-2">Ready To Releasing</span>
//         </button>
//       </div>

//       {/* Add Project Modal */}
//       <div
//         className="modal fade"
//         id="addModal"
//         tabIndex="-1"
//         aria-labelledby="addModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-lg" style={{ maxWidth: "800px" }}>
//           <div
//             className="modal-content"
//             style={{ width: "210mm", padding: "20mm" }}
//           >
//             <div className="modal-header">
//               <h5 className="modal-title" id="addModalLabel">
//                 Add New Project
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <form onSubmit={handleAddProject}>
//               <div
//                 className="modal-body"
//                 style={{ maxHeight: "60vh", overflowY: "auto" }}
//               >
//                 {/* Form Fields for Project Details */}
//                 <div className="mb-3">
//                   <label className="form-label">Project Name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="projectName"
//                     value={newProject.projectName}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>

//                 {/* Category Field */}
//                 <div className="mb-3">
//                   <label className="form-label">Category</label>
//                   <select
//                     className="form-control"
//                     name="category"
//                     value={newProject.category}
//                     onChange={handleInputChange}
//                     required
//                   >
//                     <option value="">Select</option>
//                     <option value="new project">New Project</option>
//                     <option value="gap funding">Gap Funding</option>
//                   </select>
//                 </div>

//                 {/* Content Type Field */}
//                 <div className="mb-3">
//                   <label className="form-label">Content Type</label>
//                   <select
//                     className="form-control"
//                     name="contentType"
//                     value={newProject.contentType}
//                     onChange={handleInputChange}
//                     required
//                   >
//                     <option value="">Select</option>
//                     <option value="tvshow">TV Show</option>
//                     <option value="webseries">Web Series</option>
//                     <option value="movie">Movie</option>
//                     <option value="shortfilm">Short Film</option>
//                     <option value="regional">Regional</option>
//                   </select>
//                 </div>

//                 {/* Language Field */}
//                 <div className="mb-3">
//                   <label className="form-label">Language</label>
//                   <select
//                     className="form-control"
//                     name="language"
//                     value={newProject.language}
//                     onChange={handleInputChange}
//                     required
//                   >
//                     <option value="">Select</option>
//                     <option value="bengali">Bengali</option>
//                     <option value="telugu">Telugu</option>
//                     <option value="tamil">Tamil</option>
//                     <option value="marathi">Marathi</option>
//                     <option value="urdu">Urdu</option>
//                     <option value="gujarati">Gujarati</option>
//                     <option value="malayalam">Malayalam</option>
//                     <option value="kannada">Kannada</option>
//                     <option value="odia">Odia</option>
//                     <option value="punjabi">Punjabi</option>
//                     <option value="kashmiri">Kashmiri</option>
//                     <option value="manipuri">Manipuri</option>
//                   </select>
//                 </div>

//                 {/* Remaining Form Fields */}
//                 <div className="mb-3">
//                   <label className="form-label">Date</label>
//                   <input
//                     type="date"
//                     className="form-control"
//                     name="projectDate"
//                     value={newProject.projectDate}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Buyer</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="buyer"
//                     value={newProject.buyer}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Upload Poster</label>
//                   <input
//                     type="file"
//                     className="form-control"
//                     name="poster"
//                     onChange={handleFileChange}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Synopsis</label>
//                   <textarea
//                     className="form-control"
//                     name="synopsis"
//                     value={newProject.synopsis}
//                     onChange={handleInputChange}
//                   ></textarea>
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Tentative Budget</label>
//                   <input
//                     type="number"
//                     className="form-control"
//                     name="tentativeBudget"
//                     value={newProject.tentativeBudget}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="modal-footer">
//                 <button type="submit" className="btn btn-primary">
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Project List */}
//       <section>
//         <div className="container">
//           <h2 className="mb-4 mt-5">
//             {projects.length} Project{projects.length !== 1 ? "s" : ""}
//           </h2>
//           {loading ? (
//             <p>Loading projects...</p>
//           ) : (
//             <div className="row">
//               {projects.map((project) => (
//                 <div key={project._id} className="col-lg-6 col-12">
//                   <button
//                     data-bs-toggle="modal"
//                     data-bs-target="#detailsModal"
//                     onClick={() => fetchProjectById(project._id)}
//                     className="card card-bordered mb-4 card-hover cursor-pointer"
//                   >
//                     <div className="card-body">
//                       <div className="d-xl-flex">
//                         <div className="mb-3 mb-md-0">
//                           <img
//                             src={project.poster || "default-image.jpg"}
//                             alt={project.projectName}
//                             className="icon-shape border rounded-4 object-fit-cover"
//                             height="180"
//                             width="170"
//                           />
//                         </div>
//                         <div className="ms-xl-3 w-200 mt-3 mt-xl-1 d-flex flex-column justify-content-between">
//                           <h3 className="mb-1 fs-4">
//                             <span className="text-inherit">
//                               {project.projectName}
//                             </span>
//                           </h3>
//                           <span className="me-2">
//                             <i className="bi bi-camera-reels"></i>
//                             <span className="ms-1">{project.contentType}</span>
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }

// export default Ready;
