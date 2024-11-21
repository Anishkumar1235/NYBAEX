// import { Link } from "react-router-dom";

// function Login() {
//   return (
//     <>
//       <div className="login-bg vh-100 vw-100">
//         <div className="container h-100 w-100 d-flex align-items-center">
//           <div className="col-lg-5 col-md-7 col-12 offset-lg-7 offset-md-5">
//             <div className="p-5 rounded-4 bg-white">
//               <div className="m-5">
//                 <h2 className="lh-1 mb-2">
//                   Create Account : Finish Your Registration Process
//                 </h2>
//                 <div className="vh-60 overflow-scroll">
//                   <div className="mt-4">
//                     <label>Name</label>
//                     <input
//                       type="text"
//                       className="form-control mt-1"
//                       placeholder="Your Name"
//                     />
//                   </div>
//                   <div className="mt-3">
//                     <label>What is your occupation?</label>
//                     <select className="form-control mt-1" name="">
//                       <option>Salaried</option>
//                       <option>Self-employed</option>
//                       <option>Professional</option>
//                       <option>Retired</option>
//                     </select>
//                   </div>
//                   <div className="mt-4">
//                     <label>Have you participated in any of these?</label>
//                     <div className="mt-1">
//                       <div class="form-check">
//                         <input
//                           class="form-check-input"
//                           type="checkbox"
//                           id="inlineCheckbox1"
//                           value="option1"
//                         />
//                         <label class="form-check-label" for="inlineCheckbox1">
//                           Invoice Discounting
//                         </label>
//                       </div>
//                       <div class="form-check">
//                         <input
//                           class="form-check-input"
//                           type="checkbox"
//                           id="inlineCheckbox2"
//                           value="option2"
//                         />
//                         <label class="form-check-label" for="inlineCheckbox2">
//                           Real Estate
//                         </label>
//                       </div>
//                       <div class="form-check">
//                         <input
//                           class="form-check-input"
//                           type="checkbox"
//                           id="inlineCheckbox3"
//                           value="option3"
//                         />
//                         <label class="form-check-label" for="inlineCheckbox3">
//                           Stocks/Market Funds
//                         </label>
//                       </div>
//                       <div class="form-check">
//                         <input
//                           class="form-check-input"
//                           type="checkbox"
//                           id="inlineCheckbox3"
//                           value="option3"
//                         />
//                         <label class="form-check-label" for="inlineCheckbox3">
//                           Bonds/FD/RD
//                         </label>
//                       </div>
//                       <div class="form-check">
//                         <input
//                           class="form-check-input"
//                           type="checkbox"
//                           id="inlineCheckbox3"
//                           value="option3"
//                         />
//                         <label class="form-check-label" for="inlineCheckbox3">
//                           AIF (Alternative Investment Funds)
//                         </label>
//                       </div>
//                       <div class="form-check">
//                         <input
//                           class="form-check-input"
//                           type="checkbox"
//                           id="inlineCheckbox3"
//                           value="option3"
//                         />
//                         <label class="form-check-label" for="inlineCheckbox3">
//                           Startups
//                         </label>
//                       </div>
//                       <div class="form-check">
//                         <input
//                           class="form-check-input"
//                           type="checkbox"
//                           id="inlineCheckbox3"
//                           value="option3"
//                         />
//                         <label class="form-check-label" for="inlineCheckbox3">
//                           Portfolio Management Services
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="mt-4">
//                     <label>
//                       Why are you opting for Invoice Discounting in movies?
//                     </label>
//                     <div className="mt-1">
//                       <div class="form-check">
//                         <input
//                           class="form-check-input"
//                           type="checkbox"
//                           id="inlineCheckbox1"
//                           value="option1"
//                         />
//                         <label class="form-check-label" for="inlineCheckbox1">
//                           High Return - P.A
//                         </label>
//                       </div>
//                       <div class="form-check">
//                         <input
//                           class="form-check-input"
//                           type="checkbox"
//                           id="inlineCheckbox2"
//                           value="option2"
//                         />
//                         <label class="form-check-label" for="inlineCheckbox2">
//                           Secured – Confirmed cash flows from top OTTs
//                         </label>
//                       </div>
//                       <div class="form-check">
//                         <input
//                           class="form-check-input"
//                           type="checkbox"
//                           id="inlineCheckbox3"
//                           value="option3"
//                         />
//                         <label class="form-check-label" for="inlineCheckbox3">
//                           Short Term – Receive return within 1-12 months
//                         </label>
//                       </div>
//                       <div class="form-check">
//                         <input
//                           class="form-check-input"
//                           type="checkbox"
//                           id="inlineCheckbox3"
//                           value="option3"
//                         />
//                         <label class="form-check-label" for="inlineCheckbox3">
//                           Diversification
//                         </label>
//                       </div>
//                       <div class="form-check">
//                         <input
//                           class="form-check-input"
//                           type="checkbox"
//                           id="inlineCheckbox3"
//                           value="option3"
//                         />
//                         <label class="form-check-label" for="inlineCheckbox3">
//                           Other
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="mt-4">
//                     <label>Referral Code (Optional)</label>
//                     <input
//                       type="text"
//                       className="form-control mt-1"
//                       placeholder="Referral Code"
//                     />
//                   </div>
//                   <Link
//                     to="/c-dashboard"
//                     class="btn btn-primary btn-lg mt-4 w-100 rounded-3 fs-5 text-dark"
//                   >
//                     Register Now
//                   </Link>
//                 </div>
//               </div>

//               {/* <div className="m-5">
//                 <h2 className="lh-1 mb-2">
//                   Create Account : Finish Your Registration Process
//                 </h2>
//                 <div className="vh-60 overflow-scroll">
//                   <div className="mt-4">
//                     <label>Company Name</label>
//                     <input
//                       type="text"
//                       className="form-control mt-1"
//                       placeholder="Company Name"
//                     />
//                   </div>
//                   <div className="mt-3">
//                     <label>Company Type</label>
//                     <select className="form-control mt-1" name="">
//                       <option>Private Limited</option>
//                       <option>LLP</option>
//                       <option>Partnership</option>
//                       <option>Proprietorship</option>
//                     </select>
//                   </div>
//                   <div className="mt-3">
//                     <label>Upload Agreements</label>
//                     <input type="file" className="form-control mt-1" />
//                   </div>
//                   <div className="mt-3">
//                     <label>Declaration of Work Done</label>
//                     <input type="file" className="form-control mt-1" />
//                   </div>
//                   <div className="mt-3">
//                     <label>Referral Code (Optional)</label>
//                     <input
//                       type="text"
//                       className="form-control mt-1"
//                       placeholder="Referral Code"
//                     />
//                   </div>
//                   <Link
//                     to="/i-dashboard"
//                     class="btn btn-primary btn-lg mt-4 w-100 rounded-3 fs-5 text-dark"
//                   >
//                     Register Now
//                   </Link>
//                 </div>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    occupation: "",
    participatedIn: [],
    reasonsForInvoiceDiscounting: [],
    referralCode: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked
          ? [...prevData[name], value]
          : prevData[name].filter((item) => item !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.put(
        `http://localhost:8501/api/v1/users/complete-profile/${userId}`,
        formData
      );

      if (response.data.token) {
        // Store the token in localStorage
        localStorage.setItem("authToken", response.data.token);

        alert(response.data.message);
        navigate("/dashboard"); // Navigate to the dashboard
      }
    } catch (error) {
      console.error("Error completing profile:", error);
      setMessage("Error completing profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-bg vh-100 vw-100">
      <div className="container h-100 w-100 d-flex align-items-center">
        <div className="col-lg-5 col-md-7 col-12 offset-lg-7 offset-md-5">
          <div className="p-5 rounded-4 bg-white">
            <h2 className="lh-1 mb-2">Complete Your Profile</h2>
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control mt-1"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mt-3">
                <label>What is your occupation?</label>
                <select
                  name="occupation"
                  className="form-control mt-1"
                  value={formData.occupation}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Occupation</option>
                  <option value="Salaried">Salaried</option>
                  <option value="Self-employed">Self-employed</option>
                  <option value="Professional">Professional</option>
                  <option value="Retired">Retired</option>
                </select>
              </div>

              <div className="mt-4">
                <label>Have you participated in any of these?</label>
                {[
                  "Invoice Discounting",
                  "Real Estate",
                  "Stocks/Market Funds",
                  "Bonds/FD/RD",
                  "AIF",
                  "Startups",
                  "Portfolio Management Services",
                ].map((option, idx) => (
                  <div key={idx} className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`participatedIn${idx}`}
                      name="participatedIn"
                      value={option}
                      checked={formData.participatedIn.includes(option)}
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`participatedIn${idx}`}
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <label>Why are you opting for Invoice Discounting?</label>
                {[
                  "High Return - P.A",
                  "Secured – Confirmed cash flows from top OTTs",
                  "Short Term – Receive return within 1-12 months",
                  "Diversification",
                  "Other",
                ].map((reason, idx) => (
                  <div key={idx} className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`reasonForInvoiceDiscounting${idx}`}
                      name="reasonsForInvoiceDiscounting"
                      value={reason}
                      checked={formData.reasonsForInvoiceDiscounting.includes(
                        reason
                      )}
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`reasonForInvoiceDiscounting${idx}`}
                    >
                      {reason}
                    </label>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <label>Referral Code (Optional)</label>
                <input
                  type="text"
                  name="referralCode"
                  className="form-control mt-1"
                  value={formData.referralCode}
                  onChange={handleChange}
                  placeholder="Referral Code"
                />
              </div>

              {message && (
                <div className="alert alert-info mt-3">{message}</div>
              )}

              <button
                type="submit"
                className="btn btn-primary btn-lg mt-4 w-100 rounded-3 fs-5 text-dark"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Complete Profile"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
