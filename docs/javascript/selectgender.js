function circleGender(selectedSex) {
  const maleChar = document.getElementById("maleChar");
  const femaleChar = document.getElementById("femaleChar");

  // Remove previous circles
  maleChar.classList.remove("circled");
  femaleChar.classList.remove("circled");

  // Add circle based on selection
  if (selectedSex === "male") {
    maleChar.classList.add("circled");
  } else if (selectedSex === "female") {
    femaleChar.classList.add("circled");
  }
}

// On page load: read URL param and update
const urlParams = new URLSearchParams(window.location.search);
const selectedSex = urlParams.get("sex");

if (selectedSex) {
  circleGender(selectedSex);
}