
btnShow.onclick=function(){
    query = "SELECT * FROM to_do_list_events"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=375groupb15&query=" + query)

  if (req.status == 200) { 
    results = JSON.parse(req.responseText)
      
    if (results.length == 0)
      lblMessage.textContent = "There are no events in the database."
    else {        
      let message = ""
        for (i = 0; i < results.length; i++)
          message = message + "\n" +  results[i][1]
          txtResults.value = message
    }
  } else
    lblMessage.textContent = "Error code: " + req.status
}
