document.addEventListener("DOMContentLoaded", function() {
  // Load saved resume data
  const data = JSON.parse(localStorage.getItem("resumeData")) || {};

  const maleChar = document.getElementById("maleChar");
  const femaleChar = document.getElementById("femaleChar");

  if (!maleChar || !femaleChar) return;

  maleChar.classList.remove("circled");
  femaleChar.classList.remove("circled");

  if (data.sex === "male") {
    maleChar.classList.add("circled");
  } else if (data.sex === "female") {
    femaleChar.classList.add("circled");
  }
});