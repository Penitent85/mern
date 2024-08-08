import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, password, confirmPassword } = formData;
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
          <FaUser /> Register
        </h1>
        <p>Please Create Your Account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              className="form-control"
              onChange={(e) => onChange(e)}
            />
          </div>
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
            <input
              type="password"
              placeholder="Confirm Your Password"
              name="confirmPassword"
              value={confirmPassword}
              className="form-control"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Register
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
