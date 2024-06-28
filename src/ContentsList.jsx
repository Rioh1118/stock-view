import React from "react";
import Content from "./Content.jsx";

const ContentsList = ({ symbols }) => {
  return (
    <>
      <ul>
        {symbols.map((symbol, index) => (
          <li key={index}>
            <Content symbol={symbol} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContentsList;
