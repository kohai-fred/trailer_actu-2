import { topbar } from "./topbar/topbar.js";
import { foot } from "./footer/footer.js";

const title = document.querySelector("h1");
console.log(title);

const header = document.querySelector("header");
header.append(topbar);
const footer = document.querySelector("footer");
footer.append(foot);
