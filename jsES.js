const container = document.querySelector('#container');

function  building_grid(size) {
  for (let i = 0; i < size; i++){
    for (let j = 0; j < size; j++){
      const box = document.createElement('div');
      box.classList.add("untouched");
      box.style.width = "calc((100% / " + size + " - 4px)";
      box.style.height = "calc((100% / " + size + " - 4px)"; // size that fit's to the container, substracting the borders
      container.appendChild(box);
    }
  }
}

//function turnBlack(index) {
//  let pixel = document.getElementsByClassName("untouched");
//  pixel[index].style.backgroundColor = "red";
//}

building_grid(16);

var pixels = document.getElementsByClassName("untouched");

for (let i = 0; i < pixels.length; i++){
  pixels[i].addEventListener("mouseover", ()=>{
    pixels[i].style.backgroundColor = "black";
    pixels[i].style.border = "2px solid white";
  });
}
