document.addEventListener("DOMContentLoaded", function () {
  let square = document.createElement("button");
  let squareTxt = document.createTextNode("Add Square");

  let idcntr = 1;
  square.appendChild(squareTxt);
  document.body.appendChild(square);
  let colors = ["green", "orange", "blue", "purple", "grey", "yellow", "wheat"];
  let container = document.createElement("div");
  document.body.appendChild(container);
  
  square.addEventListener("click", function () {
    let newDiv = document.createElement("div");

    newDiv.className = "newDiv";
    newDiv.id = idcntr;
    idcntr++;

    container.appendChild(newDiv);
    newDiv.addEventListener("click", function () {
      var randomColor = colors[Math.floor(Math.random() * colors.length)];
      newDiv.style.backgroundColor = randomColor;
    });
    newDiv.addEventListener("mouseover", function () {
      let h1 = document.createElement("h1");
      let h1txt = document.createTextNode(newDiv.id);
      h1.appendChild(h1txt);
      newDiv.appendChild(h1);
      h1.style;
    });
    newDiv.addEventListener("mouseout", function () {
      newDiv.removeChild(newDiv.firstChild);
    });
    newDiv.addEventListener("dblclick", function () {
      // if the id is even, else odd (might have to make another if)
      // even else if remove the square after it, odd else if remove the square before it
      if (newDiv.id % 2 === 0 && newDiv.nextSibling) {
        newDiv.nextSibling.remove();
      } else if (newDiv.id % 2 === 0 && !newDiv.nextSibling) {
        alert(`There isn't a square after ${newDiv.id} to delete`);
      } else if (newDiv.id % 1 === 0 && newDiv.previousSibling) {
        newDiv.previousSibling.remove();
      } else if (newDiv.id % 1 === 0 && !newDiv.previousSibling){
        alert(`There isn't a square before ${newDiv.id} to delete`);
      }
    });
  });
});
