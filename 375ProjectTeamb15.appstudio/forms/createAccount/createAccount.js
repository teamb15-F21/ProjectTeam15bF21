
btnSubmit.onclick=function(){
  let username = inptUsername.value
  let password = inptPassword.value
  let firstName = inptFirstName.value
  let lastName = inptLastName.value
  let email = inptEmail.value
  let query = "INSERT INTO member (username,password,first_name,last_name,email) VALUES ('" + username + "', '" + password + "', '" + firstName + "', '" + lastName + "', '" + email + "')"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=375groupb15&query=" + query)
    if (req.status == 200) {
        if (req.responseText == 500)
            lblMessageCreate.textContent = "You have successfully created an account!"
        else
            lblMessageCreate.textContent = "Error"
    } else 
        lblMessageCreate.textContent = "Error"
}
