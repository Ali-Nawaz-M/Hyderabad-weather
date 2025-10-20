// Weather data (your provided JSON)
const weatherData = {
    "lat":33.44,
    "lon":-94.04,
    "timezone":"America/Chicago",
    "current":{
       "temp":292.55,
       "feels_like":292.87,
       "pressure":1014,
       "humidity":89,
       "wind_speed":3.13,
       "wind_deg":93,
       "weather":[
          {
             "main":"Clouds",
             "description":"broken clouds",
             "icon":"04d"
          }
       ]
    }
 };
 
 // Convert Kelvin → Celsius
 function kToC(tempK) {
   return (tempK - 273.15).toFixed(1);
 }
 
 function showWeather() {
   const current = weatherData.current;
   const temp = kToC(current.temp);
   const feels = kToC(current.feels_like);
   const desc = current.weather[0].description;
   const humidity = current.humidity;
   const wind = current.wind_speed;
   const pressure = current.pressure;
 
   document.getElementById("weather").innerHTML = `
     <p><b> Temperature:</b> ${temp}°C</p>
     <p><b> Feels Like:</b> ${feels}°C</p>
     <p><b> Condition:</b> ${desc}</p>
     <p><b> Humidity:</b> ${humidity}%</p>
     <p><b>Wind Speed:</b> ${wind} m/s</p>
     <p><b>Pressure:</b> ${pressure} hPa</p>
   `;
 }
 
 // Run when page loads
 window.onload = showWeather;

 
