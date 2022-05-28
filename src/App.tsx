import React from "react";
import Content from "./PageHandler";
import { Home } from "./HomePage/Home";

function App() {
  const isProd = !true;
  return <>{isProd ? <Content /> : <Home />}</>;
}

export default App;
