import React from "react";

const Footer = () => {
  const title = "Anjan Basnet";
  const date = new Date().getFullYear();
  return (
    <div>
      <h1 className="text-4xl flex justify-center items-center ">
        &copy; {title} {date}{" "}
      </h1>
    </div>
  );
};

export default Footer;
