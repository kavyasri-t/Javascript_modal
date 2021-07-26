const closeModal = function () {
  document.querySelector(".container").hidden = true;
  document.querySelector(".overlay").hidden = true;
};

document.querySelector(".btn-primary").addEventListener("click", function () {
  document.querySelector(".container").removeAttribute("hidden");
  document.querySelector(".overlay").removeAttribute("hidden");
});

document.querySelector(".close").addEventListener("click", closeModal);

document.querySelector(".overlay").addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !document.querySelector(".container").hidden) {
    closeModal();
  }
});
