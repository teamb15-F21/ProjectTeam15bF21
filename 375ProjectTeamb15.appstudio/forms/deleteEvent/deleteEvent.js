
btnDelete.onclick=function(){
  let eventName = inptEventDelete.value
  let query = "DELETE FROM to_do_list_events WHERE event_name = '" + eventName + "' "
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=375groupb15&query=" + query)
    if (req.status == 200) {
        if (req.responseText == 500)
            lblMessageDelete.textContent = "You have successfully deleted an event!"
        else
            lblMessageDelete.textContent = "Error"
    } else 
        lblMessageDelete.textContent = "Error"
}


deleteEvent.onshow=function(){
   hbmMenu.clear()
   hbmMenu.addItem("Home")
   hbmMenu.addItem("Weather")
   hbmMenu.addItem("Login")
}

hbmMenu.onclick=function(s){
  if(typeof(s) == "object"){
    return
  } else
  switch(s){
    case "Home":
      ChangeForm(homePage)
      break
    case "Weather":
      ChangeForm(weatherAPI)
      break
    case "Login":
      ChangeForm(loginPage)
      break
      }
    }

