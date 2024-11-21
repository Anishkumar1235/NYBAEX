import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
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
          "https://ott-ep3g.onrender.com/api/v1/projects/",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          }
        );
        if (response.data && Array.isArray(response.data.data)) {
          setProjects(response.data.data);
        } else {
          console.error("Unexpected response format:", response.data);
          setProjects([]);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([]);
      } finally {
        setLoading(false);
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
        "https://ott-ep3g.onrender.com/api/v1/projects/",
        newProject,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            "Content-Type": "multipart/form-data",
          },
        }
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

  return (
    <>
      <Header />

      <div class="modal fade" id="addModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content rounded-4">
            <div className="end-0 position-absolute z-1">
              <button
                type="button"
                class="border-0 bg-transparent m-n3"
                data-bs-dismiss="modal"
              >
                <i className="bi bi-x-circle-fill fs-1 text-primary"></i>
              </button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleAddProject}>
                <div className="card-body px-lg-6 px-4 py-3">
                  <h2 className="lh-1 mb-4">Add project details</h2>
                  <div>
                    <div className="mb-3">
                      <p className="text-dark mb-1 bg-light py-2 text-center rounded-pill">
                        1.0 Category
                      </p>
                    </div>
                    <div>
                      <label>Select category</label>
                      <select
                        className="form-control mt-1"
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
                  </div>
                  <div>
                    <div className="mt-4 mb-3">
                      <p className="text-dark mb-1 bg-light py-2 text-center rounded-pill">
                        1.1 Content Type Selection
                      </p>
                    </div>
                    <div>
                      <label>Select your type of content</label>
                      <select
                        className="form-control mt-1"
                        name="contentType"
                        value={newProject.contentType}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select</option>
                        <option value="tv show">TV Show</option>
                        <option value="web series">Web Series</option>
                        <option value="movie">Movie</option>
                        <option value="short film">Short Film</option>
                        <option value="regional">Regional</option>
                      </select>
                    </div>
                    <div className="mt-3">
                      <label>Select language</label>
                      <select
                        className="form-control mt-1"
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
                  </div>
                  <div>
                    <div className="mt-4 mb-3">
                      <p className="text-dark mb-1 bg-light py-2 text-center rounded-pill">
                        1.2 Project Details
                      </p>
                    </div>
                    <div className="mt-2">
                      <label>Enter your rights buyer</label>
                      <input
                        type="text"
                        className="form-control mt-1"
                        placeholder=""
                        name="buyer"
                        value={newProject.buyer}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mt-2">
                      <label>Enter your project name</label>
                      <input
                        type="text"
                        className="form-control mt-1"
                        placeholder=""
                        name="projectName"
                        value={newProject.projectName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mt-2">
                      <label>Upload Poster</label>
                      <input
                        type="file"
                        name="poster"
                        onChange={handleFileChange}
                        className="form-control mt-1"
                      />
                    </div>
                    <div className="mt-2">
                      <label>Upload Contract</label>
                      <input
                        type="file"
                        className="form-control mt-1"
                        placeholder=""
                        name="contract"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-4 mb-3">
                      <p className="text-dark mb-1 bg-light py-2 text-center rounded-pill">
                        1.3 Multiple Contracts Option
                      </p>
                    </div>
                    <div className="mt-2">
                      <label>Upload all contracts</label>
                      <input
                        type="file"
                        className="form-control mt-1"
                        placeholder=""
                        name="additionalContracts"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-4 mb-3">
                      <p className="text-dark mb-1 bg-light py-2 text-center rounded-pill">
                        1.4 New Project Submission
                      </p>
                    </div>
                    <div className="mt-2">
                      <label>Synopsis / One-Line Story</label>
                      <textarea
                        type="text"
                        rows="4"
                        className="form-control mt-1"
                        name="synopsis"
                        value={newProject.synopsis}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                    <div className="mt-2">
                      <label>Story</label>
                      <textarea
                        type="text"
                        rows="4"
                        className="form-control mt-1"
                        name="story"
                        value={newProject.story}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                    <div className="mt-2">
                      <label>Production House Name</label>
                      <input
                        type="text"
                        className="form-control mt-1"
                        name="productionHouse"
                        value={newProject.productionHouse}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mt-2">
                      <label>Producer</label>
                      <input
                        type="text"
                        className="form-control mt-1"
                        name="producer"
                        value={newProject.producer}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mt-2">
                      <label>Director</label>
                      <input
                        type="text"
                        className="form-control mt-1"
                        name="director"
                        value={newProject.director}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mt-2">
                      <label>Creative Director</label>
                      <input
                        type="text"
                        className="form-control mt-1"
                        name="creativeDirector"
                        value={newProject.creativeDirector}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mt-2">
                      <label>Writer</label>
                      <input
                        type="text"
                        className="form-control mt-1"
                        name="writer"
                        value={newProject.writer}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mt-2">
                      <label>Director of Photography (DOP)</label>
                      <input
                        type="text"
                        className="form-control mt-1"
                        name="dop"
                        value={newProject.dop}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mt-2">
                      <label>Project PPT Look and Feel</label>
                      <input
                        type="file"
                        className="form-control mt-1"
                        name="projectPPT"
                        onChange={handleFileChange}
                      />
                    </div>
                    <div className="mt-2">
                      <label>Story Narration (Screenplay with Dialogue)</label>
                      <input
                        type="file"
                        className="form-control mt-1"
                        name="screenplay"
                        onChange={handleFileChange}
                      />
                    </div>
                    <div className="mt-2">
                      <label>Casting</label>
                      <textarea
                        type="text"
                        rows="4"
                        className="form-control mt-1"
                        name="casting"
                        value={newProject.casting}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                    <div className="mt-2">
                      <label>Tentative Budget</label>
                      <input
                        type="text"
                        className="form-control mt-1"
                        name="tentativeBudget"
                        value={newProject.tentativeBudget}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mt-2">
                      <label>Budget Sheet</label>
                      <input type="file" className="form-control mt-1" />
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg mt-5 w-100 rounded-3 fs-5 text-white"
                  >
                    Submit
                  </button>
                </div>
              </form>
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
            <span className="mx-2">Add Project</span>
          </a>
        </div>
      </div>

      <section className="pb-7">
        <div className="container">
          <h2 class="mb-4 mt-5">
            {projects.length} Project{projects.length !== 1 ? "s" : ""}
          </h2>
          {loading ? (
            <div class="spinner-border" role="status"></div>
          ) : (
            <div class="row g-3">
              {projects.map((project) => (
                <div class="col-lg-6 col-12">
                  <a
                    data-bs-toggle="modal"
                    data-bs-target={`#${project._id}`}
                    class="card card-bordered card-hover cursor-pointer"
                  >
                    <div class="card-body">
                      <div>
                        <div class="d-xl-flex">
                          <div class="mb-3 mb-md-0">
                            <img
                              src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dharmaveer-2-et00403175-1719817449.jpg"
                              alt=""
                              class="icon-shape border rounded-4 object-fit-cover"
                              height="180"
                              width="150"
                            />
                          </div>
                          <div class="ms-xl-3 w-100 mt-3 mt-xl-1 d-flex flex-column justify-content-between">
                            <div class="d-flex justify-content-between mb-3">
                              <div>
                                <span class="badge bg-danger-soft mb-2 text-capitalize">
                                  {project.ottUpdates}
                                </span>
                                <h3 class="mb-1 fs-4">
                                  <span class="text-inherit">
                                    {project.projectName}
                                  </span>
                                </h3>
                                <div>
                                  <span className="text-capitalize">
                                    {project.category}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div class="mb-2 mb-md-0">
                                <span class="me-4">
                                  <i class="bi bi-camera-reels"></i>
                                  <span class="ms-1 text-capitalize">
                                    {project.contentType}
                                  </span>
                                </span>
                                <span class="me-2">
                                  <i class="bi bi-chat-square-quote"></i>
                                  <span class="ms-1 text-capitalize">
                                    {project.language}
                                  </span>
                                </span>
                                <div>
                                  <i class="bi bi-calendar-week me-1"></i>{" "}
                                  <span className="text-uppercase">
                                    {new Date(project.createdAt).toLocaleString(
                                      "en-GB",
                                      {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        hour12: true,
                                      }
                                    )}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                  <div
                    class="modal fade"
                    id={project._id}
                    tabindex="-1"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-lg modal-dialog-centered">
                      <div class="modal-content rounded-4">
                        <div className="end-0 position-absolute z-1">
                          <button
                            type="button"
                            class="border-0 bg-transparent m-n3"
                            data-bs-dismiss="modal"
                          >
                            <i className="bi bi-x-circle-fill fs-1 text-primary"></i>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div className="card-body px-lg-6 px-4 py-3">
                            <div className="row">
                              <div className="col-lg-6 col-12">
                                <span class="badge bg-danger-soft mb-2 text-capitalize">
                                  {project.ottUpdates}
                                </span>
                                <h3 class="mb-1 fs-4">
                                  <span class="text-inherit text-capitalize">
                                    {project.projectName}
                                  </span>
                                </h3>
                                <div>
                                  <span className="text-capitalize">
                                    {project.category}
                                  </span>
                                </div>
                                <div className="mt-4">
                                  <p className="text-dark">
                                    1.1 Content Type Selection
                                  </p>
                                  <ul>
                                    <li>
                                      Type of content -{" "}
                                      <span className="text-danger text-capitalize">
                                        {project.contentType}
                                      </span>
                                    </li>
                                    <li>
                                      Language -{" "}
                                      <span className="text-danger text-capitalize">
                                        {project.language}
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="mt-4">
                                  <p className="text-dark">
                                    1.2 Project Details
                                  </p>
                                  <ul>
                                    <li>
                                      Rights Buyer -{" "}
                                      <span className="text-danger text-capitalize">
                                        {project.buyer}
                                      </span>
                                    </li>
                                    <li>
                                      Project Name -{" "}
                                      <span className="text-danger text-capitalize">
                                        {project.projectName}
                                      </span>
                                    </li>
                                    <li>
                                      Poster -{" "}
                                      <a
                                        href={project.poster}
                                        target="_blank"
                                        className="text-danger"
                                      >
                                        View Poster
                                      </a>
                                    </li>
                                    <li>
                                      Contract -{" "}
                                      <a
                                        href={project.contract}
                                        target="_blank"
                                        className="text-danger"
                                      >
                                        View Contract
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-6 col-12">
                                <img
                                  src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dharmaveer-2-et00403175-1719817449.jpg"
                                  alt=""
                                  class="icon-shape border rounded-4 object-fit-cover w-100"
                                  height="350"
                                />
                              </div>
                            </div>
                            <div className="mt-5">
                              <div className="mt-4">
                                <p className="text-dark">
                                  1.3 Multiple Contracts Option
                                </p>
                                <ul>
                                  <li>
                                    All Contracts -{" "}
                                    <a
                                      href={project.additionalContracts}
                                      target="_blank"
                                      className="text-danger"
                                    >
                                      View All Contracts
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="mt-4">
                                <p className="text-dark">
                                  1.4 New Project Submission
                                </p>
                                <ul>
                                  <li>
                                    Synopsis / One-Line Story -{" "}
                                    <span className="text-danger text-capitalize">
                                      {project.synopsis}
                                    </span>
                                  </li>
                                  <li>
                                    Story -{" "}
                                    <span className="text-danger text-capitalize">
                                      {project.story}
                                    </span>
                                  </li>
                                  <li>
                                    Production House Name -{" "}
                                    <span className="text-danger text-capitalize">
                                      {project.productionHouse}
                                    </span>
                                  </li>
                                  <li>
                                    Producer -{" "}
                                    <span className="text-danger text-capitalize">
                                      {project.producer}
                                    </span>
                                  </li>
                                  <li>
                                    Director -{" "}
                                    <span className="text-danger text-capitalize">
                                      {project.director}
                                    </span>
                                  </li>
                                  <li>
                                    Creative Director -{" "}
                                    <span className="text-danger text-capitalize">
                                      {project.creativeDirector}
                                    </span>
                                  </li>
                                  <li>
                                    Writer -{" "}
                                    <span className="text-danger text-capitalize">
                                      {project.writer}
                                    </span>
                                  </li>
                                  <li>
                                    Director of Photography (DOP) -{" "}
                                    <span className="text-danger text-capitalize">
                                      {project.dop}
                                    </span>
                                  </li>
                                  <li>
                                    Project PPT Look and Feel -{" "}
                                    <a
                                      href={project.projectPPT}
                                      target="_blank"
                                      className="text-danger"
                                    >
                                      View PPT
                                    </a>
                                  </li>
                                  <li>
                                    Story Narration (Screenplay with Dialogue) -{" "}
                                    <a
                                      href={project.screenplay}
                                      target="_blank"
                                      className="text-danger"
                                    >
                                      View File
                                    </a>
                                  </li>
                                  <li>
                                    Casting -{" "}
                                    <span className="text-danger text-capitalize">
                                      {project.casting}
                                    </span>
                                  </li>
                                  <li>
                                    Tentative Budget (INR) -{" "}
                                    <span className="text-danger text-capitalize">
                                      {project.tentativeBudget}
                                    </span>
                                  </li>
                                  <li>
                                    Budget Sheet -{" "}
                                    <span className="text-danger">
                                      View Budget Sheet
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="mt-5">
                              <h3>OTT Updates</h3>
                              <span class="badge bg-danger-soft mb-2 text-capitalize">
                                {project.ottUpdates}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Projects;
