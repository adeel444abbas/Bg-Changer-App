`use-strict`;

// With Basic Logic
/* 
const redColor = document.querySelector(".card1");
const greenColor = document.querySelector(".card2");
const greyColor = document.querySelector(".card3");
const darkColor = document.querySelector(".card4");
const body = document.querySelector("body");
const heading = document.querySelector("h2");
const para = document.querySelector("p");

const hanldeRedBg = () => {
  body.style.backgroundColor = "red";
  heading.style.color = "white";
  para.style.color = "white";
};

const hanldeGreenBg = () => {
  body.style.backgroundColor = "green";
  heading.style.color = "white";
  para.style.color = "white";
};

const hanldeGreyBg = () => {
  body.style.backgroundColor = "grey";
  heading.style.color = "white";
  para.style.color = "white";
};

const hanldeDarkBg = () => {
  body.style.backgroundColor = "black";
  heading.style.color = "white";
  para.style.color = "white";
};

redColor.addEventListener("click", hanldeRedBg);
greenColor.addEventListener("click", hanldeGreenBg);
greyColor.addEventListener("click", hanldeGreyBg);
darkColor.addEventListener("click", hanldeDarkBg);

*/

// With better logic

const cards = document.querySelectorAll(".card"); // It returns a NodeList and that will be stored in the cards.
const body = document.querySelector("body");
// console.log(cards);
cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    // console.log(e);
    // console.log(e.target);  // It will return the targeted value
    document.querySelector("h2").style.color = "white";
    document.querySelector("p").style.color = "white";
    if (e.target.id === "red") {
      body.style.backgroundColor = "red";
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = "green";
    } 
    if (e.target.id === "grey") {
      body.style.backgroundColor = "grey";
    } 
    if (e.target.id === "dark") {
      body.style.backgroundColor = "black";
    }
  });
});
