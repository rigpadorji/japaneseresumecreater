document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("myform").addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect all form data in an object
    const data = {
      year: document.getElementById("year").value,
      month: document.getElementById("month").value,
      date: document.getElementById("date").value,
      furigana: document.getElementById("furigana").value,
      romaji: document.getElementById("romaji").value,
      dobyear: document.getElementById("dobyear").value,
      dobmonth: document.getElementById("dobmonth").value,
      dobdate: document.getElementById("dobdate").value,
      sex: document.querySelector('input[name="sex"]:checked')?.value || "",
      addinfurigana: document.getElementById("addinfurigana").value,
      addinromaji: document.getElementById("addinromaji").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,

      collegeyear1: document.getElementById("collegeyear1").value,
      collegemonth1: document.getElementById("collegemonth1").value,
      collegeyear2: document.getElementById("collegeyear2").value,
      collegemonth2: document.getElementById("collegemonth2").value,
      collegename: document.getElementById("collegename").value,

      schoolyear1: document.getElementById("schoolyear1").value,
      schoolmonth1: document.getElementById("schoolmonth1").value,
      schoolyear2: document.getElementById("schoolyear2").value,
      schoolmonth2: document.getElementById("schoolmonth2").value,
      schoolname: document.getElementById("schoolname").value,

      skillyear1: document.getElementById("skillyear1").value,
      skillmonth1: document.getElementById("skillmonth1").value,
      skillyear2: document.getElementById("skillyear2").value,
      skillmonth2: document.getElementById("skillmonth2").value,
      skillname: document.getElementById("skillname").value,

      work1year1: document.getElementById("work1year1").value,
      work1month1: document.getElementById("work1month1").value,
      work1year2: document.getElementById("work1year2").value,
      work1month2: document.getElementById("work1month2").value,
      work1name: document.getElementById("work1name").value,

      work2year1: document.getElementById("work2year1").value,
      work2month1: document.getElementById("work2month1").value,
      work2year2: document.getElementById("work2year2").value,
      work2month2: document.getElementById("work2month2").value,
      work2name: document.getElementById("work2name").value,

      work3year1: document.getElementById("work3year1").value,
      work3month1: document.getElementById("work3month1").value,
      work3year2: document.getElementById("work3year2").value,
      work3month2: document.getElementById("work3month2").value,
      work3name: document.getElementById("work3name").value,

      licence1year: document.getElementById("licence1year").value,
      licence1month: document.getElementById("licence1month").value,
      licence1name: document.getElementById("licence1name").value,

      licence2year: document.getElementById("licence2year").value,
      licence2month: document.getElementById("licence2month").value,
      licence2name: document.getElementById("licence2name").value,

      licence3year: document.getElementById("licence3year").value,
      licence3month: document.getElementById("licence3month").value,
      licence3name: document.getElementById("licence3name").value,

      hour: document.getElementById("hour").value,
      minute: document.getElementById("minute").value,
      marriage: document.getElementById("marriage").value,
      childyes: document.getElementById("childyes").value,
      child: document.getElementById("child").value,
      appealpoint: document.getElementById("appealpoint").value,
      myImage: uploadedImage || ""
    };

    // Save to localStorage
    localStorage.setItem("resumeData", JSON.stringify(data));

    // Redirect to resume.html (or resumedisplay.html)
    window.location.href = "resume.html";
  });
});
