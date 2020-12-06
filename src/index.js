import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const FatherObj = {
  namee:"prabhudas",
agee:47
}

const Mother ={
FatherObj,
name : "Suganthi",
age:45
}

//console.log(Mother);

ReactDOM.render(<App />, document.getElementById("root"));
