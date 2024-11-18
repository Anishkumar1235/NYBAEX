// import Header from "./Header";

// function Projects() {
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
//                 <h2 className="lh-1 mb-4">Add project details</h2>
//                 <div>
//                   <div className="mb-3">
//                     <p className="text-dark mb-1 bg-light py-2 text-center rounded-pill">
//                       1.0 Category
//                     </p>
//                   </div>
//                   <div>
//                     <label>Select category</label>
//                     <select className="form-control mt-1" name="">
//                       <option>New Project</option>
//                       <option>GAP Funding</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div>
//                   <div className="mt-4 mb-3">
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
//                     <label>Enter your rights buyer</label>
//                     <input
//                       type="text"
//                       className="form-control mt-1"
//                       placeholder=""
//                     />
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
//                       1.3 Multiple Contracts Option
//                     </p>
//                   </div>
//                   <div className="mt-2">
//                     <label>Upload all contracts</label>
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
//                       1.4 New Project Submission
//                     </p>
//                   </div>
//                   <div className="mt-2">
//                     <label>Synopsis / One-Line Story</label>
//                     <textarea
//                       type="text"
//                       rows="4"
//                       className="form-control mt-1"
//                     ></textarea>
//                   </div>
//                   <div className="mt-2">
//                     <label>Story</label>
//                     <textarea
//                       type="text"
//                       rows="4"
//                       className="form-control mt-1"
//                     ></textarea>
//                   </div>
//                   <div className="mt-2">
//                     <label>Production House Name</label>
//                     <input type="text" className="form-control mt-1" />
//                   </div>
//                   <div className="mt-2">
//                     <label>Producer</label>
//                     <input type="text" className="form-control mt-1" />
//                   </div>
//                   <div className="mt-2">
//                     <label>Director</label>
//                     <input type="text" className="form-control mt-1" />
//                   </div>
//                   <div className="mt-2">
//                     <label>Creative Director</label>
//                     <input type="text" className="form-control mt-1" />
//                   </div>
//                   <div className="mt-2">
//                     <label>Writer</label>
//                     <input type="text" className="form-control mt-1" />
//                   </div>
//                   <div className="mt-2">
//                     <label>Director of Photography (DOP)</label>
//                     <input type="text" className="form-control mt-1" />
//                   </div>
//                   <div className="mt-2">
//                     <label>Project PPT Look and Feel</label>
//                     <input type="file" className="form-control mt-1" />
//                   </div>
//                   <div className="mt-2">
//                     <label>Story Narration (Screenplay with Dialogue)</label>
//                     <input type="file" className="form-control mt-1" />
//                   </div>
//                   <div className="mt-2">
//                     <label>Casting</label>
//                     <textarea
//                       type="text"
//                       rows="4"
//                       className="form-control mt-1"
//                     ></textarea>
//                   </div>
//                   <div className="mt-2">
//                     <label>Tentative Budget</label>
//                     <input type="text" className="form-control mt-1" />
//                   </div>
//                   <div className="mt-2">
//                     <label>Budget Sheet</label>
//                     <input type="file" className="form-control mt-1" />
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
//             <span className="mx-2">Add Project</span>
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
//                           src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dharmaveer-2-et00403175-1719817449.jpg"
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
//                               <span class="text-inherit">
//                                 Dharmaveer: Mukkam Post Thane 3 (UA)
//                               </span>
//                             </h3>
//                             <div>
//                               <span>New Project</span>
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
//                       <span class="text-inherit">
//                         Dharmaveer: Mukkam Post Thane 2 (UA)
//                       </span>
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
//                           Rights Buyer -{" "}
//                           <span className="text-danger">...</span>
//                         </li>
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
//                       src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dharmaveer-2-et00403175-1719817449.jpg"
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
//                         Synopsis / One-Line Story -{" "}
//                         <span className="text-danger">...</span>
//                       </li>
//                       <li>
//                         Story - <span className="text-danger">...</span>
//                       </li>
//                       <li>
//                         Production House Name -{" "}
//                         <span className="text-danger">...</span>
//                       </li>
//                       <li>
//                         Producer - <span className="text-danger">...</span>
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
//                         Project PPT Look and Feel -{" "}
//                         <span className="text-danger">View PPT</span>
//                       </li>
//                       <li>
//                         Story Narration (Screenplay with Dialogue) -{" "}
//                         <span className="text-danger">View File</span>
//                       </li>
//                       <li>
//                         Casting - <span className="text-danger">...</span>
//                       </li>
//                       <li>
//                         Tentative Budget -{" "}
//                         <span className="text-danger">...</span>
//                       </li>
//                       <li>
//                         Budget Sheet -{" "}
//                         <span className="text-danger">View Budget Sheet</span>
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

// export default Projects;

///////

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Header from "./Header"; // Assuming you have a Header component

// function Projects() {
//   const [projects, setProjects] = useState([]); // Initialize projects as an empty array
//   const [loading, setLoading] = useState(true); // State to manage loading indicator
//   const [newProject, setNewProject] = useState({
//     projectName: "",
//     category: "",
//     contentType: "",
//     language: "",
//     buyer: "",
//     poster: "",
//     contract: "",
//     additionalContracts: [],
//     synopsis: "",
//     story: "",
//     productionHouse: "",
//     producer: "",
//     director: "",
//     creativeDirector: "",
//     writer: "",
//     dop: "",
//     projectPPT: "",
//     screenplay: "",
//     casting: "",
//     tentativeBudget: 0,
//   });

//   const [selectedProject, setSelectedProject] = useState(null);

//   // Fetch projects from the API when the component loads
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:9001/api/v1/projects/"
//         );
//         if (response.data && Array.isArray(response.data.data)) {
//           setProjects(response.data.data); // Update projects with the nested data array
//         } else {
//           console.error("Unexpected response format:", response.data);
//           setProjects([]); // Set to empty array if response is not as expected
//         }
//       } catch (error) {
//         console.error("Error fetching projects:", error);
//         setProjects([]); // Fallback to empty array on error
//       } finally {
//         setLoading(false); // Stop loading in all cases
//       }
//     };
//     fetchProjects();
//   }, []);

//   const fetchProjectById = async (projectId) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:9001/api/v1/projects/${projectId}`
//       );
//       setSelectedProject(response.data.data);
//     } catch (error) {
//       console.error("Error fetching project details:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewProject((prevProject) => ({
//       ...prevProject,
//       [name]: name === "tentativeBudget" ? Number(value) : value,
//     }));
//   };

//   const handleAddProject = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:9001/api/v1/projects/",
//         newProject
//       );
//       setProjects((prevProjects) => [...prevProjects, response.data.data]);
//       setNewProject({
//         projectName: "",
//         category: "",
//         contentType: "",
//         language: "",
//         buyer: "",
//         poster: "",
//         contract: "",
//         additionalContracts: [],
//         synopsis: "",
//         story: "",
//         productionHouse: "",
//         producer: "",
//         director: "",
//         creativeDirector: "",
//         writer: "",
//         dop: "",
//         projectPPT: "",
//         screenplay: "",
//         casting: "",
//         tentativeBudget: 0,
//       });
//     } catch (error) {
//       console.error("Error adding project:", error);
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
//           <span className="mx-2">Add Project</span>
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
//         <div className="modal-dialog">
//           <div className="modal-content">
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
//               <div className="modal-body">
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
//                     {/* Add remaining languages */}
//                   </select>
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
//                   <label className="form-label">Poster URL</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="poster"
//                     value={newProject.poster}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Contract URL</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="contract"
//                     value={newProject.contract}
//                     onChange={handleInputChange}
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
//                   />
//                 </div>
//                 {/* Add remaining fields similarly */}
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   data-bs-dismiss="modal"
//                 >
//                   Close
//                 </button>
//                 <button type="submit" className="btn btn-primary">
//                   Add Project
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Projects Section */}
//       <section>
//         <div className="container">
//           <h2 className="mb-4 mt-5">
//             {projects.length} Project{projects.length !== 1 ? "s" : ""}
//           </h2>

//           {loading ? (
//             <p>Loading projects...</p>
//           ) : (
//             <div className="row">
//               {Array.isArray(projects) && projects.length > 0 ? (
//                 projects.map((project) => (
//                   <div key={project._id} className="col-lg-6 col-12">
//                     <button
//                       data-bs-toggle="modal"
//                       data-bs-target="#detailsModal"
//                       onClick={() => fetchProjectById(project._id)}
//                       className="card card-bordered mb-4 card-hover cursor-pointer"
//                     >
//                       <div className="card-body">
//                         <div className="d-xl-flex">
//                           <div className="mb-3 mb-md-0">
//                             <img
//                               src={project.poster || "default-image.jpg"} // Use the `poster` field from project data or a default image
//                               alt={project.projectName} // Updated to use `projectName` instead of `name`
//                               className="icon-shape border rounded-4 object-fit-cover"
//                               height="180"
//                               width="150"
//                             />
//                           </div>
//                           <div className="ms-xl-3 w-100 mt-3 mt-xl-1 d-flex flex-column justify-content-between">
//                             <div className="d-flex justify-content-between mb-3">
//                               <div>
//                                 <span className="badge bg-danger-soft mb-2">
//                                   {project.status}
//                                 </span>
//                                 <h3 className="mb-1 fs-4">
//                                   <span className="text-inherit">
//                                     {project.projectName}{" "}
//                                     {/* corrected to use projectName */}
//                                   </span>
//                                 </h3>
//                                 <div>
//                                   <span>{project.category}</span>
//                                 </div>
//                               </div>
//                             </div>
//                             <div>
//                               <div className="mb-2 mb-md-0">
//                                 <span className="me-4">
//                                   <i className="bi bi-camera-reels"></i>
//                                   <span className="ms-1">
//                                     {project.contentType}
//                                   </span>
//                                 </span>
//                                 <span className="me-2">
//                                   <i className="bi bi-chat-square-quote"></i>
//                                   <span className="ms-1">
//                                     {project.language}
//                                   </span>
//                                 </span>
//                                 <div>
//                                   <i className="bi bi-calendar-week me-1"></i>
//                                   <span>{project.releaseDate}</span>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </button>
//                   </div>
//                 ))
//               ) : (
//                 <p>No projects available</p>
//               )}
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }

// export default Projects;

///////////

import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header"; // Assuming you have a Header component
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Projects() {
  const [projects, setProjects] = useState([]); // Initialize projects as an empty array
  const [loading, setLoading] = useState(true); // State to manage loading indicator
  const [selectedProject, setSelectedProject] = useState(null); // State to hold the selected project details
  const [newProject, setNewProject] = useState({
    projectName: "",
    category: "",
    contentType: "",
    language: "",
    buyer: "",
    poster: "",
    contract: "",
    additionalContracts: [],
    synopsis: "",
    story: "",
    productionHouse: "",
    producer: "",
    director: "",
    creativeDirector: "",
    writer: "",
    dop: "",
    projectPPT: "",
    screenplay: "",
    casting: "",
    tentativeBudget: 0,
  });

  // Fetch projects from the API when the component loads
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8501/api/v1/projects/"
        );
        if (response.data && Array.isArray(response.data.data)) {
          setProjects(response.data.data); // Update projects with the nested data array
        } else {
          console.error("Unexpected response format:", response.data);
          setProjects([]); // Set to empty array if response is not as expected
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([]); // Fallback to empty array on error
      } finally {
        setLoading(false); // Stop loading in all cases
      }
    };
    fetchProjects();
  }, []);

  // Handle input change for new project form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prevProject) => ({
      ...prevProject,
      [name]: name === "tentativeBudget" ? Number(value) : value,
    }));
  };

  // Add this function within your component
  const handleFileChange = (event) => {
    const { name, files } = event.target; // Get name and files from the input field
    const file = files[0]; // Get the first file (if any)

    if (file) {
      const fileUrl = URL.createObjectURL(file); // Create a temporary URL for the file

      // Update the state based on the input name (either 'poster' or 'contract')
      setNewProject((prevState) => ({
        ...prevState,
        [name]: fileUrl, // Dynamically set either 'poster' or 'contract' based on the input field name
      }));
    }
  };

  // Handle adding a new project
  const handleAddProject = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8501/api/v1/projects/",
        newProject
      );
      setProjects((prevProjects) => [...prevProjects, response.data.data]);
      setNewProject({
        projectName: "",
        category: "",
        contentType: "",
        language: "",
        buyer: "",
        poster: "",
        contract: "",
        additionalContracts: [],
        synopsis: "",
        story: "",
        productionHouse: "",
        producer: "",
        director: "",
        creativeDirector: "",
        writer: "",
        dop: "",
        projectPPT: "",
        screenplay: "",
        casting: "",
        tentativeBudget: 0,
      });
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  // Fetch project details by ID
  const fetchProjectById = async (projectId) => {
    try {
      const response = await axios.get(
        `http://localhost:8501/api/v1/projects/${projectId}`
      );
      setSelectedProject(response.data.data); // Store the selected project details
    } catch (error) {
      console.error("Error fetching project details:", error);
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
          <span className="mx-2">Add Project</span>
        </button>
      </div>
      {/* Add Project Modal */}
      <div
        className="modal fade"
        id="addModal"
        tabIndex="-1"
        aria-labelledby="addModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" style={{ maxWidth: "800px" }}>
          <div
            className="modal-content"
            style={{ width: "210mm", padding: "20mm" }}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="addModalLabel">
                Add New Project
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleAddProject}>
              <div
                className="modal-body"
                style={{ maxHeight: "60vh", overflowY: "auto" }}
              >
                {/* Form Fields for Project Details */}
                <div className="mb-3">
                  <label className="form-label">Project Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="projectName"
                    value={newProject.projectName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Category</label>
                  <select
                    className="form-control"
                    name="category"
                    value={newProject.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="new project">New Project</option>
                    <option value="gap funding">Gap Funding</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Content Type</label>
                  <select
                    className="form-control"
                    name="contentType"
                    value={newProject.contentType}
                    onChange={handleInputChange}
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

                <div className="mb-3">
                  <label className="form-label">Language</label>
                  <select
                    className="form-control"
                    name="language"
                    value={newProject.language}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="bengali">Bengali</option>
                    <option value="telugu">Telugu</option>
                    <option value="tamil">Tamil</option>
                    <option value="marathi">Marathi</option>
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

                <div className="mb-3">
                  <label className="form-label">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="projectDate"
                    value={newProject.projectDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Buyer</label>
                  <input
                    type="text"
                    className="form-control"
                    name="buyer"
                    value={newProject.buyer}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Upload Poster</label>
                  <input
                    type="file"
                    className="form-control"
                    name="poster"
                    onChange={handleFileChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Upload Contract</label>
                  <input
                    type="file"
                    className="form-control"
                    name="contract"
                    onChange={handleFileChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Upload All Contracts</label>
                  <input
                    type="file"
                    className="form-control"
                    name="additionalContracts"
                    onChange={handleFileChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Synopsis</label>
                  <textarea
                    className="form-control"
                    name="synopsis"
                    value={newProject.synopsis}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">Story</label>
                  <textarea
                    className="form-control"
                    name="story"
                    value={newProject.story}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">Production House</label>
                  <textarea
                    className="form-control"
                    name="productionHouse"
                    value={newProject.productionHouse}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">Producer</label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="producer"
                    value={newProject.producer}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">Director</label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="director"
                    value={newProject.director}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">Creative Director</label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="creativeDirector"
                    value={newProject.creativeDirector}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">Writer</label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="writer"
                    value={newProject.writer}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    DOP (Director of Photography)
                  </label>
                  <textarea
                    className="form-control"
                    name="dop"
                    value={newProject.dop}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Project PPT Look and Feel
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    name="projectPPT"
                    onChange={handleFileChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Story Narration (Screenplay with Dialogue)
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    name="screenplay"
                    onChange={handleFileChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Casting</label>
                  <textarea
                    className="form-control"
                    name="casting"
                    value={newProject.casting}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">Tentative Budget</label>
                  <input
                    type="number"
                    className="form-control"
                    name="tentativeBudget"
                    value={newProject.tentativeBudget}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <h2 className="mb-4 mt-5">
            {projects.length} Project{projects.length !== 1 ? "s" : ""}
          </h2>

          {loading ? (
            <p>Loading projects...</p>
          ) : (
            <div className="row">
              {projects.length > 0 ? (
                projects.map((project) => (
                  <div key={project._id} className="col-lg-6 col-12">
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#detailsModal"
                      onClick={() => fetchProjectById(project._id)}
                      className="card card-bordered mb-4 card-hover cursor-pointer"
                    >
                      <div className="card-body">
                        <div className="d-xl-flex">
                          <div className="mb-3 mb-md-0">
                            <img
                              src={project.poster || "default-image.jpg"}
                              alt={project.projectName}
                              className="icon-shape border rounded-4 object-fit-cover"
                              height="180"
                              width="170"
                            />
                          </div>
                          <div className="ms-xl-3 w-200 mt-3 mt-xl-1 d-flex flex-column justify-content-between">
                            <div className="d-flex justify-content-between mb-3">
                              <div>
                                <span className="badge bg-danger-soft mb-2">
                                  {project.status}
                                </span>
                                <h3 className="mb-1 fs-4">
                                  <span className="text-inherit">
                                    {project.projectName}
                                  </span>
                                </h3>
                                <div>
                                  <span>{project.category}</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="mb-2 mb-md-0">
                                <span className="me-4">
                                  <i className="bi bi-camera-reels"></i>
                                  <span className="ms-1">
                                    {project.contentType}
                                  </span>
                                </span>
                                <span className="me-2">
                                  <i className="bi bi-chat-square-quote"></i>
                                  <span className="ms-1">
                                    {project.language}
                                  </span>
                                </span>
                                <div>
                                  <i className="bi bi-calendar-week me-1"></i>
                                  <span>
                                    {project.releaseDate || "01/01/2023"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                ))
              ) : (
                <p>No projects available</p>
              )}
            </div>
          )}
        </div>
      </section>
      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="modal fade"
          id="detailsModal"
          tabIndex="-1"
          aria-labelledby="detailsModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="detailsModalLabel">
                  {selectedProject.projectName}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  {/* Project Details Column */}
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6">
                        <strong>Category:</strong> {selectedProject.category}
                      </div>
                      <div className="col-md-6">
                        <strong>Content Type:</strong>{" "}
                        {selectedProject.contentType}
                      </div>
                      <div className="col-md-6">
                        <strong>Language:</strong> {selectedProject.language}
                      </div>
                      <div className="col-md-6">
                        <strong>Buyer:</strong> {selectedProject.buyer}
                      </div>
                      <div className="col-md-6">
                        <strong>Project Name:</strong>{" "}
                        {selectedProject.projectName}
                      </div>

                      <div className="mb-3 text-left">
                        <strong>Contract:</strong>
                        {selectedProject.contract ? (
                          <a
                            href={selectedProject.contract}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="btn btn-deep-pink">View</button>
                          </a>
                        ) : (
                          <p>No contract uploaded</p>
                        )}
                      </div>

                      <div className="mb-3 text-left">
                        <strong>Additional Contracts:</strong>
                        {selectedProject.additionalContracts ? (
                          <a
                            href={selectedProject.additionalContracts}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="btn btn-deep-pink">View</button>
                          </a>
                        ) : (
                          <p>No additional contract uploaded</p>
                        )}
                      </div>

                      <div className="col-md-6">
                        <strong>Synopsis:</strong> {selectedProject.synopsis}
                      </div>
                      <div className="col-md-6">
                        <strong>Story:</strong> {selectedProject.story}
                      </div>
                      <div className="col-md-6">
                        <strong>Production House:</strong>{" "}
                        {selectedProject.productionHouse}
                      </div>
                      <div className="col-md-6">
                        <strong>Producer:</strong> {selectedProject.producer}
                      </div>
                      <div className="col-md-6">
                        <strong>Director:</strong> {selectedProject.director}
                      </div>
                      <div className="col-md-6">
                        <strong>Creative Director:</strong>{" "}
                        {selectedProject.creativeDirector}
                      </div>
                      <div className="col-md-6">
                        <strong>Writer:</strong> {selectedProject.writer}
                      </div>
                      <div className="col-md-6">
                        <strong>DOP:</strong> {selectedProject.dop}
                      </div>

                      <div className="mb-3 text-left">
                        <strong>Project PPT:</strong>
                        {selectedProject.projectPPT ? (
                          <a
                            href={selectedProject.projectPPT}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="btn btn-deep-pink">View</button>
                          </a>
                        ) : (
                          <p>No project PPT uploaded</p>
                        )}
                      </div>

                      <div className="mb-3 text-left">
                        <strong>Screenplay:</strong>
                        {selectedProject.screenplay ? (
                          <a
                            href={selectedProject.screenplay}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="btn btn-deep-pink">View</button>
                          </a>
                        ) : (
                          <p>No screenplay uploaded</p>
                        )}
                      </div>

                      <div className="col-md-6">
                        <strong>Casting:</strong> {selectedProject.casting}
                      </div>

                      <div className="col-md-12">
                        <strong>Tentative Budget:</strong>{" "}
                        {selectedProject.tentativeBudget}
                      </div>
                    </div>
                  </div>

                  {/* Poster Column */}
                  <div className="col-md-4">
                    <div className="d-flex justify-content-center">
                      {selectedProject.poster ? (
                        <img
                          src={selectedProject.poster}
                          alt="Poster"
                          className="img-fluid rounded"
                          style={{ width: "150%", height: "auto" }} // Increased width of poster
                        />
                      ) : (
                        <p>No poster uploaded</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
