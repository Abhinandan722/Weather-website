let btn = document.querySelector("#search_btn")
let input = document.querySelector("#input_box")
let  weather_body = document.querySelector(".weather_body")
let temp = document.querySelector(".temp")
let discription = document.querySelector(".discription ")
let percent= document.querySelector(".percent  ")
let wind_speed = document.querySelector(".wind_speed ")
let location_not_found =document.querySelector(".location_not_found" )
let image =document.querySelector(".image")  
let image_all =document.querySelector(".image_all" )
let weather_detial =document.querySelector(".weather_detial" )  
let  dis_temp =document.getElementsByClassName("temp_dis") 
let  last_section =document.getElementsByClassName("last_section") 

//-------------------------------all reffrence complete------------------------------------------------
    
if(input.value ==""){
  
   location_not_found.style.display="none"
   weather_detial.style.display="none"
   image.style.display="none"
}

  async function check_weather(city){
    const api_key = "822db7da369c5526e59efb08834c589b"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    let weather_data = await fetch(`${url}`).then(Response=> Response.json())

  console.log(weather_data)

  

  if(weather_data.cod=='404'){
    location_not_found.style.display= "flex"
    image.style.display= "none"
    weather_detial.style.display="none"

  }
  else{
                                                            //my project    

    location_not_found.style.display= "none"
    image.style.display= "flex"
    weather_detial.style.display="flex"

         if(weather_data.weather[0].main =='Haze'){
       image.src = "image/Haze.png"
      
      }

     else if(weather_data.weather[0].main=='Rain')  
     { 
      image.src = "image/rain.png"
    }
    else if(weather_data.weather[0].main=='Mist') 
     {    image.src = "image/mist.png" }


    else if(weather_data.weather[0].main=='Clouds') 
     {    image.src = "image/cloud.png" }


    else if(weather_data.weather[0].main=='Clear')
    {
      image.src ="image/clear.png"
    }



  temp.innerText= Math.round (`${weather_data.main.temp-273.1}`)
  discription.innerText=(weather_data.weather[0].main)
  percent.innerText=`${weather_data.main.humidity}%`
  wind_speed.innerText=`${weather_data.wind.speed}Km/H` 

  }
  console.log(weather_data)

}
//-------------------------------function call---------------------------------------------
 
btn.addEventListener("click",()=>{
  check_weather(input.value);
})

window.onload = (event) => {
  console.log("page is fully loaded");
};




 