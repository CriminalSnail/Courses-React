import React from "react";

import Thumbnail from "../assets/imgs/Thumbnail.png";
import PlayButton from "../assets/icons/playbutton.svg";


function VideoBlock() {
  return (
    <article className="  h-fit  mx-24  xl:mx-40 mt-20 xl:mt-24">
      <div className="flex justify-center  w-full h-full mx-auto items-center   ">
        <img className="w-full h-full" src={Thumbnail} />
        
        <a className="play-btn absolute w-[54px] h-[54px]" src={PlayButton} />
      </div>
    </article>
  );
}

export default VideoBlock;
