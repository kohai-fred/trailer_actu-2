import "../../assets/styles/styles.scss";
import "./topbar.scss";

export const topbar = document.createElement("div");
const content = document.createElement("div");

const contentLeft = document.createElement("div");
const contentLeftUl = document.createElement("ul");
const contentLeftLiMovie = document.createElement("li");
const contentLeftLiTv = document.createElement("li");
const contentLeftDivLogo = document.createElement("div");
const contentLeftLogo = document.createElement("a");

const contentRight = document.createElement("div");
const contentRightTranslate = document.createElement("div");
const contentRightContentTranslate = document.createElement("p");
const contentRightConnexion = document.createElement("a");

topbar.classList.add("topbar");
content.classList.add("topbar_content", "container");
contentLeft.classList.add("topbar_content-left");
contentRight.classList.add("topbar_content-right");
contentLeftUl.classList.add("topbar_ul");
contentLeftLiMovie.classList.add("topbar_li");
contentLeftLiTv.classList.add("topbar_li");
contentLeftDivLogo.classList.add("topbar_div-logo");
contentLeftLogo.classList.add("topbar_logo");

contentLeftLogo.innerHTML = `Actu trailer`;
contentLeftLogo.href = "./index.html";
contentLeftLiMovie.innerHTML = `Films`;
contentLeftLiTv.innerHTML = `Séries`;
contentRightConnexion.innerHTML = `Connexion`;

contentRightTranslate.classList.add("topbar_container-translate");
contentRightContentTranslate.innerHTML = `${navigator.language.match(
  /[A-Z]{2}/
)}`;

contentLeftDivLogo.appendChild(contentLeftLogo);
contentLeftUl.append(contentLeftLiMovie, contentLeftLiTv);
contentLeft.append(contentLeftDivLogo, contentLeftUl);

contentRightTranslate.appendChild(contentRightContentTranslate);
contentRight.append(contentRightTranslate, contentRightConnexion);

content.append(contentLeft, contentRight);
topbar.appendChild(content);
// p.addEventListener("click", () => {
//   console.log("click");
// });
