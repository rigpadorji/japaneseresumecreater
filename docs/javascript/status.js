function circleStatus(selectedStatus) {
  const married = document.getElementById("married");
  const unmarried = document.getElementById("umarried");
  //const divorced = document.getElementById("divorced");

  // Remove previous circles
  married.classList.remove("circled");
  unmarried.classList.remove("circled");

  // Add circle based on selection
  if (selectedStatus === "Married") {
    married.classList.add("circled");
  } else if(selectedStatus === "Unmarried") {
    unmarried.classList.add("circled");
  }
}

// On page load: read URL param and update
const selectedStatus = urlParams.get("marriage");

if (selectedStatus) {
  circleStatus(selectedStatus);
}
