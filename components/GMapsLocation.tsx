import React from "react";

export const GMapsLocation = () => {
  return (
    <div className="z-priority space-y-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5545.557960724644!2d15.8036483!3d45.9756738!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765c15e30e0f8e7%3A0xb8ccc91ff9af559!2sKrajska%20ul.%2039A%2C%2010296%2C%20Vadina!5e0!3m2!1sen!2shr!4v1712057239245!5m2!1sen!2shr"
        width="800"
        height="600"
        className=" w-full h-[500px] md:h-[700px]"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
