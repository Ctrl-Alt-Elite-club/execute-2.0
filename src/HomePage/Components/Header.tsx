import React from "react";
import menuButton from "./MenuButton.svg";

interface HeaderProps {
  title?: string;
  height?: string;
  className?: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header
      className={`header ${props.className}`}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        boxShadow: "2px 2px 2px 1px #DDD",
        background: "#D2D2D2",
        height: props.height || "4em",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        verticalAlign: "middle",
      }}
    >
      <img
        src={menuButton}
        alt="Menu"
        style={{
          width: "1.5em",
          height: "1em",
          cursor: "pointer",
        }}
      />
      <h1>{props.title || "Welcome Back, {username}"}</h1>
      <p></p>
    </header>
  );
};

export default Header;
