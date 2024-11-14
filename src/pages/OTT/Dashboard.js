import Header from "./Header";

function OTTDashboard() {
  return (
    <>
      <Header />

      <section>
        <div className="container mt-7">
          <div class="row g-3">
            <div class="col-lg-3 col-md-12 col-12">
              <div class="card bg-light">
                <div class="p-4">
                  <span class="fs-6 text-uppercase fw-semibold">
                    New Project101
                  </span>
                  <h2 class="mt-4 fw-bold mb-1 d-flex align-items-center h1 lh-1">
                    2
                  </h2>
                  <span>
                    <span>1 Pending</span>
                    <span class="badge bg-info ms-4">1&nbsp; Approved</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-12 col-12">
              <div class="card bg-light">
                <div class="p-4">
                  <span class="fs-6 text-uppercase fw-semibold">
                    GAP Funding
                  </span>
                  <h2 class="mt-4 fw-bold mb-1 d-flex align-items-center h1 lh-1">
                    1
                  </h2>
                  <span>
                    <span>1 Pending</span>
                    <span class="badge bg-warning ms-4">0&nbsp; Approved</span>
                  </span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-12 col-12">
              <div class="card bg-light">
                <div class="p-4">
                  <span class="badge bg-danger">Rejected</span>
                  <h2 class="mt-4 fw-bold mb-1 d-flex align-items-center h1 lh-1">
                    0
                  </h2>
                  <span class="d-flex justify-content-between align-items-center">
                    <span>Project</span>
                  </span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-12 col-12">
              <div class="card bg-light">
                <div class="p-4">
                  <span class="fs-6 text-uppercase fw-semibold">
                    Ready to Releasing
                  </span>
                  <h2 class="mt-4 fw-bold mb-1 d-flex align-items-center h1 lh-1">
                    0
                  </h2>
                  <span class="d-flex justify-content-between align-items-center">
                    <span>0 Pending</span>
                    <span class="badge bg-warning ms-2">0&nbsp; Approved</span>
                  </span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-12 col-12">
              <div class="card bg-light">
                <div class="p-4">
                  <span class="badge bg-success">Approved</span>
                  <h2 class="mt-4 fw-bold mb-1 d-flex align-items-center h1 lh-1">
                    1
                  </h2>
                  <span class="d-flex justify-content-between align-items-center">
                    <span>Project</span>
                  </span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-12 col-12">
              <div class="card bg-light">
                <div class="p-4">
                  <span class="fs-6 text-uppercase fw-semibold">
                    Budget Approved
                  </span>
                  <h2 class="mt-4 fw-bold mb-1 d-flex align-items-center h1 lh-1">
                    1.2 CR
                  </h2>
                  <span class="d-flex justify-content-between align-items-center">
                    <span>Till Today</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OTTDashboard;
