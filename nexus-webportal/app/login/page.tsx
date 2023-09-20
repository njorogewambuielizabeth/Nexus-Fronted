import React from "react";
import Footer from "../footer/page";

const Login = () => {
  return (
    <div className="bg-gray-200">
    <div className="h-screen  flex flex-col">
     
      <div className="flex-1 mt-20 flex justify-center items-center">
        <div className="bg-white p-9 mb-20 rounded shadow-md">
        <img className="w-50 h-20 top-0 items-center mt-0 ml-20 justify-center" src="./niu.png" />


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
           
            <button
  className="w-1/2 bg-blue-800 flex justify-center text-white p-3 rounded-full hover:bg-blue-700 text-xl font-bold mx-auto"
  type="submit"
>
Login
</button>
         
<button className="w-1/2 flex bg-blue-200 mt-5 justify-center text-black p-3 rounded-full mx-auto"
  type="submit"
>
 <img className="w-5 mr-1 " src="./GoogleOutlined.png"/>  Continue with Google
</button>

          </form>
        </div>
      </div>
    
    </div>
    <Footer/>
    </div>
  );
};

export default Login;
