import React from "react";

function Footer() {
  return (
    <div className="w-full  px-4 pt-4 max-w-6xl mx-auto">
      <div>
        <div className="border dark:border-neutral-700 border-neutral-200" />
        <div className="flex justify-between  py-5 items-center text-neutral-600 text-sm">
          <div className="flex ">
            <span>©</span>
            <a href="https://evryhosting.com/">EvryHosting Widgets</a>
          </div>

          <a href="https://evryhosting.com/">Created by EvryHosting</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
