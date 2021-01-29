import { topbar } from "./topbar/topbar.js";

const title = document.querySelector("h1");
console.log(title);

const header = document.querySelector("header");
console.log(topbar);
header.append(topbar);
