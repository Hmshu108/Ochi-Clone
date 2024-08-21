import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen  px-32 py-20 flex items-center gap-5 ">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute bottom-4   left-5 border-[1px] rounded-full px-4 py-2 border-[#CDEA68] text-[#CDEA68]">
            &#169; 2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[50vh] flex gap-4">
        <div className="card relative rounded-xl w-full h-full bg-[#192624] flex justify-center items-center ">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute bottom-4   left-5 border-[1px] rounded-full px-4 py-2 border-[#969696] text-[#dfdfdf]">
            Rating 5.0 on Clutch
          </button>
        </div>
        <div className="card relative rounded-xl w-full h-full bg-[#192624] flex justify-center items-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute bottom-4   left-5 border-[1px] rounded-full px-4 py-2 border-[#969696] text-[#dfdfdf] capitalize ">
            Business Bootcamp Alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
