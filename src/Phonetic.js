import React from "react";
import "./Phonetics.css";

export default function Phonetic(props) {
  return <div className="Phonetic">{props.phonetic.text}</div>;
}
