document.getElementById("openModalBtn").addEventListener("click", () => {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("modalContent").style.display = "flex";
  document.getElementById("submittedModalContent").style.display = "none";
});

document.getElementById("closeModalBtn").addEventListener("click", () => {
  document.getElementById("myModal").style.display = "none";
});

document
  .getElementById("submittedCloseModalBtn")
  .addEventListener("click", () => {
    document.getElementById("myModal").style.display = "none";
  });

document.getElementById("discount").addEventListener("click", () => {
  document.getElementById("modalContent").style.display = "none";
  document.getElementById("submittedModalContent").style.display = "flex";
});

document
  .getElementById("submittedCloseModalBtn")
  .addEventListener("click", () => {
    document.getElementById("myModal").style.display = "none";
  });

// Change background color
var root = document.documentElement;
root.style.setProperty("--bg", "lightblue"); // Set your color instead of second parameter
