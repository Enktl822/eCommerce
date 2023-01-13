import { useNavigate } from "react-router-dom";
import React from "react";
import "../styles/header.css";

export default function Header() {
  const navigation = useNavigate();

  const ulrChangeHandler = () => {
    console.log("clicked");
    navigation("products");
  };

  return (
    <div className="">
      Header
      <button onClick={ulrChangeHandler}>Change URL</button>
    </div>
  );
}
