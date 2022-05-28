import React from "react";
import Header from "./Components/Header";
import "./Home.css";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
      <Header
        title="Welcome Back, {username}"
        className="Home-Header"
        height="2.5em"
      />
    </>
  );
};
