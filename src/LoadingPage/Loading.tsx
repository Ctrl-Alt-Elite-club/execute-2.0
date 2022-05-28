import React from "react";
import logo from "./logo.svg";
import logoText from "./logoText.svg";
import "./Loading.css";

interface LoadingProps {}

export const Loading: React.FC<LoadingProps> = ({}) => {
  return (
    <div className="Loading">
      <img src={logo} alt="logo" className="logo" />
      <img src={logoText} alt="logo text" className="logo-text" />
      <p className="bottom-text">Copyright © 2022</p>
    </div>
  );
};
