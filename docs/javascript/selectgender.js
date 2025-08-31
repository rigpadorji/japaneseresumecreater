<script>
document.addEventListener("DOMContentLoaded", function() {
  function circleGender(selectedSex) {
    const maleChar = document.getElementById("maleChar");
    const femaleChar = document.getElementById("femaleChar");

    if (!maleChar || !femaleChar) return; // safety

    maleChar.classList.remove("circled");
    femaleChar.classList.remove("circled");

    if (selectedSex === "male") {
      maleChar.classList.add("circled");
    } else if (selectedSex === "female") {
      femaleChar.classList.add("circled");
    }
  }

  const urlParams = new URLSearchParams(window.location.search);
  const selectedSex = urlParams.get("sex");

  if (selectedSex) {
    circleGender(selectedSex);
  }
});
</script>
