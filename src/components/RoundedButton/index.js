import React from "react";
import "./styles.css";

const RoundedButton = ({ onPress, name, type, slug }) => {
  return (
    <div
      className={`buttons ${type || ""}`}
      onClick={() => onPress(name, type, slug)}
    >
      {name}
    </div>
  );
};

export default RoundedButton;
