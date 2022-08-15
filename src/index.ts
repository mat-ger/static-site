import './style.css';

import * as _ from 'lodash';

import userPng from './assets/user.png';
import data from './data/de.json';
import printMe from './print';

const strings = data;

function main() {
  const element = document.createElement("div");
  element.innerHTML = strings.hello;
  element.classList.add("hello");

  const icon = new Image();
  icon.src = userPng;
  element.appendChild(icon);

  const button = document.createElement("button");
  button.onclick = printMe;
  button.innerHTML = strings.button.printMe;
  element.appendChild(button);

  return element;
}

document.body.appendChild(main());
