import React from "react";
import Header from "./Components/Header";
import "./Home.css";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
      <Header
        title="Welcome Back, My lil sussy baka"
        className="Home-Header"
        height="2.5em"
      />
      <div className="Home-Content">
        <h1>Home Page</h1>
      </div>
    </>
  );
};
