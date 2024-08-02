import { useState } from "react";
const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [errors, setErrors] = useState({});
  const [successpassword, setSuccesspassword] = useState("");
  const name_regex = /^[a-zA-Z][a-zA-Z0-_]{3,23}$/;
  const email_regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!name_regex.test(firstname)) {
      errors.firstname = {
        icon: <i className="fa-solid fa-circle-exclamation"></i>,
        message: "Invalid first name",
      };
    } else {
      errors.firstname = {
        icon: <i className=""></i>,
        message: "",
      };
    }
    if (!name_regex.test(lastname)) {
      errors.lastname = {
        icon: <i className="fa-solid fa-circle-exclamation"></i>,
        message: "Invalid last name",
      };
    } else {
      errors.lastname = {
        icon: <i className=""></i>,
        message: "",
      };
    }
    if (!email_regex.test(email)) {
      errors.email = {
        icon: <i className="fa-solid fa-circle-exclamation"></i>,
        message: "Invalid email address",
      };
    } else {
      errors.email = {
        icon: <i className=""></i>,
        message: "",
      };
    }
    if (password.trim() === "") {
      errors.password = {
        icon: <i className="fa-solid fa-circle-exclamation"></i>,
        message: "Password is required",
      };
    } else {
      errors.password = {
        icon: <i className=""></i>,
        message: "",
      };
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      setFirstname("");
      setLastname("");
      setEmail("");
      setpassword("");
    }
  };
  return (
    <>
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className={`${
                errors.firstname &&
                errors.firstname.icon.props.className ===
                  "fa-solid fa-circle-exclamation"
                  ? "invalid"
                  : ""
              }`}
            />
            {errors.firstname && (
              <div className="error">
                {errors.firstname.icon} {errors.firstname.message}
              </div>
            )}
          </div>
          <div className="input-box">
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last name"
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
              className={`${
                errors.lastname &&
                errors.lastname.icon.props.className ===
                  "fa-solid fa-circle-exclamation"
                  ? "invalid"
                  : ""
              }`}
            />
            {errors.lastname && (
              <div className="error">
                {errors.lastname.icon} {errors.lastname.message}
              </div>
            )}
          </div>
          <div className="input-box">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${
                errors.email &&
                errors.email.icon.props.className ===
                  "fa-solid fa-circle-exclamation"
                  ? "invalid"
                  : ""
              }`}
            />
            {errors.email && (
              <div className="error">
                {errors.email.icon} {errors.email.message}
              </div>
            )}
          </div>
          <div className="input-box">
            <input
              name="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className={`${
                errors.password &&
                errors.password.icon.props.className ===
                  "fa-solid fa-circle-exclamation"
                  ? "invalid"
                  : ""
              }`}
            />
            {errors.password && (
              <div className="error">
                {errors.password.icon} {errors.password.message}
              </div>
            )}
          </div>
          <button>CLAIM YOUR FREE TRIAL</button>
          <p className="terms">
            <span>By clicking the button, you are agreeing to our</span>{" "}
            <span>Terms and Services</span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Form;
