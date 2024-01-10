import { useState } from "react";

function Faq() {
  const [toggle, toggleSwitch] = useState("closed");
  function buttonHandle(event) {
    if (event != toggle) {
      toggleSwitch(event);
    } else if (event == toggle) {
      toggleSwitch("closed");
    }
  }

  return (
    <section className="p-20 xl:p-[100px] mx-24 xl:mx-40 mt-[100px]">
      <div
        style={{ gridTemplateColumns: "1fr 2fr" }}
        className="grid gap-20 xl:gap-[120px] justify-between"
      >
        <section>
          <header className="flex flex-col gap-10 xl:gap-[50px]">
            <div className="flex flex-col gap-2">
              <h1 className="text-[38px]/[46px] xl:text-[48px]/[56px] font-semibold">
                Frequently Asked Questions
              </h1>
              <p className="text-base xl:text-lg/[27px]">
                Still you have any questions? Contact our Team via
                support@skillbridge.com
              </p>
            </div>
            <div className="flex justify-start">
              <div className="px-5 py-3.5 xl:px-[24px] xl:py-[18px] text-lg ">
                <a>See All FAQ’s</a>
              </div>
            </div>
          </header>
        </section>

        <section className="flex flex-col gap-7">
          <div className="flex flex-col gap-10 p-10">
            <section className="flex justify-between question">
              <p className="text-lg xl:text-xl flex leading-7 items-center">
                Can I enroll in multiple courses at once?
              </p>
              <button
                className="p-2.5 bgg-yellow rounded-md"
                onClick={() => {
                  buttonHandle("first");
                }}
              >
                {toggle === "first" ? (
                  <img src="src/assets/icons/close-back-icon.svg" />
                ) : (
                  <img src="src/assets/icons/plus-sign.svg" />
                )}
              </button>
            </section>
            {toggle === "first" ? (
              <section className="flex justify-between">
                <p className="text-base xl:text-[18px] gray-font flex items-center">
                  Absolutely! You can enroll in multiple courses simultaneously
                  and access them at your convenience.
                </p>
              </section>
            ) : null}

            {toggle === "first" ? (
              <section className="flex justify-between px-10 py-6">
                <p className="text-base flex dark-gray items-center px-6 py-4">
                  Enrollment Process for Different Courses
                </p>
                <button className="p-2.5 rounded-md">
                  <img src="src/assets/icons/faq-arrow.svg" />
                </button>
              </section>
            ) : null}
          </div>

          <div className="flex flex-col gap-10 px-10 py-6  xl:px-[50px] xl:py-[30px]">
            <section className="flex justify-between question" key="question2">
              <p className="text-lg xl:text-xl/[30px]  flex items-center">
                What kind of support can I expect from instructors?
              </p>

              <button
                className="p-2.5 bgg-yellow rounded-md"
                onClick={() => {
                  buttonHandle("second");
                }}
              >
                {toggle === "second" ? (
                  <img src="src/assets/icons/close-back-icon.svg" />
                ) : (
                  <img src="src/assets/icons/plus-sign.svg" />
                )}
              </button>
            </section>
            {toggle === "second" ? (
              <section className="flex justify-between">
                <p className="text-base xl:text-[18px] gray-font flex items-center">
                  We work to make youre learning process as easy as possible,
                  thats why our instructors will guide you through all
                  difficulties thet may arise in the process.
                </p>
              </section>
            ) : null}
          </div>

          <div className="flex flex-col gap-10 px-10 py-6  xl:px-[50px] xl:py-[30px]">
            <section className="flex justify-between question">
              <p className="text-lg xl:text-xl/[30px] flex items-center">
                Are the courses self-paced or do they have specific start and
                end dates?
              </p>
              <button
                className="p-2.5 bgg-yellow rounded-md"
                onClick={() => {
                  buttonHandle("third");
                }}
              >
                {toggle === "third" ? (
                  <img src="src/assets/icons/close-back-icon.svg" />
                ) : (
                  <img src="src/assets/icons/plus-sign.svg" />
                )}
              </button>
            </section>
            {toggle === "third" ? (
              <section className="flex justify-between">
                <p className="text-base xl:text-[18px] gray-font flex items-center">
                  We designed our courses so you can learn within a group of
                  students like you under a guidense of a experiensed
                  instructor, thats why our courses have start and finish date.
                  Althogh most of the materials of the courses leave the pase of
                  complition up to you.
                </p>
              </section>
            ) : null}
          </div>

          <div className="flex flex-col gap-10 px-10 py-6  xl:px-[50px] xl:py-[30px]">
            <section className="flex justify-between question">
              <p className="text-lg xl:text-xl flex items-center">
                Are there any prerequisites for the courses?
              </p>
              <button
                className="p-2.5 bgg-yellow rounded-md"
                onClick={() => {
                  buttonHandle("fourth");
                }}
              >
                {toggle === "fourth" ? (
                  <img src="src/assets/icons/close-back-icon.svg" />
                ) : (
                  <img src="src/assets/icons/plus-sign.svg" />
                )}
              </button>
            </section>
            {toggle === "fourth" ? (
              <section className="flex justify-between">
                <p className="text-base xl:text-[18px] gray-font flex items-center">
                  In some cases yes, our courses designed for more advanced
                  students.
                </p>
              </section>
            ) : null}
          </div>

          <div className="flex flex-col gap-10 px-10 py-6  xl:px-[50px] xl:py-[30px]">
            <section className="flex justify-between question">
              <p className="text-lg xl:text-xl/[30px] flex items-center">
                Can I download the course materials for offline access?
              </p>
              <button
                className="p-2.5 bgg-yellow rounded-md"
                onClick={() => {
                  buttonHandle("fith");
                }}
              >
                {toggle === "fith" ? (
                  <img src="src/assets/icons/close-back-icon.svg" />
                ) : (
                  <img src="src/assets/icons/plus-sign.svg" />
                )}
              </button>
            </section>
            {toggle === "fith" ? (
              <section className="flex justify-between">
                <p className="text-base xl:text-[18px] gray-font flex items-center">
                  Shure, all of the videos and streams are avalible for download
                  and accsessible online.
                </p>
              </section>
            ) : null}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Faq;
