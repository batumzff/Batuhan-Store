import React from "react";
import { useNavigate } from "react-router-dom";
import notFound from "../assets/3793096.jpg";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-center flex-col h-screen md:px-8">
        <div>
          <img src={notFound} alt="404 not found" />
        </div>
        <div className="max-w-lg mx-auto space-y-3 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="block py-2 px-4 text-white font-medium bg-orange-500 duration-150 hover:bg-orange-600 active:bg-indigo-700 rounded-lg"
            >
              Go Back
            </button>
            <button
              onClick={() => navigate("/dashboard")}
              className="block py-2 px-4 text-gray-700 hover:bg-orange-600  hover:text-white font-medium duration-150 active:bg-gray-100 border rounded-lg"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;