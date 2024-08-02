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
  const password_regex = /^(?=.*[a-zA-Z]).{8,32}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!name_regex.test(firstname)) {
      errors.firstname = {
        icon: <i className="fa-solid fa-circle-exclamation"></i>,
        message: "First Name cannot be empty",
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
        message: "Last Name cannot be empty",
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
        message: "Looks like this is not an email",
      };
    } else {
      errors.email = {
        icon: <i className=""></i>,
        message: "",
      };
    }
    if (!password_regex.test(password)) {
        errors.password = {
          icon: <i className="fa-solid fa-circle-exclamation"></i>,
          message: "Password cannot be empty",
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
        <div className="try-free">
            <p><strong>Try it free 7</strong> days then $20/mo. thereafter</p>
        </div>
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
                {errors.firstname.icon} <p className="error-message">{errors.firstname.message}</p>
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
                {errors.lastname.icon} <p className="error-message">{errors.lastname.message}</p>
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
                {errors.email.icon} <p className="error-message">{errors.email.message}</p>
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
                {errors.password.icon} <p className="error-message">{errors.password.message}</p>
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
