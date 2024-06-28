import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import ContentsList from "./ContentsList";

const symbols = ["ZS", "NVTS", "TNK", "NVDA", "AMD", "S", "OKTA"];
const api_key = "cpv7ia1r01qhmaurvus0cpv7ia1r01qhmaurvusg";

function App() {
  return (
    <>
      <ContentsList symbols={symbols} />
    </>
  );
}

export default App;
