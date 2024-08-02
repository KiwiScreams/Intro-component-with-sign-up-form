const Form = () => {
  return (
    <>
      <div className="form-section">
        <form>
          <div className="input-box">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="First name"
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last name"
            />
          </div>
          <div className="input-box">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
            />
          </div>
          <div className="input-box">
            <input type="password" name="password" id="password" placeholder="password"/>
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
