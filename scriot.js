const API_KEY = `35effb77526f3e5ab49175a60e25417a`
const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const  weatherIcon = document.querySelector(".weather-icon");
 
// we have to give city variable in box bt our api not actived yet so..
const getweather = async(city) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7e369b3761c290298298bf2b8b1768a9&units=metric`
    const respone = await fetch(url);
    
    
    if(respone.status==404)
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display = "none";
   
    }

    else{
      let data = await respone.json();
      console.log(data)
   document.querySelector(".city").innerHTML = data.name ;
   document.querySelector(".temp").innerHTML = data.main.temp + "°C";
   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
   document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
   
   
   
   if(data.weather[0].main=="cloud")
   {
      weatherIcon.src = "images/clouds.png"
   }
   
   else if (data.weather[0].main=="clear")
   {
       weatherIcon.src = "images/clear.png"
   }
   
   
   else if (data.weather[0].main=="Drizzle")
   {
       weatherIcon.src = "images/drizzle.png"
   }
   
   else if (data.weather[0].main=="Rain")
   {
       weatherIcon.src = "images/rain.png"
   }
   
   
   else if (data.weather[0].main=="Mist")
   {
       weatherIcon.src = "images/mist.png"
   }

     else if (data.weather[0].main=="snow")
     {
       weatherIcon.src = "images/snow.png"
     }
     
   
     
     document.querySelector(".weather").style.display = "block";
     document.querySelector(".error").style.display="none";
   
    }

   
     
      // console.log(data);
  
 
}


searchbtn.addEventListener("click", ()=>{

  // after gettin api we have to used getwearther(searchBox.value)
  getweather(searchBox.value);
});






 




