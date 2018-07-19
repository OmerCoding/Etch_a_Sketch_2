const container = document.querySelector('#container');

function  build_grid(size, color) {
  for (let i = 0; i < size; i++){
    for (let j = 0; j < size; j++){
      const box = document.createElement('div');
      box.classList.add("untouched");
      box.style.width = "calc((100% / " + size + " - 4px)";
      box.style.height = "calc((100% / " + size + " - 4px)"; // size that fit's to the container, substracting the borders
      container.appendChild(box);
    }
  }
  if (color === 0) {
    toBlack();
  } else if (color === 1) {
    toRGB();
  } else if (color === 2) {
    toBlackerMode();
  }
}

function delete_grid(size) {
  var elements = document.getElementsByClassName("untouched");
  while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
  }
}


function reset_grid() {
  var pixels = document.getElementsByClassName("untouched");
  resetDarker();
  //colorTrack = colorTrack.fill(0);
  for (let i = 0; i < pixels.length; i++){
    pixels[i].style.backgroundColor = "white";
    pixels[i].style.border = "2px solid black";
  }
}

function makeNewGrid() {
  do {
    var newSize = prompt("Please enter a value between 1-64");
  } while (newSize > 64 || newSize < 1);
  delete_grid(basic_size);
  build_grid(newSize, basic_color);
}


function toBlack() {
  basic_color = 0; // so when you reset the board, black mode stays
  reset_grid();
  var pixels = document.getElementsByClassName("untouched");

  for (let i = 0; i < pixels.length; i++){
    pixels[i].addEventListener("mouseover", ()=>{
      pixels[i].style.backgroundColor = "black";
      pixels[i].style.border = "2px solid white";
    });
  }
}


function toRGB() {
  basic_color = 1; // so when you reset the board, RGB mode stays
  reset_grid();
  var pixels = document.getElementsByClassName("untouched");

  for (let i = 0; i < pixels.length; i++){
    pixels[i].addEventListener("mouseover", ()=>{
      let c1 = Math.floor(Math.random() * 256);
      let c2 = Math.floor(Math.random() * 256);
      let c3 = Math.floor(Math.random() * 256);
      pixels[i].style.backgroundColor = "rgb(" + c1 + "," + c2 + "," + c3 + ")";
      pixels[i].style.border = "2px solid white";
    });
  }
}


function toBlackerMode() {
  basic_color = 2; // so when you reset the board, blacker mode stays
  resetDarker();
  reset_grid();
  var pixels = document.getElementsByClassName("untouched");
  for (let i = 0; i < pixels.length; i++){
    pixels[i].addEventListener("mouseover", ()=>{
      colorTrack[i] += 0.1; // using array not to intialize colors
      pixels[i].style.backgroundColor = "rgba(0,0,0," + colorTrack[i] + ")";
      pixels[i].style.border = "2px solid white";
    });
  }
}

function resetDarker() {
  for (let i = 0; i < 4096; i++){
    colorTrack[i] = 0;
  }
}
/* function turnBlack(index) {
  let pixel = document.getElementsByClassName("untouched");
  pixel[index].style.backgroundColor = "red";
}
*/

var colorTrack = Array(4096).fill(0);
var basic_size = 16;
var basic_color = 0;
build_grid(basic_size, basic_color);

reset.addEventListener("click", reset_grid);
new_size.addEventListener("click", makeNewGrid);
rgb.addEventListener("click", toRGB);
blacker.addEventListener("click", toBlackerMode);
black.addEventListener("click", toBlack);

