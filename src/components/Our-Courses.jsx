import React from "react";


import WebDesFundPlaque from "../assets/imgs/plaque-1.png"
import UIUXPlaque from "../assets/imgs/plaque-2.png"
import MobilePlaque from "../assets/imgs/plaque-3.png"
import GraphDesPlaque from "../assets/imgs/plaque-4.png"
import WebDesPlaque from "../assets/imgs/plaque-5.png"
import JSPlaque from "../assets/imgs/plaque-6.png"



function OurCourses()
{ return (
  <article name="courses" className="flex-col flex gap-[60px] xl:gap-20 mx-24 xl:mx-40 mt-[100px]">
    <div className="flex justify-between gap-60">
      <div>
        <div className="linehight font-semibold text-4xl/[57px] xl:text-5xl/[72px]">Our Courses</div>
        <div>
          <p className="lightest-gray-font text-base xl:text-lg/[27px]">
          Dosens of courses, hundreds of professional instructors, choose you favorite, and we will make you experience as joyfull as possible. 
          </p>
        </div>
      </div>

      <div className="flex justify-center items-end whitespace-nowrap">
        <div className="px-5 py-3 xl:py-5 xl:px-6">
          <a className="text-lg">View All</a>
        </div>
      </div>
    </div>

    <div className="grid-rows-3 gap-5 grid grid-cols-2">
      <div className="flex-col flex w-full justify-between p-10 xl:p-[50px]">
        <div className="flex-col flex gap-6 xl:gap-[30px]">
          <div className=""><img className="w-full" src={WebDesFundPlaque} /></div>

          <div className="flex justify-between">
            <div className="flex">
              <p className="gray-font px-3 py-2">4 weeks</p>
              <p className="gray-font px-3 py-2">Beginner</p>
            </div>

            <div className="flex justify-center items-center">
              <p className="font-medium text-base">By John Smith</p>
            </div>
          </div>

          <div  className="flex flex-col gap-[14px]">
            <p className="text-xl xl:text-2xl leading-7 font-semibold">Web Design Fundamentals</p>

            <p className="gray-font xl:text-lg">
              Learn the fundamentals of web design, including HTML, CSS, and responsive design
              principles. Develop the skills to create visually appealing and user-friendly
              websites.
            </p>
          </div>
        </div>

        <div className="flex h-12"><button className="w-full h-full">Get It Now</button></div>
      </div>

      <div className="flex-col flex justify-between p-10 xl:p-[50px]">
        <div className="flex-col flex gap-6 xl:gap-[30px]">
          <div className=""><img className="w-full" src={UIUXPlaque} /></div>

          <div className="flex justify-between">
            <div className="flex">
              <p className="gray-font px-3 py-2">6 weeks</p>
              <p className="gray-font px-3 py-2">Intermediate</p>
            </div>

            <div className="flex justify-center items-center">
              <p className="font-medium text-base">By Emily Johnson</p>
            </div>
          </div>

          <div  className="flex flex-col gap-[14px]">
            <p className="text-xl xl:text-2xl leading-7 font-semibold">UI/UX Design</p>
            <p className="gray-font xl:text-lg">
              Master the art of creating intuitive user interfaces (UI) and enhancing user
              experiences (UX). Learn design principles, wireframing, prototyping, and usability
              testing techniques.
            </p>
          </div>
        </div>

        <div className="flex h-12"><button className="w-full h-full">Get It Now</button></div>
      </div>

      <div className="flex-col flex w-full justify-between p-10 xl:p-[50px]">
        <div className="flex-col flex gap-6 xl:gap-[30px]">
          <div className=""><img className="w-full" src={MobilePlaque}/></div>

          <div className="flex justify-between">
            <div className="flex">
              <p className="gray-font px-3 py-2">8 Weeks</p>
              <p className="gray-font px-3 py-2">Intermediate</p>
            </div>

            <div className="flex justify-center items-center">
              <p className="font-medium text-base">By David Brown</p>
            </div>
          </div>

          <div  className="flex flex-col gap-[14px]">
            <p className="text-xl xl:text-2xl leading-7 font-semibold">Mobile App Development</p>
            <p className="gray-font xl:text-lg">
              Dive into the world of mobile app development. Learn to build native iOS and Android
              applications using industry-leading frameworks like Swift and Kotlin.
            </p>
          </div>
        </div>

        <div className="flex h-12"><button className="w-full h-full">Get It Now</button></div>
      </div>

      <div className="flex-col flex justify-between p-10 xl:p-[50px]">
        <div className="flex-col flex gap-6 xl:gap-[30px]">
          <div className=""><img className="w-full" src={GraphDesPlaque}/></div>

          <div className="flex justify-between">
            <div className="flex">
              <p className="gray-font px-3 py-2">10 Weeks</p>
              <p className="gray-font px-3 py-2">Beginner</p>
            </div>

            <div className="flex justify-center items-center">
              <p className="font-medium text-base">By Sarah Thompson</p>
            </div>
          </div>

          <div className="flex flex-col gap-[14px]">
            <p className="text-xl xl:text-2xl leading-7 font-semibold">Graphic Design for Beginners</p>
            <p className="gray-font xl:text-lg">
              Discover the fundamentals of graphic design, including typography, color theory,
              layout design, and image manipulation techniques. Create visually stunning designs for
              print and digital media.
            </p>
          </div>
        </div>

        <div className="flex h-12"><button className="w-full h-full">Get It Now</button></div>
      </div>

      <div className="flex-col flex justify-between p-10 xl:p-[50px]">
        <div className="flex-col flex gap-6 xl:gap-[30px]">
          <div className=""><img className="w-full" src={WebDesPlaque} /></div>

          <div className="flex justify-between">
            <div className="flex">
              <p className="gray-font px-3 py-2">10 Weeks</p>
              <p className="gray-font px-3 py-2">Intermediate</p>
            </div>

            <div className="flex justify-center items-center">
              <p className="font-medium text-base">By Michael Adams</p>
            </div>
          </div>

          <div className="flex flex-col gap-[14px]">
            <p className="text-xl xl:text-2xl leading-7 font-semibold">Web Design Fundamentals</p>
            <p className="gray-font xl:text-lg">
              Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and
              popular frameworks like Bootstrap and React. Build interactive and responsive
              websites.
            </p>
          </div>
        </div>

        <div className="flex h-12"><button className="w-full h-full">Get It Now</button></div>
      </div>

      <div className="flex-col flex w-full gap-[30px] justify-between p-10 xl:p-[50px]">
        <div className="flex-col flex gap-6 xl:gap-[30px]">
          <div className=""><img className="w-full" src={JSPlaque} /></div>

          <div className="flex justify-between">
            <div className="flex">
              <p className="gray-font px-3 py-2">6 Weeks</p>
              <p className="gray-font px-3 py-2">Advance</p>
            </div>

            <div className="flex justify-center items-center">
              <p className="font-medium text-base">By Jennifer Wilson</p>
            </div>
          </div>

          <div  className="flex flex-col gap-[14px]">
            <p className="text-xl xl:text-2xl leading-7 font-semibold">Advanced JavaScript</p>
            <p className="gray-font xl:text-lg">
              Take your JavaScript skills to the next level. Explore advanced concepts like
              closures, prototypes, asynchronous programming, and ES6 features. Build complex
              applications with confidence.
            </p>
          </div>
        </div>

        <div className="flex h-12"><button className="w-full h-full">Get It Now</button></div>
      </div>
    </div>
  </article>
) 

}

export default OurCourses