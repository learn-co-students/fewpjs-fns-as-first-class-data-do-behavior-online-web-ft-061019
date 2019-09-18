/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(time) {
  time = parseInt(time, 10)
  if (time < 12 ) { 
    return "Good Morning"
  } else if (time > 12 && time < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }

}

function displayMessage(testContent) {
  testContent = "TEST"
   let content = "something"
   document.getElementById(id= "greeting").innerHTML = "TEST"   

}