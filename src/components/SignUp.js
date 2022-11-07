import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(AuthContext)
   const handlesignUp=event=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,password)

     
    createUser(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
    })
    .catch(err => console.error(err));
   }

    return (
        <div className="hero w-full py-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img src='https://img.freepik.com/premium-vector/enter-account-registration-verification-number_18660-2989.jpg?w=996' alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handlesignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                  <input className="btn bg-red-500 border-none" type="submit" value="Sign Up" />
               
              </div>
            </form>
            <p className="text-center">New to Genius Car <Link className="text-red-500" to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;