import React from "react";

const Register = () => {
  return (
    <div className="bg-blue-800">
         <div className="p-2 flex items-center justify-center">
        <img className="w-50 h-20 absolute top-0 items-center mt-4 ml-6" src="./logo.png" alt="Nexus Logo" />
      </div>
    <div className="h-screen flex flex-col">
     
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-white p-4 mb-20 rounded shadow-md">
        <h2 className="text-3xl font-bold text-blue-800 text-center">Register</h2>

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
    </div>
    </div>
  );
};

export default Register;
