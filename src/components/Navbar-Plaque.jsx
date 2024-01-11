import React from "react";


function NavBarTop() {
  return (
    <nav className=" h-fit mx-5   pt-5 pb-6 px-32 flex justify-between items-center xl:mx-7 ">
      <div className="flex justify-between  w-full   align-middle">
        <div className="flex justify-center  h-11 gap-12 items-center">
          <div className="bg-cont flex justify-center w-11 align-middle rounded-lg p-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="33"
              viewBox="0 0 34 33"
              fill="none"
            >
              <path
                d="M4.09961 30.0802L12.9268 21.2531H21.7539V12.4259L30.5811 21.2531L21.7539 30.0802H4.09961Z"
                fill="white"
              />
              <path
                d="M4.09961 12.4259L12.9268 21.2531V12.4259H21.7539L30.5811 3.59877H12.9268L4.09961 12.4259Z"
                fill="white"
              />
            </svg>
          </div>

          <section className="flex justify-center text-sm gap-6 w-auto">
            <a href="#" className="w-auto px-5 py-3 h-11 xl:text-lg xl:leading-7">
              <p>Home</p>
            </a>
            <a href="#" className="w-auto py-3 flex items-center xl:text-lg xl:leading-7">
              <p>Courses</p>
            </a>
            <a href="#" className="w-auto py-3 flex items-center xl:text-lg xl:leading-7">
              <p>About Us</p>
            </a>
            <a href="#" className="w-auto py-3 flex items-center xl:text-lg xl:leading-7">
              <p>Pricing</p>
            </a>
            <a href="#" className="w-auto py-3 flex items-center xl:text-lg xl:leading-7">
              <p>Contact</p>
            </a>
          </section>
        </div>

        <div className="flex justify-center h-fit gap-7 w-fit align-middle">
          <div className="w-13 flex justify-center items-center xl:text-lg xl:leading-7">
            <a href="#">Sign Up</a>
          </div>
          <div className="bg-cont text-white rounded-md flex justify-center w-auto items-center py-3 px-6 xl:py-3.5 xl:px-9 xl:text-lg xl:leading-7">
            <a href="#">Login</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBarTop;
