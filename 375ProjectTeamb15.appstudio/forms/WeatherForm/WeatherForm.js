// api key: d7badbe068cf5365bd653f12622a54c7
let weather = "" // global variable to hold API returned data
// city variable will default to Omaha if user doesn't type a city
let city = "Omaha"

function getWeather() {
  let key = 'd7badbe068cf5365bd653f12622a54c7'
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city+ '&units=imperial&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {freeData(data) })
  .catch(function() {
    // catch any errors
  })
}

// line 9   .then(function(data) {console.log(data) })


function freeData(apiData) {
    // just getting temp for proof of concept
    console.log(`in freeData, main.temp is ${apiData.main.temp}`)
    // put api data into global variable so can use in other forms
    weather = apiData  
}

btnSubmitCity.onclick=function(){
  getWeather()
}

btnShowWeather.onclick=function(){
  ChangeForm(showData)
}

inptCity.onchange=function(){
  // gets the city as soon as user inputs it
  city = inptCity.value
}


//api.openweathermap.org/data/2.5/weather?appid=d7badbe068cf5365bd653f12622a54c7&units=imperial&q=Omaha



