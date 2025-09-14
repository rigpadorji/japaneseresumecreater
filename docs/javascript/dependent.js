
document.addEventListener("DOMContentLoaded", function() {
  // Load saved resume data
  const data = JSON.parse(localStorage.getItem("resumeData")) || {};

  const dependent = document.getElementById("dependent");
  const undependent = document.getElementById("undependent");

  if (!dependent || !undependent) return;

  // Remove previous circles
  dependent.classList.remove("circled");
  undependent.classList.remove("circled");

  // Add circle based on saved marriage status
  if (data.childyes  === "yes") {
    dependent.classList.add("circled");
  } else if (data.childyes  === "no") {
    undependent.classList.add("circled");
  }
});
