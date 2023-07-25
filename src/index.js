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
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

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
          
        </div>
        <a href="index.html" class="allCities">All cities</a>`;
}
//setInterval(changeCity, 1000);
updateTime();
setInterval(updateTime, 1000);

let cityElement = document.querySelector("#cities");
cityElement.addEventListener("change", changeCity);
