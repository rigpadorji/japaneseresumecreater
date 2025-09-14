
function goNext() {
  // collect all textarea values inside #extra + the first one
  const textareas = document.querySelectorAll("textarea");
  let values = [];

  textareas.forEach(t => {
    if (t.value.trim() !== "") {
      values.push(t.value.trim());
    }
  });

  // join into one string (or you can JSON encode like earlier)
  const totextarea = values.join("||"); // use "||" as separator
  const display = "resume.html?totextarea=" + encodeURIComponent(totextarea);

  // redirect to next page
  window.location.href = display;
}
