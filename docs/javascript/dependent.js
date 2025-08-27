function circleDependent(selectedDependent) {
  const dependent = document.getElementById("dependent");
  const undependent =document.getElementById("undependent");

  // Remove previous circles
  dependent.classList.remove("circled");
  undependent.classList.remove("circled");

  // Add circle based on selection
  if (selectedDependent === "yes") {
    dependent.classList.add("circled");
  } else if (selectedDependent === "no") {
    undependent.classList.add("circled");
  }
}

// On page load: read URL param and update
const selectedDependent = urlParams.get("childyes");

if (selectedDependent) {
  circleDependent(selectedDependent);
}
