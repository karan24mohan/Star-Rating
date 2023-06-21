const stars = document.querySelectorAll(".star__wrapper i");
const starswrapper = document.querySelector(".star__wrapper");
stars.forEach((star, firstIndex) => {
  star.addEventListener("click", () => {
    starswrapper.classList.add("disabled");
    stars.forEach((otherstar, secondIndex) => {
      console.log(firstIndex, secondIndex);
      if (firstIndex >= secondIndex) {
        otherstar.classList.add("active");
      }
    });
    document.querySelector("span").innerHTML = `<p>${firstIndex + 1} of 5</p>`;
  });
});
