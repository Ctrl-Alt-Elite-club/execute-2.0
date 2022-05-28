import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import menuButton from "./assets/MenuButton.svg";
import logoText from "./assets/logoText.svg";

import homeSvg from "./assets/home.svg";
import cartSvg from "./assets/cart.svg";
import ordersSvg from "./assets/orders.svg";
import optionsSvg from "./assets/options.svg";

interface HeaderProps {
  title?: string;
  height?: string;
  className?: string;
  buttonHook: boolean;
  setButtonHook: Dispatch<SetStateAction<boolean>>;
}

interface HeaderPropsUser {
  title?: string;
  height?: string;
  className?: string;
}

function useOutsideAlerter(
  ref: React.MutableRefObject<any>,
  setButtonHook: Dispatch<SetStateAction<boolean>>,
  buttonHook: boolean
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log("clicked outside");
        setButtonHook(!buttonHook);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const ButtonHeader: React.FC<HeaderProps> = (props) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.setButtonHook, props.buttonHook);

  const styles: React.CSSProperties = {
    height: "1.5em",
    cursor: "pointer",
    margin: "0em 0.5em",
  };
  return (
    <div ref={wrapperRef}>
      <header
        className={`button-header header ${props.className}`}
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
        <img src={homeSvg} alt="home" style={styles} />
        <img src={cartSvg} alt="cart" style={styles} />
        <img src={ordersSvg} alt="orders" style={styles} />
        <img src={optionsSvg} alt="options" style={styles} />
      </header>
    </div>
  );
};

const DefaultHeader: React.FC<HeaderProps> = (props) => {
  return (
    <header
      className={`default-header header ${props.className}`}
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
          marginLeft: "0.5em",
        }}
        onClick={() => {
          console.log("Button pressed");
          props.setButtonHook(!props.buttonHook);
        }}
      />
      <h1>{props.title || "Welcome Back, {username}"}</h1>
      <img
        src={logoText}
        alt="Logo"
        style={{ height: "1em", paddingRight: "0.5em" }}
      />
    </header>
  );
};

export const Header: React.FC<HeaderPropsUser> = (props) => {
  const [buttonHook, setButtonHook] = React.useState(false);
  const p: HeaderProps = {
    ...props,
    buttonHook: buttonHook,
    setButtonHook: setButtonHook,
  };
  return <>{buttonHook ? <ButtonHeader {...p} /> : <DefaultHeader {...p} />}</>;
};

export default Header;
