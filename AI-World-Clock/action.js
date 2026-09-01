function updateTime() {
  document.querySelectorAll(".cities").forEach(function (city) {
    let timeZone = city.id;
    let cityTime = moment().tz(timeZone);

    city.querySelector(".date1").innerHTML =
      cityTime.format("dddd, MMMM Do YYYY");

    city.querySelector(".time1").innerHTML =
      `${cityTime.format("h:mm:ss")}<small> ${cityTime.format("A")} </small>`;

    if (city.id !== "America/Detroit") {
      city.querySelector(".difference").innerHTML = getTimeDifference(timeZone);
    }
  });
}

function getTimeDifference(timeZone) {
  let difference =
    (moment().tz(timeZone).utcOffset() -
      moment().tz("America/Detroit").utcOffset()) /
    60;

  if (difference === 0) {
    return "Same time as Detroit";
  }

  if (difference > 0) {
    return `+${difference} hour${difference === 1 ? "" : "s"} from Detroit`;
  }

  return `${Math.abs(difference)} hour${
    difference === -1 ? "" : "s"
  } behind Detroit`;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.split("/").pop().replace("_", " ");

  if (cityTimeZone === "Australia/Sydney") cityName = "Sydney 🦘";
  if (cityTimeZone === "Asia/Vientiane") cityName = "Vientiane 🙏";
  if (cityTimeZone === "America/New_York") cityName = "New York 🗽";
  if (cityTimeZone === "America/Detroit") cityName = "Detroit 🚗";
  if (cityTimeZone === "America/Chicago") cityName = "Chicago 🌆";

  let cityTime = moment().tz(cityTimeZone);

  document.querySelector("#world").innerHTML = `
    <div class="cities" id="${cityTimeZone}">
      <div class="city-info">
        <h2>${cityName}</h2>
        <div class="timezone">${cityTimeZone.split("/")[0]}</div>
        <div class="date1">${cityTime.format("dddd, MMMM Do YYYY")}</div>
        <div class="difference">${getTimeDifference(cityTimeZone)}</div>
      </div>

      <div class="time1">
        ${cityTime.format("h:mm:ss")}
        <small>${cityTime.format("A")}</small>
      </div>
    </div>

    <button
      id="backButton"
      class="back-link"
      type="button">
      ← Back to all cities
    </button>
  `;

  document.querySelector("#backButton").addEventListener("click", function () {
    location.reload();
  });

  document.querySelector("#city").value = "";
}

updateTime();
setInterval(updateTime, 1000);

document.querySelector("#city").addEventListener("change", updateCity);

let themeToggle = document.querySelector("#themeToggle");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeToggle.innerHTML = "☀️";
  } else {
    themeToggle.innerHTML = "🌙";
  }
});
