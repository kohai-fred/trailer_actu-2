import { topbar } from "../topbar/topbar.js";
import { foot } from "../footer/footer.js";

const header = document.querySelector("header");
header.append(topbar);
const footer = document.querySelector("footer");
footer.append(foot);

const a = "A";
function test() {
  console.log(a);
}
test();
const title = document.querySelector("h1");
console.log(title);

title.addEventListener("click", () => {
  console.log(title, "movie_detail.js");
});
