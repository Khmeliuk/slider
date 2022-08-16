const refs = {
  downButton: document.querySelector(".down-button"),
  upButton: document.querySelector(".up-button"),
  controls: document.querySelector(".controls"),
  sidebar: document.querySelector(".sidebar"),
  mainSlide: document.querySelector(".main-slide"),
};

let count = 0;

function slider(count) {
  const sidebar = count - 600;
  const main = count * -1;
  refs.sidebar.style.transform = `translateY(${sidebar}%)`;
  refs.mainSlide.style.transform = `translateY(${main}%)`;
}

refs.controls.addEventListener("click", onClick);

function onClick(e) {
  e.preventDefault();
  const allElementSlider = refs.sidebar.children.length;

  if (e.target.closest(".down-button") === refs.downButton) {
    count += 100;
    if (count === allElementSlider * 100) {
      count = 0;
    }
    slider(count);
  }

  if (e.target.closest(".up-button") === refs.upButton) {
    count -= 100;
    if (count < 0) {
      count = 600;
    }
    slider(count);
  }
}

slider(count);
