const container = document.querySelector('#container');

function  building_grid(size) {
  for (let i = 0; i < size; i++){
    for (let j = 0; j < size; j++){
      const box = document.createElement('div');
      box.classList.add('untouched');
      box.style.width = "calc((100% / " + size + " - 4px)";
      box.style.height = "calc((100% / " + size + " - 4px)"; // size that fit's to the container, substracting the borders
      container.appendChild(box);
    }
  }
}

building_grid(16);
