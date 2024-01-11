import React from "react";

import ArrowIcon from "../assets/icons/plaque-arrow.svg"


function BenefitsBlock() {
return (
  <article className="flex-col  flex gap-14 xl:gap-20  mx-24  xl:mx-40  mt-24">
    <section className="flex justify-between gap-60 ">
      <article>
        <header>
          <div ><h1 className=" font-semibold text-4xl xl:text-5xl/[72px] ">Benefits</h1></div>
        </header>
        <section>
          <p className="lightest-gray-font text-base xl:text-lg/[27px]">
            Thousands of students already trusting us in their learning journey, these are the benefits that they are enjoying the most. 
          </p>
        </section>
      </article>

      <div className="flex justify-center items-end whitespace-nowrap ">
        <div className="  px-5 py-3 xl:py-5 xl:px-6">
          <a  href="#" className=" text-lg ">View All</a>
        </div>
      </div>
    </section>

    <div className="grid-rows-2 grid grid-cols-3">
      <div className="flex-col flex justify-between gap-10 xl:gap-[50px] p-10 xl:p-[50px]">
        <div className="flex-col flex gap-10 xl:gap-[50px]">
          <div className="flex justify-end"><h1 className="text-6xl  font-bold xl:text-[80px]">01</h1></div>

          <div className="flex-col flex">
            <header>
              <div className="flex">
                <p className="text-xl xl:text-2xl/[36px] font-semibold dark-gray leading-8">Flexible Learning Schedule</p>
              </div>
            </header>

            <div>
              <p className="font-medium text-base xl:text-lg gray-font">
                Fit your coursework around your existing commitments and obligations.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <a href="#" className=" p-3.5  xl:p-5  w-14 h-14 xl:w-[74px] xl:h-[74px]
          flex justify-center items-center">
            <img className=" w-[26px] h-[26px] xl:w-[34px] xl:h-[34px]" src={ArrowIcon}/>
          </a>
        </div>
      </div>

      <div className="col-span-1 flex-col justify-between flex w-full gap-10 xl:gap-[50px] p-10 xl:p-[50px]">
        <div className="flex-col flex gap-10 xl:gap-[50px]">
          <div className="flex justify-end"><h1 className="text-6xl font-bold xl:text-[80px]">02</h1></div>

          <div className="flex-col flex">
            <header>
              <div className="flex">
                <p className="text-xl xl:text-2xl/[36px] font-semibold dark-gray leading-8">Expert Instruction</p>
              </div>
            </header>

            <div className="">
              <p className="font-medium text-base xl:text-lg gray-font">
                Learn from industry experts who have hands-on experience in design and development.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <a href="#" className=" p-3.5  xl:p-5  w-14 h-14 xl:w-[74px] xl:h-[74px]
          flex justify-center items-center">
            <img className=" w-[26px] h-[26px] xl:w-[34px] xl:h-[34px]" src={ArrowIcon}/>
          </a>
        </div>
      </div>

      <div className="flex-col flex justify-between gap-10 p-10 xl:gap-[50px] xl:p-[50px]">
        <div className="flex-col flex gap-10 xl:gap-[50px]">
          <div className="flex justify-end"><h1 className="text-6xl font-bold xl:text-[80px]">03</h1></div>

          <div className="flex-col flex">
            <div className="flex">
              <p className="text-xl xl:text-2xl/[36px] font-semibold dark-gray leading-8 gray-font">
                Diverse Course Offerings
              </p>
            </div>

            <div className="">
              <p className="font-medium text-base xl:text-lg gray-font">
                Explore a wide range of design and development courses covering various topics.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <a href="#" className=" p-3.5  xl:p-5  w-14 h-14 xl:w-[74px] xl:h-[74px]
          flex justify-center items-center">
            <img className=" w-[26px] h-[26px] xl:w-[34px] xl:h-[34px]" src={ArrowIcon}/>
          </a>
        </div>
      </div>

      <div className="flex-col flex justify-between gap-10 xl:gap-[50px] p-10 xl:p-[50px]">
        <div className="flex-col flex gap-10 xl:gap-[50px]">
          <div className="flex justify-end"><h1 className="text-6xl font-bold xl:text-[80px]">04</h1></div>

          <div className="flex-col flex">
            <div className="flex">
              <p className="text-xl xl:text-2xl/[36px] font-semibold dark-gray leading-8 gray-font">Updated Curriculum</p>
            </div>

            <div className="">
              <p className="font-medium text-base xl:text-lg gray-font">
                Access courses with up-to-date content reflecting the latest trends and industry
                practices.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <a href="#" className=" p-3.5  xl:p-5  w-14 h-14 xl:w-[74px] xl:h-[74px]
          flex justify-center items-center">
            <img className=" w-[26px] h-[26px] xl:w-[34px] xl:h-[34px]" src={ArrowIcon} />
          </a>
        </div>
      </div>

      <div className="flex-col flex justify-between gap-10 xl:gap-[50px] p-10 xl:p-[50px]">
        <div className="flex-col flex gap-10 xl:gap-[50px]">
          <div className="flex justify-end"><h1 className="text-6xl font-bold xl:text-[80px]">05</h1></div>

          <div className="flex-col flex">
            <div className="flex">
              <p className="text-xl xl:text-2xl/[36px] font-semibold dark-gray leading-8">
                Practical Projects and Assignments
              </p>
            </div>

            <div className="">
              <p className="font-medium text-base xl:text-lg gray-font">
                Develop a portfolio showcasing your skills and abilities to potential employers.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <a href="#" className=" p-3.5  xl:p-5  w-14 h-14 xl:w-[74px] xl:h-[74px]
          flex justify-center items-center">
            <img className=" w-[26px] h-[26px] xl:w-[34px] xl:h-[34px]" src={ArrowIcon} />
          </a>
        </div>
      </div>

      <div className="flex-col flex justify-between gap-10 xl:gap-[50px] p-10 xl:p-[50px]">
        <div className="flex-col flex gap-10 xl:gap-[50px]">
          <div className="flex justify-end"><h1 className="text-6xl font-bold xl:text-[80px]">06</h1></div>

          <div className="flex-col flex">
            <div className="flex">
              <p className="text-xl xl:text-2xl/[36px] font-semibold dark-gray leading-8">
                Interactive Learning Environment
              </p>
            </div>

            <div className="">
              <p className="font-medium text-base xl:text-lg gray-font">
                Collaborate with fellow learners, exchanging ideas and feedback to enhance your
                understanding.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <a href="#" className=" p-3.5  xl:p-5  w-14 h-14 xl:w-[74px] xl:h-[74px]
          flex justify-center items-center">
            <img className=" w-[26px] h-[26px] xl:w-[34px] xl:h-[34px]" src={ArrowIcon} />
          </a>
        </div>
      </div>
    </div>
  </article>
)  
}

export default BenefitsBlock