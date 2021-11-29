
let query =''
let req={}
netID = 'jaf32246'
let pw = '1396Cr247!'
let results = []

btn.onclick=function(){
  event_name = inptEvent.value
  description = inptDescription.value
  street = inptStreet.value
  city = inptCity.value
  state = inptState.value
  zipcode = inptZipcode.value
  dates = inptDate.value
  times = inptTime.value
  trip = inptTrip.value
  query = "INSERT INTO to_do_list_events (event_name,description,street,city,state,zipcode,date,time,trip) VALUES ('" + event_name + "', '" + description + "', '" + street + "', '" + city + "', '" + state + "', '" + zipcode + "', '" + dates + "', '" + times + "', '" + trip + "')"
  alert(query)
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=375groupb15&query=" + query)

  if (req.status == 200) {
    if (req.responseText == 500){
      let message = ""
      for (i = 0; i < results.length; i++)
        message = message + results[i][1] + "\n"
      lblAdd.value = message
      }
  } else
    lblAdd.value = "Error: " + req.status
}
