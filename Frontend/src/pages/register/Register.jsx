import React from "react";

const Register = () => {
  return (
    <div className="container">
      <div className="col-md-5"> 
        <h1>Register a user</h1>

        <form action="">
          <div className="form-group">
            <label htmlFor="name">Firstname</label>
            <input type="text" name="name" id="name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input
              type="password"
              name="password2"
              id="password2"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3 w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
