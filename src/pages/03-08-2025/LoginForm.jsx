import { useState } from "react";
import "./LoginForm.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleEvent = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};

    if (!loginData.email) {
      errors.email = "email is required";
    }
    if (!loginData.password) {
      errors.password = "password is required";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      alert("Form submitted successfully");
      setLoginData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            name="email"
            type="email"
            value={loginData.email}
            onChange={handleEvent}
          />
          {formErrors.email && (
            <span className="errors">{formErrors.email}</span>
          )}
        </div>

        <div className="form-group password">
          <label>Password:</label>
          <div className="password-wrapper">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={loginData.password}
              onChange={handleEvent}
            />
            {showPassword ? (
              <FaEyeSlash
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              ></FaEyeSlash>
            ) : (
              <FaEye
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
          {formErrors.password && (
            <span className="errors">{formErrors.password}</span>
          )}
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;
