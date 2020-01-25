/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
  let parsed = parseInt(string, 10);

    if (parsed < 12){
    return "Good Morning";
  } else if (parsed < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening"
  }
}

//   var greeting;
//   var time = new Date().getHours();
//   if (time < 12) {
//     greeting = "Good Morning";
//   } else if (time < 24) {
//     greeting = "Good Afternoon";
//   } else {
//     greeting = "Good Evening";
//   }
//   document.getElementById("demo").innerHTML = greeting;
// }

/* Write your implementation of displayMessage() */

function displayMessage(string){
  let input = document.getElementById("greeting")
    input.innerText = string
}