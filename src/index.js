//It is Saturday, October 8, 2023 2:51 PM in Europe/Paris

/*function showTime(event) {
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
countriesSelect.addEventListener("change", showTime);*/

function updateTime() {
  let londonDate = document.querySelector("#london .date");
  let londonTime = document.querySelector("#londonTime");
  if (londonDate && londonTime) {
    londonDate.innerHTML = moment().tz("Europe/London").format("MMMM Do YYYY");
    londonTime.innerHTML = moment()
      .tz("Europe/London")
      .format("h:mm:ss [<small>]A[</small>]");
  }

  let newYorkDate = document.querySelector("#newYork .date");
  let newYorkTime = document.querySelector("#newYorkTime");
  if (newYorkDate && newYorkTime) {
    newYorkDate.innerHTML = moment()
      .tz("America/New_York")
      .format("MMMM Do YYYY");
    newYorkTime.innerHTML = moment()
      .tz("America/New_York")
      .format("h:mm:ss [<small>]A[</small>]");
  }

  let romeDate = document.querySelector("#rome .date");

  let romeTime = document.querySelector("#romeTime");

  if (romeDate && romeTime) {
    romeDate.innerHTML = moment().tz("Europe/Rome").format("MMMM Do YYYY");
    romeTime.innerHTML = moment()
      .tz("Europe/Rome")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}

function changeCity(event) {
  event.preventDefault();
  let cityTimeZone = event.target.value;

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#city-time");
  cityElement.innerHTML = `
  <div class="city-time-info">
          <div class="cityName" >
            ${cityName}<br /><span class="date">${cityTime.format(
    "MMMM Do YYYY"
  )}</span>
          </div>
          <div class="time" >
            ${cityTime.format("h:mm:ss [<small>]A[</small>]")}
          </div>
        </div>`;
}
//setInterval(changeCity, 1000);
updateTime();
setInterval(updateTime, 1000);

let cityElement = document.querySelector("#cities");
cityElement.addEventListener("change", changeCity);
