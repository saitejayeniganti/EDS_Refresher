("use strict");

async function fetchCityName(position) {
  const response = await fetch(
    `https://reverse-geocoding-to-city.p.rapidapi.com/data/reverse-geocode?longitude=${position.coords.longitude}&latitude=${position.coords.latitude}&localityLanguage=en`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "reverse-geocoding-to-city.p.rapidapi.com",
        "x-rapidapi-key": "9e4eb83416msh715c2c7e3854829p1edd4ajsnd0495014ab40",
      },
    }
  );

  const returnValue = await response.json();

  getDetails(returnValue.city);
}

const getDetails = async (name) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=9bcd107d6ccee2dd2dbc24747df86a8b`,
    {
      method: "GET",
    }
  );
  let res = response.json();
  res.then((resp) => {
    document.getElementById("blocks").innerHTML = "";

    let title = document.createElement("h2");
    title.innerHTML = `5 day weather forecast for ${name} city.`;
    document.getElementById("blocks").appendChild(title);

    for (detail of resp.list) {
      //console.log(detail);
      let div = document.createElement("div");
      div.id = "container" + detail.dt_txt;
      div.className = "weather";
      document.getElementById("blocks").appendChild(div);
      //   document.body.appendChild(div);

      let date = resp.list[1].dt_txt;
      let maxTemp =
        Math.round(((detail.main.temp_max - 273.15) * 9) / 5 + 32) + " \u00B0F";
      let minTemp =
        Math.round(((detail.main.temp_min - 273.15) * 9) / 5 + 32) + " \u00B0F";
      let main = detail.weather[0].main;
      let desc = detail.weather[0].description;
      let speed = Math.round(detail.wind.speed * 1.15078) + " Mph";

      let para = document.createElement("p");
      para.innerHTML = `<b>${date} - ${main}</b><br/><b>Max Temp.</b>&nbsp${maxTemp}<br/><b>Min Temp.</b>   ${minTemp}<br/><b>Wind Speed</b>${speed}<br/>`;

      document.getElementById("container" + detail.dt_txt).appendChild(para);
    }
  });
};

function locSearch() {
  const success = (position) => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);

    let name = document.getElementById("search").value;
    if (name == "") {
      fetchCityName(position);
    } else {
      getDetails(name);
    }
  };
  const failure = (error) => {
    console.error(error);
  };
  navigator.geolocation.getCurrentPosition(success, failure);
}

function login() {
  sessionStorage.Storage.clear();
  window.location.href = "/Login/login.html";
}
