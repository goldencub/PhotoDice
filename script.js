const promptBox = document.querySelector("#promptBox")

const content = document.createElement("p");
content.classList.add("content");
content.textContent = "hey I'm red";
content.style.color = "red";

const content2 = document.createElement("h2");
content2.textContent = "I'm Big";

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";

const divTest = document.createElement("div");
divTest.classList.add("Divtest");
divTest.style.border = "2px solid black";
divTest.style.backgroundColor = "pink";

const DivChild = document.createElement("h2");
DivChild.textContent = "Im in a box";

const DivChild2 = document.createElement("p");
DivChild2.textContent = "Me too!";

const shufButt = document.querySelector("#shufButt");
shufButt.addEventListener("click", () => {
     alert("hello there");
     alert("still here");
    });

  


promptBox.appendChild(content);
promptBox.appendChild(content2);
promptBox.appendChild(h3);

divTest.appendChild(DivChild);
divTest.appendChild(DivChild2);
promptBox.appendChild(divTest);

// the JavaScript file
// METHODS 2 & 3
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
    btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
     
});

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    })
})


