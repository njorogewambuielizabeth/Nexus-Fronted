import React from "react";
import Footer from "../footer/page";

const Register = () => {
  return (
    <div>
    <div className="h-screen bg-gray-200 flex flex-col">
     
      <div className="mt-10 flex justify-center items-center">
        <div className="bg-white p-9 mb-20 rounded shadow-md">
        <img className="w-50 h-20 top-0 items-center mt-0 ml-20 justify-center" src="./niu.png" />


            <br/>
     
          <form className="max-w-md">
            <input
              className="w-full mb-4 p-2 border rounded"
              type="text"
              placeholder="Name"
            />
            <input
              className="w-full mb-4 p-2 border rounded"
              type="text"
              placeholder="Email"
            />
            <input
              className="w-full mb-4 p-2 border rounded"
              type="text"
              placeholder="Phone Number"
            />
            <input
              className="w-full mb-4 p-2 border rounded"
              type="text"
              placeholder="City"
            />
            <input
              className="w-full mb-4 p-2 border rounded"
              type="password"
              placeholder="Password"
            />
            <input
              className="w-full mb-4 p-2 border rounded"
              type="password"
              placeholder="Confirm Password"
            />
            <p className="text-center">Already a member? <a className="text-blue-500" href="#register">Login</a></p>
            <br/>
            <button
  className="w-1/2 bg-blue-800 flex justify-center text-white p-3 rounded-full hover:bg-blue-700 text-xl font-bold mx-auto"
  type="submit"
>
  Sign up
</button>

          </form>
        </div>
      </div>
      <Footer/>
    </div>
   
    </div>
  );
};

export default Register;
