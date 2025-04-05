localStorage.setItem("name", "fadi");
localStorage.setItem("study", "javascript");
const userName =localStorage.getItem("name");
document.querySelector("h2").innerHTML=userName;
const user =localStorage.getItem("study");
document.querySelector("h3").innerHTML=user;