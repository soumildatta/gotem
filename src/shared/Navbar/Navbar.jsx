import React from "react";
import logo from '../logo_v1.png'


const Navbar = () => {
  return (
    <div className="relative bg-primaryBlue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="flex justify-center items-center">
              <span className="sr-only">Workflow</span>
              <img class="mx-auto h-14 w-auto" src={logo} alt="Workflow"/>
              <h1 className="text-white font-medium text-3xl ml-4">GOTEM</h1>
            </a>
          </div>
          <div className="md:flex items-center justify-end md:flex-1 lg:w-0 text-white">
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-white hover:text-gray-200"
            >
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-400 hover:bg-green-500"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
