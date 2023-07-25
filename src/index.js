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
