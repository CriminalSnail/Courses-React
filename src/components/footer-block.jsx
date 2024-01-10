function FooterBlock() {
  return ( <section className="flex flex-col gap-14 xl:gap-[100px] px-[80px] pt-[60px] pb-[20px] xl:px-[162px] xl:pt-[100px] ">
  <div className="flex justify-between">
    <section className="flex flex-col w-1/5 gap-[30px] xl:gap-[40px]">
      <section>
        <div className="xl:p-[7px] p-[5.7px]">
          <img
            className="bg-cont rounded-md xl:w-[40px] xl:h-[40px] w-[32.5px] h-[32.5px]"
            src="src/assets/icons/product-icon.svg"
            
          />
        </div>
      </section>

      <section className="flex flex-col gap-3.5 ">
        <div className="flex gap-1 xl:gap-[6px]">
          <img className="w-[20px] h-[20px] xl:w-[24px] xl:h-[24px]" src="src/assets/icons/mail-icon.svg" />
          <a className="text-lg">hello@skillbridge.com</a>
        </div>
        <div className="flex gap-1 xl:gap-[6px]">
          <img className="w-[20px] h-[20px] xl:w-[24px] xl:h-[24px]" src="src/assets/icons/phone-icon.svg" />
          <a className="text-lg">+91 91813 23 2309</a>
        </div>
        <div className="flex gap-1 xl:gap-[6px]">
          <img className="w-[20px] h-[20px] xl:w-[24px] xl:h-[24px]" src="src/assets/icons/location-icon.svg" />
          <a className="text-lg">Somewhere in the World</a>
        </div>
      </section>
    </section>

    <nav className="flex w-3/5 gap-6 xl:gap-[30px]">
      <section className="flex flex-col flex-auto w-33 gap-2.5">
        <div><h1 className="text-lg xl:text-xl font-semibold">Home</h1></div>

        <div className="flex flex-col gap-2">
          <div><a className="lightest-gray-font text-base xl:text-lg"> Benefits</a></div>
          <div><a className="lightest-gray-font text-base xl:text-lg">Our Courses</a></div>
          <div><a className="lightest-gray-font text-base xl:text-lg"> Our Testimonials</a></div>
          <div><a className="lightest-gray-font text-base xl:text-lg">Our FAQ</a></div>
        </div>
      </section>

      <section className="flex flex-col flex-auto w-33 gap-2.5">
        <div><h1 className="text-lg xl:text-xl font-semibold">About</h1></div>

        <section className="flex flex-col gap-2">
          <div><a className="lightest-gray-font text-base xl:text-lg"> Company</a></div>
          <div><a className="lightest-gray-font text-base xl:text-lg">Achievements</a></div>
          <div><a className="lightest-gray-font text-base xl:text-lg"> Our Goals</a></div>
        </section>
      </section>

      <section className="flex flex-col flex-auto w-33 gap-2.5">
        <div><h1 className="text-lg xl:text-xl font-semibold">Social Profiles</h1></div>

        <section className="flex gap-3.5 ">
          <div className="p-[12px] xl:p-3.5">
            <a className="lightest-gray-font ">
              <img className="w-5 h-5 xl:w-6 xl:h-6" src="src/assets/icons/facebook-icon.svg"
            /></a>
          </div>
          <div className="p-[12px] xl:p-3.5">
            <a className="lightest-gray-font"
              ><img className="w-5 h-5 xl:w-6 xl:h-6" src="src/assets/icons/twitter-icon.svg"
            /></a>
          </div>
          <div className="p-[12px] xl:p-3.5">
            <a className="lightest-gray-font"
              ><img className="w-5 h-5 xl:w-6 xl:h-6" src="src/assets/icons/linkedin-icon.svg"
            /></a>
          </div>
        </section>
      </section>
    </nav>
  </div>

  <section className="flex justify-center">
    <p className="text-lg">© 2023 Skillbridge. All rights reserved.</p>
  </section>
</section>)
}


export default FooterBlock