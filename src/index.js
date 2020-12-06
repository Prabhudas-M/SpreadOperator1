import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const FatherObj = {
  name:"prabhudas",
age:47
}

const Mother ={
...FatherObj,
name : "Suganthi",
age:45
}

console.log(Mother);

ReactDOM.render(<App />, document.getElementById("root"));
