import Header from "./Header";

function AllReady() {
  return (
    <>
      <Header />

      <section>
        <div className="container">
          <h2 class="mb-4 mt-5">101 Project</h2>
          <div class="row">
            <div class="col-lg-6 col-12">
              <a
                // data-bs-toggle="modal"
                // data-bs-target="#detailsModal"
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
                      <label>Update Status</label>
                      <select className="form-control mt-1">
                        <option>Need Clarification</option>
                        <option>Approved</option>
                        <option>Rejected</option>
                      </select>
                    </div>
                    <div>
                      <a class="btn btn-warning btn-lg mt-4 px-5 rounded-3 fs-5 mt-3 text-white">
                        <span className="mx-4">Update</span>
                      </a>
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

export default AllReady;

// import React, { useState } from "react";
// import Header from "./Header";

// function AllReady() {
//   const [modalVisible, setModalVisible] = useState(false); // Track modal visibility

//   // Function to open the modal
//   const openModal = () => {
//     setModalVisible(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setModalVisible(false);
//   };

//   return (
//     <>
//       <Header />

//       <section>
//         <div className="container">
//           <h2 className="mb-4 mt-5">101 Project</h2>
//           <div className="row">
//             <div className="col-lg-6 col-12">
//               <a
//                 className="card card-bordered mb-4 card-hover cursor-pointer"
//                 onClick={openModal} // Open modal when clicked
//               >
//                 <div className="card-body">
//                   <div>
//                     <div className="d-xl-flex">
//                       <div className="mb-3 mb-md-0">
//                         <img
//                           src="https://www.91-cdn.com/metareel-images/content/backdrops-6-1729536414437-bG6Prtffazz89cgSNas7IZZZoEz.jpg"
//                           alt=""
//                           className="icon-shape border rounded-4 object-fit-cover"
//                           height="180"
//                           width="150"
//                         />
//                       </div>
//                       <div className="ms-xl-3 w-100 mt-3 mt-xl-1 d-flex flex-column justify-content-between">
//                         <div className="d-flex justify-content-between mb-3">
//                           <div>
//                             <span className="badge bg-danger-soft mb-2">
//                               Pending
//                             </span>
//                             <h3 className="mb-1 fs-4">
//                               <span className="text-inherit">Vedaa</span>
//                             </h3>
//                             <div>
//                               <span>Ready to Releasing</span>
//                             </div>
//                           </div>
//                         </div>
//                         <div>
//                           <div className="mb-2 mb-md-0">
//                             <span className="me-4">
//                               <i className="bi bi-camera-reels"></i>
//                               <span className="ms-1">TV Show</span>
//                             </span>
//                             <span className="me-2">
//                               <i className="bi bi-chat-square-quote"></i>
//                               <span className="ms-1">English</span>
//                             </span>
//                             <div>
//                               <i className="bi bi-calendar-week me-1"></i>{" "}
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

//       {/* Modal */}
//       {modalVisible && (
//         <div
//           className="modal fade show"
//           id="detailsModal"
//           tabindex="-1"
//           aria-hidden="true"
//         >
//           <div className="modal-dialog modal-lg modal-dialog-centered">
//             <div className="modal-content rounded-4">
//               <div className="end-0 position-absolute z-1">
//                 <button
//                   type="button"
//                   className="btn-close bg-primary opacity-100 p-3 rounded-circle m-n3"
//                   onClick={closeModal}
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <div className="card-body px-lg-6 px-4 py-3">
//                   <div className="row">
//                     <div className="col-lg-6 col-12">
//                       <span className="badge bg-danger-soft mb-2">Pending</span>
//                       <h3 className="mb-1 fs-4">
//                         <span className="text-inherit">Vedaa</span>
//                       </h3>
//                       <div>
//                         <span>New Project</span>
//                       </div>
//                       <div className="mt-4">
//                         <p className="text-dark">1.1 Content Type Selection</p>
//                         <ul>
//                           <li>
//                             Type of content -{" "}
//                             <span className="text-danger">TV Show</span>
//                           </li>
//                           <li>
//                             Language -{" "}
//                             <span className="text-danger">Bengali</span>
//                           </li>
//                         </ul>
//                       </div>
//                       {/* Rest of modal content */}
//                     </div>
//                     <div className="col-lg-6 col-12">
//                       <img
//                         src="https://www.91-cdn.com/metareel-images/content/backdrops-6-1729536414437-bG6Prtffazz89cgSNas7IZZZoEz.jpg"
//                         alt=""
//                         className="icon-shape border rounded-4 object-fit-cover w-100"
//                         height="350"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default AllReady;
