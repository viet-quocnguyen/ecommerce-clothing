import React from "react";
import "./menu-item.style.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <spane className="subtitle">SHOP NOW</spane>
      </div>
    </div>
  );
};

export default MenuItem;
