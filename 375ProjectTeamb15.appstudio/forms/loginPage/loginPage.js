
btnLogin.onclick=function(){
  let username = inptUsernameLogin.value
  let password = inptPasswordLogin.value
  let query = "SELECT password FROM member WHERE username ='" + username + "'"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=375groupb15&query=" + query)
    if (req.status == 200) {
        if (username == username && password == password)
          ChangePage(homePage)
        else
          lblError.textContent = "Error"
        }
}


btnChangeCreate.onclick=function(){
  ChangeForm(createAccount)
}

deleteEvent.onshow=function(){
   hbmMenu.clear()
   hbmMenu.addItem("Home")
   hbmMenu.addItem("Weather")
   hbmMenu.addItem("Login")
}