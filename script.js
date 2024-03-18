const circular_slider = document.querySelector(".wrapper"),
  color_name = document.querySelectorAll(".color-name") /*h1 class */,
  slides = document.querySelectorAll(".slides"),
  desc_item = document.querySelectorAll(".desc-item"),
  images = document.querySelectorAll(".slides img");

slides.forEach((slide, i) => {
  slide.onclick = () => {
    circular_slider.style.transform = `rotateZ(-${(360 / 5) * (i + 4)}deg)`;
    // Update text content for each color name
    color_name.forEach((name, index) => {
      name.classList.remove("active");
      setTimeout(() => {
        name.textContent = desc_item[i].querySelector("h1").textContent;
        name.classList.add("active");
      }, 800);
    });

    images.forEach((img, i) => {
      // align angle of circles, 2(the angle of img no 2)
      img.style.setProperty("--img-no", 2);
      img.classList.remove("active");
      desc_item[i].classList.remove("active");
    });

    desc_item[i].classList.add("active");
    slide.querySelector("img").classList.add("active");
  };
});
