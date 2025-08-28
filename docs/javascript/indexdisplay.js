
document.addEventListener("DOMContentLoaded", function(){
document.getElementById("myform").addEventListener("submit", function(event){
event.preventDefault();
var year = document.getElementById("year").value;
 var month = document.getElementById("month").value;
 var date = document.getElementById("date").value;
 var furigana = document.getElementById("furigana").value;
 var romaji = document.getElementById("romaji").value;
 var dobyear = document.getElementById("dobyear").value;
 var dobmonth = document.getElementById("dobdate").value;
 var dobdate = document.getElementById("dobdate").value;
 
var sex = document.querySelector('input[name="sex"]:checked')?.value || "";
 
 // var male = document.getElementById("male").value;
 //var female = document.getElementById("female").value;
 var addinfurigana = document.getElementById("addinfurigana").value;
  var addinromaji = document.getElementById("addinromaji").value;
  var phone = document.getElementById("phone").value;
   var email = document.getElementById("email").value;
   var collegeyear1 = document.getElementById("collegeyear1").value;
   var collegemonth1 = document.getElementById("collegemonth1").value;
   var collegeyear2 = document.getElementById("collegeyear2").value;
   var collegemonth2 = document.getElementById("collegemonth2").value;
   var collegename =document.getElementById("collegename").value;
  var schoolyear1 = document.getElementById("schoolyear1").value;
   var schoolmonth1 = document.getElementById("schoolmonth1").value;
 var schoolyear2 = document.getElementById("schoolyear2").value;
 var schoolmonth2 = document.getElementById("schoolmonth2").value;
  var schoolname= document.getElementById("schoolname").value;

var skillyear1 = document.getElementById("skillyear1").value;
 var skillmonth1 = document.getElementById("skillmonth1").value;
 var skillyear2 = document.getElementById("skillyear2").value;
 var skillmonth2= document.getElementById("skillmonth2").value;
var skillname = document.getElementById("skillname").value;

var work1year1 = document.getElementById("work1year1").value;
var work1month1 = document.getElementById("work1month1").value;
var work1year2 = document.getElementById("work1year2").value;
var work1month2 = document.getElementById("work1month2").value;
var work1name = document.getElementById("work1name").value;

var work2year1 = document.getElementById("work2year1").value;
var work2month1 = document.getElementById("work2month1").value;
var work2year2 = document.getElementById("work2year2").value;
var work2month2 = document.getElementById("work2month2").value;
var work2name = document.getElementById("work2name").value;

var work3year1 = document.getElementById("work3year1").value;
var work3month1 = document.getElementById("work3month1").value;
var work3year2 = document.getElementById("work3year2").value;
var work3month2 = document.getElementById("work3month2").value;
var work3name = document.getElementById("work3name").value;

var licence1year = document.getElementById("licence1year").value;
var licence1month = document.getElementById("licence1month").value;
var licence1name = document.getElementById("licence1name").value;

var licence2year = document.getElementById("licence2year").value;
var licence2month = document.getElementById("licence2month").value;
var licence2name = document.getElementById("licence2name").value;

var licence3year = document.getElementById("licence3year").value;
var licence3month = document.getElementById("licence3month").value;
var licence3name = document.getElementById("licence3name").value;

var hour = document.getElementById("hour").value;
var minute = document.getElementById("minute").value;
var marriage = document.getElementById("marriage").value;
var childyes = document.getElementById("childyes").value;
var child = document.getElementById("child").value;
var appealpoint = document.getElementById("appealpoint").value;

var myImage = uploadedImage || "";


var display = "resume.html?year=" +  encodeURIComponent(year) +"&month=" + encodeURIComponent(month)+ "&date="+ encodeURIComponent(date)+ "&furigana=" +encodeURIComponent(furigana)+ "&romaji=" +encodeURIComponent(romaji)+"&dobyear="+ encodeURIComponent(dobyear)+"&dobmonth=" + encodeURIComponent(dobmonth)+ "&dobdate=" + encodeURIComponent(dobdate)+"&sex=" + encodeURIComponent(sex)+"&addinfurigana="+ encodeURIComponent(addinfurigana)+"&addinromaji=" +encodeURIComponent(addinromaji)+"&phone=" +encodeURIComponent(phone)+"&email="+encodeURIComponent(email)+"&collegeyear1=" +encodeURIComponent(collegeyear1) + "&collegemonth1=" +encodeURIComponent(collegemonth1)+"&collegeyear2=" +encodeURIComponent(collegeyear2) + "&collegemonth2=" +encodeURIComponent(collegemonth2)+"&collegename=" + encodeURIComponent(collegename)+"&schoolyear1=" +encodeURIComponent(schoolyear1) + "&schoolmonth1=" +encodeURIComponent(schoolmonth1)+"&schoolyear2=" +encodeURIComponent(schoolyear2) + "&schoolmonth2=" +encodeURIComponent(schoolmonth2)+"&schoolname=" + encodeURIComponent(schoolname)+"&skillyear1=" +encodeURIComponent(skillyear1) + "&skillmonth1=" +encodeURIComponent(skillmonth1)+"&skillyear2=" +encodeURIComponent(skillyear2) + "&skillmonth2=" +encodeURIComponent(skillmonth2)+"&skillname=" + encodeURIComponent(skillname)+"&work1year1=" +encodeURIComponent(work1year1) + "&work1month1=" +encodeURIComponent(work1month1)+"&work1year2=" +encodeURIComponent(work1year2) + "&work1month2=" +encodeURIComponent(work1month2)+"&work1name=" + encodeURIComponent(work1name)+"&work2year1=" +encodeURIComponent(work2year1) + "&work2month1=" +encodeURIComponent(work2month1)+"&work2year2=" +encodeURIComponent(work2year2) + "&work2month2=" +encodeURIComponent(work2month2)+"&work2name=" + encodeURIComponent(work2name)+"&work3year1=" +encodeURIComponent(work3year1) + "&work3month1=" +encodeURIComponent(work3month1)+"&work3year2=" +encodeURIComponent(work3year2) + "&work3month2=" +encodeURIComponent(work3month2)+"&work3name=" + encodeURIComponent(work3name)+"&licence1year=" + encodeURIComponent(licence1year)+"&licence1month=" + encodeURIComponent(licence1month)+"&licence1name=" + encodeURIComponent(licence1name)+"&licence2year=" + encodeURIComponent(licence2year)+"&licence2month=" + encodeURIComponent(licence2month)+"&licence2name=" + encodeURIComponent(licence2name)+"&licence3year=" + encodeURIComponent(licence3year)+"&licence3month=" + encodeURIComponent(licence3month)+"&licence3name=" + encodeURIComponent(licence3name)+"&hour=" + encodeURIComponent(hour)+"&minute=" + encodeURIComponent(minute)+"&marriage=" + encodeURIComponent(marriage)+"&childyes=" + encodeURIComponent(childyes)+"&child=" + encodeURIComponent(child)+"&appealpoint=" + encodeURIComponent(appealpoint)+"&myImage=" + encodeURIComponent(myImage);


window.location.href=display;



 
});

});
