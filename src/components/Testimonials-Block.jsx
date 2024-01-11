import React from "react";

import SarahL from "../assets/icons/test-icon-01.svg"
import JasonM from "../assets/icons/test-icon-02.svg"
import EmilyR from "../assets/icons/test-icon-03.svg"
import MichaelK from "../assets/icons/test-icon-04.svg"


function Textimonials() {
  return (
    <article
      name="testimonials"
      className="flex-col flex gap-[60px] xl:gap-[80px] mx-24 xl:mx-40 mt-[100px]"
    >
      <div className="flex justify-between   gap-60 ">
        <div>
          <div className=" font-semibold text-4xl xl:text-[48px]/[72px]">
            Our Testimonials
          </div>
          <div>
            <p className="gray-font text-base xl:text-lg ">
             Thousands of students and graduates are happy with our courses, instructors, and tech suport, well, let them speak for themself.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-end whitespace-nowrap">
          <div className="px-5 py-3 xl:py-5 xl:px-6">
            <a className="text-lg">View All</a>
          </div>
        </div>
      </div>

      <div className=" grid-rows-2 gap-5 grid grid-cols-2">
        <div className="col-span-1 flex-col flex w-full ">
          <div className="p-10 xl:p-[50px]">
            <div>
              <p className="gray-font text-base xl:text-lg">
                The web design course provided a solid foundation for me. The
                instructors were knowledgeable and supportive, and the
                interactive learning environment was engaging. I highly
                recommend it!
              </p>
            </div>
          </div>
          <div className="flex justify-between px-10 py-[24px] xl:py-[30px] xl:px-[50px]">
            <div className="flex gap-2.5">
              <div>
                <img
                  className=" w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] rounded-lg "
                  src={SarahL}
                  alt=""
                  
                />
              </div>
              <div className="flex justify-center items-center">
                <a href="#" className="dark-gray font-semibold  text-base xl:text-lg">
                  Sarah L
                </a>
              </div>
            </div>
            <div className="px-4 py-3.5 xl:px-[24px] xl:py-[18px]">
              <button>
                <p className="font-medium">Read Full Story</p>
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex-col flex w-full ">
          <div className="p-10 xl:p-[50px]">
            <div>
              <p className="gray-font text-base xl:text-lg">
                The UI/UX design course exceeded my expectations. The
                instructor`&apos;`s expertise and practical assignments helped me
                improve my design skills. I feel more confident in my career
                now. Thank you!
              </p>
            </div>
          </div>
          <div className="flex justify-between px-10 py-[24px] xl:py-[30px] xl:px-[50px]">
            <div className="flex gap-2.5">
              <div>
                <img
                  className=" w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] rounded-lg "
                  src={JasonM}
                  alt=""
                  
                />
              </div>
              <div className="flex justify-center items-center">
                <a href="#" className="dark-gray font-semibold  text-base xl:text-lg">
                  Jason M
                </a>
              </div>
            </div>
            <div className="px-4 py-3.5 xl:px-[24px] xl:py-[18px]">
              <button>
                <p className="font-medium">Read Full Story</p>
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex-col flex w-full ">
          <div className="p-10 xl:p-[50px]">
            <div>
              <p className="gray-font text-base xl:text-lg">
                The mobile app development course was fantastic! The
                step-by-step tutorials and hands-on projects helped me grasp the
                concepts easily. I`&apos;`m now building my own app. Great course!
              </p>
            </div>
          </div>
          <div className="flex justify-between px-10 py-[24px] xl:py-[30px] xl:px-[50px]">
            <div className="flex gap-2.5">
              <div>
                <img
                  className=" w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] rounded-lg "
                  src={EmilyR}
                  alt=""
                  
                />
              </div>
              <div className="flex justify-center items-center">
                <a href="#" className="dark-gray font-semibold text-base xl:text-lg">
                  Emily R
                </a>
              </div>
            </div>
            <div className="px-4 py-3.5 xl:px-[24px] xl:py-[18px]">
              <button>
                <p className="font-medium">Read Full Story</p>
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex-col justify-between flex w-full ">
          <div className="p-10 xl:p-[50px]">
            <div>
              <p className="gray-font text-base xl:text-lg">
                I enrolled in the graphic design course as a beginner, and it
                was the perfect starting point. The instructor`&apos;`s guidance and
                feedback improved my design abilities significantly. I`&apos;`m
                grateful for this course!
              </p>
            </div>
          </div>
          <div className="flex justify-between px-10 py-[24px] xl:py-[30px] xl:px-[50px]">
            <div className="flex gap-2.5">
              <div>
                <img
                  className=" w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] rounded-lg "
                  src={MichaelK}
                  alt=""
                 
                />
              </div>
              <div className="flex justify-center items-center">
                <a href="#" className="dark-gray font-semibold text-base xl:text-lg">
                  Michael K
                </a>
              </div>
            </div>
            <div className="px-4 py-3.5 xl:px-[24px] xl:py-[18px]">
              <button>
                <p className="font-medium">Read Full Story</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}


export default Textimonials