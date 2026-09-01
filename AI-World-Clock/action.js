function updateTime() {
  let detroitElement = document.querySelector("#detroit");
  let detroitDate1Element = detroitElement.querySelector(".date1");
  let detroitTime1Element = detroitElement.querySelector(".time1");
  let detroitTime = moment().tz("America/Detroit");

  detroitDate1Element.innerHTML = detroitTime.format("MMMM Do YYYY");
  detroitTime1Element.innerHTML = `${detroitTime.format("h:mm:ss:SSS")}<small> ${detroitTime.format("A")} </small>`;

  let bangkokElement = document.querySelector("#bangkok");
  let bangkokDate1Element = bangkokElement.querySelector(".date1");
  let bangkokTime1Element = bangkokElement.querySelector(".time1");
  let bangkokTime = moment().tz("Asia/Bangkok");

  bangkokDate1Element.innerHTML = bangkokTime.format("MMMM Do YYYY");
  bangkokTime1Element.innerHTML = `${bangkokTime.format("h:mm:ss:SSS")}<small> ${bangkokTime.format("A")} </small>`;
}

updateTime();
setInterval(updateTime, 1);
