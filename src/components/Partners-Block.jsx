import React from "react";

import Zapier from "../assets/icons/zapier.svg";
import Spotify from "../assets/icons/spotify.svg";
import Zoom from "../assets/icons/zoom.svg";
import Amazon from "../assets/icons/amazon.svg";
import Adobe from "../assets/icons/adobe.svg";
import Notion from "../assets/icons/notion.svg";
import Netflix from "../assets/icons/netflix.svg";

function PartnersBlock() {
  return (
    <aside className="  p-6 xl:p-7 mt-24 mx-24  xl:mx-40 flex">
      <a className="px-7 py-5 flex-1 xl:px-10 xl:py-7">
        <img className="mx-auto" src={Zapier}></img>
      </a>
      <a className="px-7 py-5 flex-1 xl:px-10 xl:py-7">
        <img className="mx-auto" src={Spotify}></img>
      </a>
      <a className="px-7 py-5 flex-1 xl:px-10 xl:py-7">
        <img className="mx-auto" src={Zoom}></img>
      </a>
      <a className="px-7 py-5 flex-1 xl:px-10 xl:py-7">
        <img className="mx-auto" src={Amazon}></img>
      </a>
      <a className="px-7 py-5 flex-1 xl:px-10 xl:py-7">
        <img className="mx-auto" src={Adobe}></img>
      </a>
      <a className="px-7 py-5 flex-1 xl:px-10 xl:py-7">
        <img className="mx-auto" src={Notion}></img>
      </a>
      <a className="px-7 py-5 flex-1 xl:px-10 xl:py-7">
        <img className="mx-auto" src={Netflix}></img>
       
      </a>
    </aside>
  );
}

export default PartnersBlock;
