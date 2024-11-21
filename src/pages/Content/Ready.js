// import Header from "./Header";

// function Ready() {
//   return (
//     <>
//       <Header />

//       <div class="modal fade" id="addModal" tabindex="-1" aria-hidden="true">
//         <div class="modal-dialog modal-lg modal-dialog-centered">
//           <div class="modal-content rounded-4">
//             <div className="end-0 position-absolute z-1">
//               <button
//                 type="button"
//                 class="btn-close bg-primary opacity-100 p-3 rounded-circle m-n3"
//                 data-bs-dismiss="modal"
//               ></button>
//             </div>
//             <div class="modal-body">
//               <div className="card-body px-lg-6 px-4 py-3">
//                 <h2 className="lh-1 mb-4">Add Details</h2>
//                 <div>
//                   <div className="mb-3">
//                     <p className="text-dark mb-1 bg-light py-2 text-center rounded-pill">
//                       1.1 Content Type Selection
//                     </p>
//                   </div>
//                   <div>
//                     <label>Select your type of content</label>
//                     <select className="form-control mt-1" name="">
//                       <option>TV Show</option>
//                       <option>Web Series</option>
//                       <option>Movie</option>
//                       <option>Short Film</option>
//                       <option>Regional</option>
//                     </select>
//                   </div>
//                   <div className="mt-3">
//                     <label>Select language</label>
//                     <select className="form-control mt-1" name="">
//                       <option>Bengali</option>
//                       <option>Telugu</option>
//                       <option>Marathi</option>
//                       <option>Tamil</option>
//                       <option>Urdu</option>
//                       <option>Gujarati</option>
//                       <option>Malayalam</option>
//                       <option>Kannada</option>
//                       <option>Odia</option>
//                       <option>Punjabi</option>
//                       <option>Kashmiri</option>
//                       <option>Manipuri</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div>
//                   <div className="mt-4 mb-3">
//                     <p className="text-dark mb-1 bg-light py-2 text-center rounded-pill">
//                       1.2 Project Details
//                     </p>
//                   </div>
//                   <div className="mt-2">
//                     <label>Enter your project name</label>
//                     <input
//                       type="text"
//                       className="form-control mt-1"
//                       placeholder=""
//                     />
//                   </div>
//                   <div className="mt-2">
//                     <label>Upload Poster</label>
//                     <input type="file" className="form-control mt-1" />
//                   </div>
//                   <div className="mt-2">
//                     <label>Upload Contract</label>
//                     <input
//                       type="file"
//                       className="form-control mt-1"
//                       placeholder=""
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <div className="mt-4 mb-3">
//                     <p className="text-dark mb-1 bg-light py-2 text-center rounded-pill">
//                       1.3 Form Fields for Content Submission
//                     </p>
//                   </div>
//                   <div className="mt-2">
//                     <label>Content Descriptions</label>
//                     <textarea rows="5" className="form-control mt-1"></textarea>
//                   </div>
//                   <div className="mt-2">
//                     <label>Upload Trailer</label>
//                     <input
//                       type="file"
//                       className="form-control mt-1"
//                       placeholder=""
//                     />
//                   </div>
//                   <div className="mt-2">
//                     <label>Production House Name</label>
//                     <input
//                       type="text"
//                       className="form-control mt-1"
//                       placeholder=""
//                     />
//                   </div>
//                   <div className="mt-2">
//                     <label>Producer / Investor</label>
//                     <input
//                       type="text"
//                       className="form-control mt-1"
//                       placeholder=""
//                     />
//                   </div>
//                   <div className="mt-2">
//                     <label>Director</label>
//                     <input
//                       type="text"
//                       className="form-control mt-1"
//                       placeholder=""
//                     />
//                   </div>
//                   <div className="mt-2">
//                     <label>Creative Director</label>
//                     <input
//                       type="text"
//                       className="form-control mt-1"
//                       placeholder=""
//                     />
//                   </div>
//                   <div className="mt-2">
//                     <label>Writer</label>
//                     <input
//                       type="text"
//                       className="form-control mt-1"
//                       placeholder=""
//                     />
//                   </div>
//                   <div className="mt-2">
//                     <label>Director of Photography (DOP)</label>
//                     <input
//                       type="text"
//                       className="form-control mt-1"
//                       placeholder=""
//                     />
//                   </div>
//                   <div className="mt-2">
//                     <label>Content Files</label>
//                     <input
//                       type="text"
//                       className="form-control mt-1"
//                       placeholder=""
//                     />
//                   </div>
//                   <div className="mt-2">
//                     <label>Cast & Crew Details</label>
//                     <input
//                       type="file"
//                       className="form-control mt-1"
//                       placeholder=""
//                     />
//                   </div>
//                   <div className="mt-2">
//                     <label>Social Media Links & IDs</label>
//                     <textarea rows="4" className="form-control mt-1"></textarea>
//                   </div>
//                   <div className="mt-2">
//                     <label>Cast Bite Related to Content</label>
//                     <input
//                       type="file"
//                       className="form-control mt-1"
//                       placeholder=""
//                     />
//                   </div>
//                   <div className="mt-2">
//                     <label>Cast Bite Related to Content</label>
//                     <input
//                       type="file"
//                       className="form-control mt-1"
//                       placeholder=""
//                     />
//                   </div>
//                   <div className="mt-2">
//                     <label>Clip Cut (1-3 Minutes)</label>
//                     <input
//                       type="file"
//                       className="form-control mt-1"
//                       placeholder=""
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <div className="mt-4 mb-3">
//                     <p className="text-dark mb-1 bg-light py-2 text-center rounded-pill">
//                       Project Declaration
//                     </p>
//                   </div>
//                   <div className="mt-2">
//                     <label>NOC file of all artist and all technicians</label>
//                     <input
//                       type="file"
//                       className="form-control mt-1"
//                       placeholder=""
//                     />
//                   </div>
//                   <div className="mt-2">
//                     <label>Budget</label>
//                     <input type="text" className="form-control mt-1" />
//                   </div>
//                 </div>
//                 <button class="btn btn-primary btn-lg mt-5 w-100 rounded-3 fs-5 text-dark">
//                   Submit
//                 </button>
//               </div>
//               <div className="card-footer rounded-4 px-6 pb-4">
//                 <p className="mb-0 text-center">
//                   By submitting you accept our{" "}
//                   <a href="#" className="text-inherit fw-semibold">
//                     <u>Policies</u>
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mt-2">
//         <div>
//           <a
//             data-bs-toggle="modal"
//             data-bs-target="#addModal"
//             class="btn btn-dark px-5 rounded-3 mt-3"
//           >
//             <span className="mx-2">Ready to Releasing</span>
//           </a>
//         </div>
//       </div>

//       <section>
//         <div className="container">
//           <h2 class="mb-4 mt-5">1 Project</h2>
//           <div class="row">
//             <div class="col-lg-6 col-12">
//               <a
//                 data-bs-toggle="modal"
//                 data-bs-target="#detailsModal"
//                 class="card card-bordered mb-4 card-hover cursor-pointer"
//               >
//                 <div class="card-body">
//                   <div>
//                     <div class="d-xl-flex">
//                       <div class="mb-3 mb-md-0">
//                         <img
//                           src="https://www.91-cdn.com/metareel-images/content/backdrops-6-1729536414437-bG6Prtffazz89cgSNas7IZZZoEz.jpg"
//                           alt=""
//                           class="icon-shape border rounded-4 object-fit-cover"
//                           height="180"
//                           width="150"
//                         />
//                       </div>
//                       <div class="ms-xl-3 w-100 mt-3 mt-xl-1 d-flex flex-column justify-content-between">
//                         <div class="d-flex justify-content-between mb-3">
//                           <div>
//                             <span class="badge bg-danger-soft mb-2">
//                               Pending
//                             </span>
//                             <h3 class="mb-1 fs-4">
//                               <span class="text-inherit">Vedaa</span>
//                             </h3>
//                             <div>
//                               <span>Ready to Releasing</span>
//                             </div>
//                           </div>
//                         </div>
//                         <div>
//                           <div class="mb-2 mb-md-0">
//                             <span class="me-4">
//                               <i class="bi bi-camera-reels"></i>
//                               <span class="ms-1">TV Show</span>
//                             </span>
//                             <span class="me-2">
//                               <i class="bi bi-chat-square-quote"></i>
//                               <span class="ms-1">English</span>
//                             </span>
//                             <div>
//                               <i class="bi bi-calendar-week me-1"></i>{" "}
//                               <span>15/10/2024</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div
//         class="modal fade"
//         id="detailsModal"
//         tabindex="-1"
//         aria-hidden="true"
//       >
//         <div class="modal-dialog modal-lg modal-dialog-centered">
//           <div class="modal-content rounded-4">
//             <div className="end-0 position-absolute z-1">
//               <button
//                 type="button"
//                 class="btn-close bg-primary opacity-100 p-3 rounded-circle m-n3"
//                 data-bs-dismiss="modal"
//               ></button>
//             </div>
//             <div class="modal-body">
//               <div className="card-body px-lg-6 px-4 py-3">
//                 <div className="row">
//                   <div className="col-lg-6 col-12">
//                     <span class="badge bg-danger-soft mb-2">Pending</span>
//                     <h3 class="mb-1 fs-4">
//                       <span class="text-inherit">Vedaa</span>
//                     </h3>
//                     <div>
//                       <span>New Project</span>
//                     </div>
//                     <div className="mt-4">
//                       <p className="text-dark">1.1 Content Type Selection</p>
//                       <ul>
//                         <li>
//                           Type of content -{" "}
//                           <span className="text-danger">TV Show</span>
//                         </li>
//                         <li>
//                           Language -{" "}
//                           <span className="text-danger">Bengali</span>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="mt-4">
//                       <p className="text-dark">1.2 Project Details</p>
//                       <ul>
//                         <li>
//                           Project Name -{" "}
//                           <span className="text-danger">...</span>
//                         </li>
//                         <li>
//                           Poster -{" "}
//                           <span className="text-danger">View Poster</span>
//                         </li>
//                         <li>
//                           Contract -{" "}
//                           <span className="text-danger">View Contract</span>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div className="col-lg-6 col-12">
//                     <img
//                       src="https://www.91-cdn.com/metareel-images/content/backdrops-6-1729536414437-bG6Prtffazz89cgSNas7IZZZoEz.jpg"
//                       alt=""
//                       class="icon-shape border rounded-4 object-fit-cover w-100"
//                       height="350"
//                     />
//                   </div>
//                 </div>
//                 <div className="mt-5">
//                   <div className="mt-4">
//                     <p className="text-dark">1.3 Multiple Contracts Option</p>
//                     <ul>
//                       <li>
//                         All Contracts -{" "}
//                         <span className="text-danger">View All Contracts</span>
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="mt-4">
//                     <p className="text-dark">1.4 New Project Submission</p>
//                     <ul>
//                       <li>
//                         Content Descriptions -{" "}
//                         <span className="text-danger">...</span>
//                       </li>
//                       <li>
//                         Trailer -{" "}
//                         <span className="text-danger">View Trailer</span>
//                       </li>
//                       <li>
//                         Production House Name -{" "}
//                         <span className="text-danger">...</span>
//                       </li>
//                       <li>
//                         Producer / Investor -{" "}
//                         <span className="text-danger">...</span>
//                       </li>
//                       <li>
//                         Director - <span className="text-danger">...</span>
//                       </li>
//                       <li>
//                         Creative Director -{" "}
//                         <span className="text-danger">...</span>
//                       </li>
//                       <li>
//                         Writer - <span className="text-danger">...</span>
//                       </li>
//                       <li>
//                         Director of Photography (DOP) -{" "}
//                         <span className="text-danger">...</span>
//                       </li>
//                       <li>
//                         Content Files -{" "}
//                         <span className="text-danger">View Files</span>
//                       </li>
//                       <li>
//                         Cast & Crew Details -{" "}
//                         <span className="text-danger">View File</span>
//                       </li>
//                       <li>
//                         Social Media Links & IDs -{" "}
//                         <span className="text-danger">...</span>
//                       </li>
//                       <li>
//                         Cast Bite Related to Content -{" "}
//                         <span className="text-danger">View File</span>
//                       </li>
//                       <li>
//                         Clip Cut (1-3 Minutes) -{" "}
//                         <span className="text-danger">View Clip Cut</span>
//                       </li>
//                       <li>
//                         NOC file of all artist and all technicians. -{" "}
//                         <span className="text-danger">View NOC</span>
//                       </li>
//                       <li>
//                         Budget - <span className="text-danger">...</span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="mt-5">
//                   <h3>OTT Updates</h3>
//                   <span class="badge bg-danger-soft mb-2">Pending</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Ready;

import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";

function Ready() {
  const [formData, setFormData] = useState({
    contentType: "",
    language: "",
    projectName: "",
    poster: null,
    contract: null,
    contentDescription: "",
    trailer: null,
    productionHouse: "",
    producerOrInvestor: "",
    director: "",
    creativeDirector: "",
    writer: "",
    dop: "",
    contentFiles: null,
    castCrewDetails: null,
    socialMediaLinks: "",
    castBitRelated: "",
    clipCut: null,
    nocFiles: null,
    budget: "",
    ottUpdates: "pending",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({
        ...prev,
        [name]: files.length > 1 ? files : files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: name === "socialMediaLinks" ? JSON.stringify(value) : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const submissionData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value instanceof File || value instanceof Blob) {
        submissionData.append(key, value);
      } else if (Array.isArray(value)) {
        value.forEach((file) => submissionData.append(key, file));
      } else if (value) {
        submissionData.append(key, value);
      }
    });

    console.log("FormData being submitted:");
    for (let pair of submissionData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
      // Getting JWT token from local storage or from your auth system
      const token = localStorage.getItem("authToken");

      const response = await axios.post(
        "https://ott-ep3g.onrender.com/api/v1/ready-to-release/",
        submissionData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for file upload
            Authorization: `Bearer ${token}`, // Pass JWT in header for authentication
          },
          withCredentials: true, // To include cookies, if needed
        }
      );

      console.log("Response from server:", response.data);
      alert("Project submitted successfully!");
    } catch (error) {
      console.error("Error occurred during submission:", error);

      if (error.response) {
        console.error("Response error data:", error.response.data);
        console.error("Response error status:", error.response.status);
        console.error("Response error headers:", error.response.headers);
        alert(
          `Error: ${
            error.response.data.message || "Something went wrong."
          } (Status: ${error.response.status})`
        );
      } else if (error.request) {
        console.error("No response received:", error.request);
        alert(
          "Error: No response received from the server. Please check your network."
        );
      } else {
        console.error("Unexpected error:", error.message);
        alert(`Unexpected error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-2">
        <button
          data-bs-toggle="modal"
          data-bs-target="#addModal"
          className="btn btn-dark px-5 rounded-3 mt-3"
        >
          <span className="mx-2">Ready to Release</span>
        </button>
      </div>

      <div
        className="modal fade"
        id="addModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content rounded-4">
            <div className="modal-body">
              <div className="card-body px-lg-6 px-4 py-3">
                <h2 className="lh-1 mb-4">Add Details</h2>
                <form onSubmit={handleSubmit}>
                  {/* Content Type */}
                  <div className="mb-3">
                    <label>Select your type of content</label>
                    <select
                      className="form-control mt-1"
                      name="contentType"
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="tvshow">TV Show</option>
                      <option value="webseries">Web Series</option>
                      <option value="movie">Movie</option>
                      <option value="shortfilm">Short Film</option>
                      <option value="regional">Regional</option>
                    </select>
                  </div>

                  {/* Language */}
                  <div className="mb-3">
                    <label>Select language</label>
                    <select
                      className="form-control mt-1"
                      name="language"
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="bengali">Bengali</option>
                      <option value="telugu">Telugu</option>
                      <option value="marathi">Marathi</option>
                      <option value="tamil">Tamil</option>
                      <option value="urdu">Urdu</option>
                      <option value="gujarati">Gujarati</option>
                      <option value="malayalam">Malayalam</option>
                      <option value="kannada">Kannada</option>
                      <option value="odia">Odia</option>
                      <option value="punjabi">Punjabi</option>
                      <option value="kashmiri">Kashmiri</option>
                      <option value="manipuri">Manipuri</option>
                    </select>
                  </div>

                  {/* Add dynamic fields */}
                  {[
                    {
                      label: "Project Name",
                      name: "projectName",
                      type: "text",
                    },
                    {
                      label: "Production House",
                      name: "productionHouse",
                      type: "text",
                    },
                    {
                      label: "Producer/Investor",
                      name: "producerOrInvestor",
                      type: "text",
                    },
                    { label: "Director", name: "director", type: "text" },
                    {
                      label: "Creative Director",
                      name: "creativeDirector",
                      type: "text",
                    },
                    { label: "Writer", name: "writer", type: "text" },
                    {
                      label: "Director of Photography",
                      name: "dop",
                      type: "text",
                    },
                    { label: "Budget", name: "budget", type: "number" },
                  ].map((field) => (
                    <div className="mb-3" key={field.name}>
                      <label>{field.label}</label>
                      <input
                        type={field.type}
                        className="form-control mt-1"
                        name={field.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  ))}

                  {/* File Inputs */}
                  {[
                    { label: "Poster", name: "poster" },
                    { label: "Contract", name: "contract" },
                    { label: "Trailer", name: "trailer" },
                    {
                      label: "Content Files",
                      name: "contentFiles",
                      multiple: true,
                    },
                    { label: "Cast Crew Details", name: "castCrewDetails" },
                    { label: "Clip Cut", name: "clipCut" },
                    { label: "NOC Files", name: "nocFiles", multiple: true },
                  ].map((fileField) => (
                    <div className="mb-3" key={fileField.name}>
                      <label>{fileField.label}</label>
                      <input
                        type="file"
                        className="form-control mt-1"
                        name={fileField.name}
                        multiple={fileField.multiple}
                        onChange={handleChange}
                      />
                    </div>
                  ))}

                  {/* Social Media Links */}
                  <div className="mb-3">
                    <label>Social Media Links (JSON)</label>
                    <textarea
                      className="form-control mt-1"
                      name="socialMediaLinks"
                      placeholder='{"facebook": "link", "twitter": "link"}'
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  {/* Cast Bit Related */}
                  <div className="mb-3">
                    <label>Cast Bit Related</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      name="castBitRelated"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg mt-5 w-100 rounded-3 fs-5 text-dark"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ready;
