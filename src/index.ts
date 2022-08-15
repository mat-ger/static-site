import "./style.css";

import * as _ from "lodash";

import userPng from "./assets/user.png";
import data from "./data/de.json";
import printMe from "./print";

const strings = data;

function main() {
  const element = document.createElement("div");
  element.classList.add("wrapper");

  const headline = document.createElement("h1");
  headline.innerHTML = strings.headline;
  element.appendChild(headline);

  const textWithIcon = document.createElement("div");
  const icon = new Image();
  icon.src = userPng;
  textWithIcon.innerHTML = strings.iconText;
  textWithIcon.appendChild(icon);
  element.appendChild(textWithIcon);

  const button = document.createElement("button");
  button.onclick = printMe;
  button.innerHTML = strings.button.printMe;
  element.appendChild(button);

  return element;
}

document.body.appendChild(main());
