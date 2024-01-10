function VideoBlock() {
  return (
    <article className="  h-fit  mx-24  xl:mx-40 mt-20 xl:mt-24">
      <div className="flex justify-center  w-full h-full mx-auto items-center   ">
        <img className="w-full h-full" src="src/assets/icons/thumbnail.svg" />
        <img
          className="play-btn absolute w-14 h-14"
          src="src/assets/icons/playbutton.svg"
        />
      </div>
    </article>
  );
}


export default VideoBlock