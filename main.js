document.title = "project-js-9";
document.body.style.cssText = `
height: 100vh;
margin: 0;
padding: 0;
font-family: sans-serif;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
-webkit-tap-highlight-color: transparent;
-moz-tap-highlight-color: transparent;
user-select: none;
`;
let Likes = document.getElementById("Likes");
let add = document.getElementById("+");
let remove = document.getElementById("-");
let num = window.localStorage.getItem("number");
window.onload = function (params) {
        if (window.localStorage.getItem("number") !== null) {
                Likes.innerHTML = `${window.localStorage.getItem("number")}`;
                console.log("localStorage Not Empty")
        }
}
add.onclick = function (params) {
        window.localStorage.setItem("number", ++num)
        if (window.localStorage.getItem("number") !== null) {
                Likes.innerHTML = window.localStorage.getItem("number");
        }
}
remove.onclick = function (params) {
        window.localStorage.setItem("number", --num)
        if (window.localStorage.getItem("number") !== null) {
                Likes.innerHTML = window.localStorage.getItem("number");
        }
}
