import "../../assets/styles/styles.scss";
import "./footer.scss";

export const foot = document.createElement("div");
const content = document.createElement("div");

const p = document.createElement("p");

foot.classList.add("footer");
content.classList.add("footer_content", "container");

p.innerHTML = `&copy Actu Trailers`;

content.append(p);
foot.append(content);
