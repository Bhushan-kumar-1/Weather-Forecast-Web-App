const inputBox=document.querySelector('.input-box');
const search_Btn=document.getElementById('searchBtn');
const weather_img=document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature');
const description= document.querySelector('.description');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind-speed');

//const location_not_found=document.querySelector('.location-not-found');
//const weather_body=document.querySelector('.weather-body');

async function checkweather(city){
    const api_key ="70cc6e146c93ac24b1c295dbb21901a4";
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data=await fetch(`${url}`).then(response=>response.json());

    // if(weather_data.cod === `404`){
    //     //location_not_found.style.dispay = "flex";
    //     weather_body.style.dispay = "flex";
    //     console.log("error");
    //     return;
    // }

    // location_not_found.style.dispay = "none";
    // weather_body.style.dispay = "flex";


    //console.log(weather_data);
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

    description.innerHTML=`${weather_data.weather[0].description}`;

    humidity.innerHTML=`${weather_data.main.humidity}%`;
    
    wind_speed.innerHTML=`${weather_data.wind.speed}kph`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/assets/cloud.png";
            break;
        case 'Clear':
            weather_img.src ="/assets/clears.png";
            break;
        case 'Mist':
            weather_img.src = "/assets/mist.png";
            break;
        case 'Rain':
            weather_img.src = "/assets/rain.png";
            break;
        case 'Snow':
            weather_img.src = "/assets/snow.png";
            break;
    }

}
searchBtn.addEventListener('click',()=>{
    checkweather(inputBox.value);
})