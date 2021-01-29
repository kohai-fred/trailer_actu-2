import { topbar } from "../topbar/topbar.js";

const header = document.querySelector("header");
header.append(topbar);
const a = "A";
function test() {
  console.log(a);
}
test();
const title = document.querySelector("h1");
console.log(title);

title.addEventListener("click", () => {
  console.log(title, "a.js");
});
