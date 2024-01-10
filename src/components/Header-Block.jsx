




function HeaderBlock() {
  return (
    <header className="bg-white">
    <div className="flex gap-12 xl:gap-16 mt-20 xl:mt-24 flex-col w-2/3 h-auto mx-auto">
      <div className="flex gap-4 flex-col w-full h-auto  mx-auto">
        <div className="h-auto w-auto">
          <div className="relative py-3 px-6 xl:px-7 xl:py-3.5 w-2/3 h-20 mx-auto flex justify-center items-center">
            <div className="flex justify-center text-4xl gap-2.5 font-bold items-center">
              <div className="w-12 h-12 flex justify-center items-center relative">
                <div className="icon">
                  <img
                    src="src/assets/icons/hero-three-lines-icon.svg"
                    alt="Three lines representing a shining coming from a lightning"
                  />
                </div>
                <img
                  className="bgg-yellow xl:w-8 xl:h-8"
                  src="src/assets/icons/hero-lightning-icon.svg"
                  alt="A cute lightning icon."
                />
              </div>

              <h1 className="linehight xl:text-5xl xl:linehight-xl">
                <span className="orange-font linehight">Unlock</span> Your Creative Potential
              </h1>
            </div>
          </div>
        </div>

        <div className="flex-col justify-center items-center">
          <div className="text-3xl leading-10 font-medium flex justify-center items-center xl:text-4xl xl:leading-9">
            <p>with Online Design and Development Courses.</p>
          </div>
          <div className="flex justify-center h-10 leading-6 font-normal items-center xl:text-lg xl:leading-7">
            <p>Learn from Industry Experts and Enhance Your Skills.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 items-center">
        <button className="bg-cont rounded-md text-white py-3 px-5 xl:px-6 xl:py-4 xl:text-lg">Explore Courses</button>
        <button className="py-3 px-5 xl:px-6 xl:py-4 xl:text-lg">View Pricing</button>
      </div>
    </div>
  </header>)
  }


  export default HeaderBlock