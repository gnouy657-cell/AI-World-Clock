function updateTime() {
  let detroitElement = document.querySelector("#detroit");
  if (detroitElement) {
    let detroitDate1Element = detroitElement.querySelector(".date1");
    let detroitTime1Element = detroitElement.querySelector(".time1");
    let detroitTime = moment().tz("America/Detroit");

    detroitDate1Element.innerHTML = detroitTime.format("MMMM Do YYYY");
    detroitTime1Element.innerHTML = `${detroitTime.format("h:mm:ss:SSS")}<small> ${detroitTime.format("A")} </small>`;
  }

  let bangkokElement = document.querySelector("#bangkok");
  if (bangkokElement) {
    let bangkokDate1Element = bangkokElement.querySelector(".date1");
    let bangkokTime1Element = bangkokElement.querySelector(".time1");
    let bangkokTime = moment().tz("Asia/Bangkok");

    bangkokDate1Element.innerHTML = bangkokTime.format("MMMM Do YYYY");
    bangkokTime1Element.innerHTML = `${bangkokTime.format("h:mm:ss:SSS")}<small> ${bangkokTime.format("A")} </small>`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current 🌳") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#world");

  citiesElement.innerHTML = `
    <div class="cities" id="${cityTimeZone}">
      <div>
        <h2>${cityName}</h2>
        <div class="date1">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time1">
        ${cityTime.format("h:mm:ss:SSS")}
        <small>${cityTime.format("A")}</small>
      </div>
    </div>
    <a href="/"> Back to all cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1);

let citySelectElement = document.querySelector("#city");

citySelectElement.addEventListener("change", updateCity);
