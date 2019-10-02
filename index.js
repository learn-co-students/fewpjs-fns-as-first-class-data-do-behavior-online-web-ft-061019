/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

const greet = (string) => {
  let [hours, minutes] = string.split(":");
  hours = parseInt(hours, 10);
  minutes = parseInt(minutes, 10);

  if(hours < 12) {
    return "Good Morning";
  } else if (hours >= 12 && hours <= 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */

const displayMessage = (string) => {
  document.querySelector("#greeting").innerText = string;
}
