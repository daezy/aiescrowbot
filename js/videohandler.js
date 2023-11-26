const imagePlay = document.getElementById("playImg");
const videoPlay = document.getElementById("playVid");

imagePlay.addEventListener("click", () => {
  imagePlay.classList.add("d-none");
  videoPlay.classList.remove("d-none");
});
