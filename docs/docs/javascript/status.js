document.addEventListener("DOMContentLoaded", function() {
  const data = JSON.parse(localStorage.getItem("resumeData")) || {};
  const married = document.getElementById("married");
  const unmarried = document.getElementById("unmarried");

  // Remove previous circles
  married.classList.remove("circled");
  unmarried.classList.remove("circled");

  // Circle the saved value
  if (data.marriage === "Married") {
    married.classList.add("circled");
  } else if (data.marriage === "Unmarried") {
    unmarried.classList.add("circled");
  }
});