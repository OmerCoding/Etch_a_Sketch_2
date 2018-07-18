const container = document.querySelector('#container');

function  build_grid(size) {
  for (let i = 0; i < size; i++){
    for (let j = 0; j < size; j++){
      const box = document.createElement('div');
      box.classList.add("untouched");
      box.style.width = "calc((100% / " + size + " - 4px)";
      box.style.height = "calc((100% / " + size + " - 4px)"; // size that fit's to the container, substracting the borders
      container.appendChild(box);
    }
  }
  var pixels = document.getElementsByClassName("untouched");

  for (let i = 0; i < pixels.length; i++){
    pixels[i].addEventListener("mouseover", ()=>{
      pixels[i].style.backgroundColor = "black";
      pixels[i].style.border = "2px solid white";
    });
  }
}

function delete_grid(size) {
  var elements = document.getElementsByClassName("untouched");
  while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
  }
}

/* function turnBlack(index) {
  let pixel = document.getElementsByClassName("untouched");
  pixel[index].style.backgroundColor = "red";
}
*/
var basic_size = 16;
build_grid(basic_size);

reset.addEventListener("click", ()=>{
  var pixels = document.getElementsByClassName("untouched");
  for (let i = 0; i < pixels.length; i++){
    pixels[i].style.backgroundColor = "white";
    pixels[i].style.border = "2px solid black";
  }
});

new_size.addEventListener("click", function(basic_size){
  do {
    var newSize = prompt("Please enter a value between 1-64");
  } while (newSize > 64 || newSize < 1);
  delete_grid(basic_size);
  build_grid(newSize);
});
