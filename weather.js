let cityName = document.querySelector(".container .search-box input");
let weather_img = document.querySelector(".container .weather-img img");
let weatherMain = document.querySelector(".container .weather_main_1");
let weatherDescrip = document.querySelector(".container .weather-descrip");
let temp = document.querySelector(".container .temp");
let otehrDetails = document.querySelector(".container .other-details");
let searchBtn = document.querySelector(".container .search-box button");
let weatherLocation = document.querySelector(".container .weather-location");

//  to create this weather app we will use openWeatherMap Api
// follow this step to get ur Api key
// step 1 - Open ur browser and searchn openweathermap
// step 2 - If u don't have any account then create a new free account by clicking on signUp
// Step 3 - After Signin/signUP click on your account > Api keys
// step 4 - now create ur api keys
let apiKey = "3dc2ea13ee277145ff7abb8359a16227";

let getWeatherDetails =()=>{
    let city = cityName.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url).then((res) => res.json()).then((data)=>{
        // console.log(data);
        weather_img.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        weatherMain.innerHTML = data.weather[0].main;
        weatherDescrip.innerHTML = data.weather[0].description;
        weatherLocation.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.name}`;
        temp.innerHTML = `${data.main.temp}&#176;`;
        otehrDetails.innerHTML = `
    <div>
        <span>Feels Like</span>
        <p>${data.main.feels_like}&#176;</p>
    </div>
    <div>
        <span>Min Temp</span>
        <p>${data.main.temp_min}&#176;</p>
    </div>
    <div>
        <span>Humidity</span>
        <p>${data.main.humidity}%</p>
    </div>
    <div>
        <span>Wind Speed</span>
        <p>${data.wind.speed}Km/H</p>
    </div>
    <div>
        <span>Max Temp</span>
        <p>${data.main.temp_max}&#176</p>
    </div>
    <div>
        <span>Pressure</span>
        <p>${data.main.pressure}mbar</p>
    </div>`;
    })
}
searchBtn.addEventListener("click",()=>{
    if(cityName.value != ""){
        getWeatherDetails();
    }
})

getWeatherDetails();
