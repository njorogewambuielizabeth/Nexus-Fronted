import React from "react";

const Login = () => {
  return (
    <div className="bg-blue-800">
         <div className="p-2">
        <img className="w-20 h-20 absolute top-0 items-center mt-4 ml-4" src="./nexus.png" alt="Nexus Logo" />
      </div>
    <div className="h-screen flex flex-col">
     
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-3xl font-bold text-blue-800 text-center">Login</h2>
        <br/>
        <p className="text-center text-3l"> We are excited to see you again</p>

            <br/>
     
          <form className="max-w-md">
            <input
              className="w-full mb-4 p-2 border rounded"
              type="text"
              placeholder="Email"
            />
        
            
            <input
              className="w-full mb-4 p-2 border rounded"
              type="password"
              placeholder="Password"
            />
           
            <p className="text-center">Remember Me</p>
            <br/>
            <button
  className="w-1/2 bg-blue-800 flex justify-center text-white p-3 rounded-full hover:bg-blue-700 text-xl font-bold mx-auto"
  type="submit"
>
  Login
</button>

          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
