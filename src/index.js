//It is Saturday, October 8, 2023 2:51 PM in Europe/Paris

function showTime(event) {
  if (event.target.value === "paris") {
    let parisTime = moment()
      .tz("Europe/Paris")
      .format("dddd, MMMM D, YYYY h:m A");
    alert(`It is ${parisTime} in Europe/Paris`);
  }
  if (event.target.value === "tokyo") {
    let tokyoTime = moment()
      .tz("Asia/Tokyo")
      .format("dddd, MMMM D, YYYY h:m A");
    alert(`It is ${tokyoTime} in Asia/Tokyo`);
  }
  if (event.target.value === "sydney") {
    let sydneyTime = moment()
      .tz("Australia/Sydney")
      .format("dddd, MMMM D, YYYY h:m A");
    alert(`It is ${sydneyTime} in Australia/Sydney`);
  }
}
let countriesSelect = document.querySelector("#countries");
countriesSelect.addEventListener("change", showTime);

function updateTime() {
  let londonElement = document.querySelector("#london");
  let londonDate = document.querySelector("#london .date");
  londonDate.innerHTML = moment().tz("Europe/London").format("MMMM Do YYYY");
  let londonTime = document.querySelector("#londonTime");

  londonTime.innerHTML = moment()
    .tz("Europe/London")
    .format("h:mm:ss [<small>]A[</small>]");

  let newYorkElement = document.querySelector("#newYork");
  let newYorkDate = document.querySelector("#newYork .date");
  newYorkDate.innerHTML = moment()
    .tz("America/New_York")
    .format("MMMM Do YYYY");
  let newYorkTime = document.querySelector("#newYorkTime");

  newYorkTime.innerHTML = moment()
    .tz("America/New_York")
    .format("h:mm:ss [<small>]A[</small>]");

  let romeElement = document.querySelector("#rome");
  let romeDate = document.querySelector("#rome .date");
  romeDate.innerHTML = moment().tz("Europe/Rome").format("MMMM Do YYYY");
  let romeTime = document.querySelector("#romeTime");

  romeTime.innerHTML = moment()
    .tz("Europe/Rome")
    .format("h:mm:ss [<small>]A[</small>]");
}
setInterval(updateTime, 1000);
