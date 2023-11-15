document.addEventListener("DOMContentLoaded", function() {
  async function fetchData() {
    const baseUrl = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
    const headers = {
      'X-RapidAPI-Key': 'a8f5adee7fmsh4ab1bff02f213fep138401jsn43eed19d96c3',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
      'Content-Type': 'application/json',
    };
  
    const getWeather = async (city) => {
      const url = baseUrl + encodeURIComponent(city); // Construct URL with dynamic city
      cityName.innerHTML = city;
      try {
        const response = await fetch(url, { method: 'GET', headers });
        const data = await response.json();
        console.log(data);
    
        // Access properties from the parsed JSON data
        //cloud_pct.innerHTML = data.cloud_pct;
        temp.innerHTML = data.temp;
        temp1.innerHTML = data.temp;
        feels_like.innerHTML = data.feels_like;
        humidity.innerHTML = data.humidity;
        humidity1.innerHTML = data.humidity;
        min_temp.innerHTML = data.min_temp;
        max_temp.innerHTML = data.max_temp;
        wind_speed.innerHTML = data.wind_speed;
        wind_speed1.innerHTML = data.wind_speed;
        wind_degrees.innerHTML = data.wind_degrees;
        sunrise.innerHTML = data.sunrise;
        sunset.innerHTML = data.sunset;
      } catch (error) {
        console.error(error);
      }
    }


    
  
    submit.addEventListener("click", (e) => {
      e.preventDefault()
      getWeather(city.value);
    })
  
    getWeather("Delhi");

    try {
      const directUrl1 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Vijayawada';
      const response1 = await fetch(directUrl1, { method: 'GET', headers });
      const vij = await response1.json();
    
      // Access properties from the parsed JSON data
      
      vij_temp.innerHTML = vij.temp;
      vij_feels_like.innerHTML = vij.feels_like;
      vij_humidity.innerHTML = vij.humidity;
      vij_min_temp.innerHTML = vij.min_temp;
      vij_max_temp.innerHTML = vij.max_temp;
      vij_wind_speed.innerHTML = vij.wind_speed;
      vij_wind_degrees.innerHTML = vij.wind_degrees;
      vij_sunrise.innerHTML = vij.sunrise;
      vij_sunset.innerHTML = vij.sunset;
    } catch (error) {
      console.error(error);
    }

    try {
      const directUrl2 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore';
      const response2 = await fetch(directUrl2, { method: 'GET', headers });
      const banglore = await response2.json();
    
      // Access properties from the parsed JSON data
      
      banglore_temp.innerHTML = banglore.temp;
      banglore_feels_like.innerHTML = banglore.feels_like;
      banglore_humidity.innerHTML = banglore.humidity;
      banglore_min_temp.innerHTML = banglore.min_temp;
      banglore_max_temp.innerHTML = banglore.max_temp;
      banglore_wind_speed.innerHTML = banglore.wind_speed;
      banglore_wind_degrees.innerHTML = banglore.wind_degrees;
      banglore_sunrise.innerHTML = banglore.sunrise;
      banglore_sunset.innerHTML = banglore.sunset;
    } catch (error) {
      console.error(error);
    }
    
    try {
      const directUrl3 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
      const response3 = await fetch(directUrl3, { method: 'GET', headers });
      const delhi = await response3.json();
    
      // Access properties from the parsed JSON data
      
      delhi_temp.innerHTML = delhi.temp;
      delhi_feels_like.innerHTML = delhi.feels_like;
      delhi_humidity.innerHTML = delhi.humidity;
      delhi_min_temp.innerHTML = delhi.min_temp;
      delhi_max_temp.innerHTML = delhi.max_temp;
      delhi_wind_speed.innerHTML = delhi.wind_speed;
      delhi_wind_degrees.innerHTML = delhi.wind_degrees;
      delhi_sunrise.innerHTML = delhi.sunrise;
      delhi_sunset.innerHTML = delhi.sunset;
    } catch (error) {
      console.error(error);
    }
    
        
    
  }
  

  
  fetchData();
});
