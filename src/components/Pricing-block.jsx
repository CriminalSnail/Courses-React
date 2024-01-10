function PricingBlock() {
  return ( <article name="pricing" className="flex mx-24 xl:mx-40 mt-[100px]">
    <div className="flex flex-col gap-[60px] xl:gap-[80px]">
      <div className="flex justify-between flex-1/2 gap-60">
        <div>
          <div className="font-semibold text-4xl xl:text-[48px]/[72px]">Our Pricing</div>
          <div>
            <p className="gray-font text-base xl:text-lg">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet
              et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla
              feugiat senectus in.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-end">
          <div className="p-3 flex">
            <div
              className="flex justify-center items-center bg-cont text-white rounded-md px-6 py-3 xl:px-[30px] xl:py-[14px]"
            >
              <button><p className="text-base xl:text-lg ">Monthly</p></button>
            </div>
            <div
              className="flex justify-center items-center rounded-md px-6 py-3 xl:px-[30px] xl:py-[14px]"
            >
              <button><p className="text-base gray-font xl:text-lg">Yearly</p></button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-1 gap-[30px] p-[50px] xl:p-[80px]">
        <div className="pt-10 px-6  xl:pt-[50px] xl:p-[30px] flex flex-col gap-[50px]">
          <div
            className="flex plan-title justify-center items-center leading-7 p-6 font-medium  px-[22px] py-2.5  text-lg  xl:py-[12px]"
          >
            <h1 className=" text-base  xl:text-lg/[30px]">Free Plan</h1>
          </div>

          <div className="flex justify-center items-end ">
            <h1 className="text-6xl/[43.8px] xl:text-[80px]/[58.4px]  font-semibold h-full">$0</h1>
            <p className="text-base xl:text-xl gray-font">/month</p>
          </div>

          <div className="flex flex-col">
            <div className="p-[30px] xl:p-[40px] flex flex-col gap-6 xl:gap-[30px]">
              <div className="flex justify-center items-center">
                <p className="text-lg/[27px] xl:text-[20px]/[30px]   ">Avalible Features</p>
              </div>

              <div className="flex-flex-col px-7 gap-5">
                <div className="flex flex-col gap-5">
                  <div className="flex gap-2 p-3 ">
                    <img className="included xl:p-[6px]" src="src/assets/icons/pricing-icon-included.svg" />
                    <p className="gray-font text-base xl:text-lg">Access to selected free courses.</p>
                  </div>
                  <div className="flex gap-2 p-3">
                    <img className="included xl:p-[6px]" src="src/assets/icons/pricing-icon-included.svg" />
                    <p className="gray-font text-base xl:text-lg">Limited course materials and resources.</p>
                  </div>
                  <div className="flex gap-2 p-3">
                    <img className="included xl:p-[6px]" src="src/assets/icons/pricing-icon-included.svg" />
                    <p className="gray-font text-base xl:text-lg">Basic community support.</p>
                  </div>
                  <div className="flex gap-2 p-3">
                    <img className="included xl:p-[6px]" src="src/assets/icons/pricing-icon-included.svg" />
                    <p className="gray-font text-base xl:text-lg">No certification upon completion.</p>
                  </div>
                  <div className="flex gap-2 p-3">
                    <img className="included xl:p-[6px]" src="src/assets/icons/pricing-icon-included.svg" />
                    <p className="gray-font text-base xl:text-lg">Ad-supported platform.</p>
                  </div>
                  <div className="flex gap-2 p-3">
                    <img className="rounded-md xl:p-[6px]" src="src/assets/icons/pricing-icon-excluded.svg" />
                    <p className="gray-font text-base xl:text-lg">Access to exclusive Pro Plan community forums.</p>
                  </div>
                  <div className="flex gap-2 p-3">
                    <img className=" rounded-md xl:p-[6px]" src="src/assets/icons/pricing-icon-excluded.svg" />
                    <p className="gray-font text-base xl:text-lg">Early access to new courses and updates.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{borderRadius:' 0 0 8px 8px'}}
              className="px-6 py-4 flex justify-center items-center bg-cont text-white"
            >
              <button className="xl:text-lg text-base">Get Started</button>
            </div>
          </div>
          <div></div>
        </div>

        <div className="pt-10 p-6  xl:pt-[50px] xl:p-[30px] flex flex-col gap-[50px]">
          <div
            className="flex plan-title justify-center items-center leading-7 px-[22px] py-2.5 font-medium text-lg  xl:py-[12px]"
          >
            <h1  className=" text-base xl:text-lg/[30px]" >Pro Plan</h1>
          </div>

          <div className="flex justify-center items-end ">
            <h1 className="text-6xl/[43.8px] xl:text-[80px]/[58.4px]">$79</h1>
            <p className="text-base xl:text-xl gray-font">/month</p>
          </div>

          <div className="flex flex-col">
            <div className="p-[30px] xl:p-[40px] flex flex-col gap-6 xl:gap-[30px]">
              <div className="flex justify-center items-center">
                <p className="text-lg/[27px] xl:text-[20px]/[30px]">Avalible Features</p>
              </div>

              <div className="flex-flex-col px-7 gap-5">
                <div className="flex flex-col gap-5">
                  <div className="flex gap-2 p-3">
                    <img className="included xl:p-[6px]" src="src/assets/icons/pricing-icon-included.svg" />
                    <p className="gray-font text-base xl:text-lg">Unlimited access to all courses.</p>
                  </div>
                  <div className="flex gap-2 p-3">
                    <img className="included xl:p-[6px]" src="src/assets/icons/pricing-icon-included.svg" />
                    <p className="gray-font text-base xl:text-lg">Unlimited course materials and resources.</p>
                  </div>
                  <div className="flex gap-2 p-3">
                    <img className="included xl:p-[6px]" src="src/assets/icons/pricing-icon-included.svg" />
                    <p className="gray-font text-base xl:text-lg">Priority support from instructors.</p>
                  </div>
                  <div className="flex gap-2 p-3">
                    <img className="included xl:p-[6px]" src="src/assets/icons/pricing-icon-included.svg" />
                    <p className="gray-font text-base xl:text-lg">Course completion certificates.</p>
                  </div>
                  <div className="flex gap-2 p-3">
                    <img className="included xl:p-[6px]" src="src/assets/icons/pricing-icon-included.svg" />
                    <p className="gray-font text-base xl:text-lg">Ad-free experience.</p>
                  </div>
                  <div className="flex gap-2 p-3">
                    <img  className="xl:p-[6px] rounded-md" src="src/assets/icons/pricing-icon-included.svg" />
                    <p className="gray-font text-base xl:text-lg">Access to exclusive Pro Plan community forums.</p>
                  </div>
                  <div className="flex gap-2 p-3">
                    <img className="xl:p-[6px] rounded-md " src="src/assets/icons/pricing-icon-included.svg" />
                    <p className="gray-font text-base xl:text-lg">Early access to new courses and updates.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{borderRadius:' 0 0 8px 8px'}}
              className="px-6 py-4 flex justify-center items-center bg-cont text-white"
            >
              <button className="xl:text-lg text-base">Get Started</button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </article>)
}

export default PricingBlock