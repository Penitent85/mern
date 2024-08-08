import { useEffect, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
  
    email: "",
    password: "",
  
  });
  const {  email, password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value, 
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {}, []);
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login 
        </h1>
        <p> Login and start settings goals</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={email}
              className="form-control"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              value={password}
              className="form-control"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
