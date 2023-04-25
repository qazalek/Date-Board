// Get the current date and time
function getCurrentDateTime() {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let session = 'AM';
  
    // Convert to 12 hour format
    if (hours > 12) {
      hours -= 12;
      session = 'PM';
    }
  
    // Add leading zeros if necessary
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
  
    // Update the HTML elements
    document.getElementById('date').innerHTML = `${day}, ${month} ${date}, ${year}`;
    document.getElementById('day').innerHTML = `${day}`;
    document.getElementById('hours').innerHTML = `${hours}`;
    document.getElementById('minutes').innerHTML = `${minutes}`;
    document.getElementById('seconds').innerHTML = `${seconds}`;
    document.getElementById('session').innerHTML = `${session}`;
  }
  
  // Call the function to update the date and time initially
  getCurrentDateTime();
  
  // Update the date and time every second
  setInterval(getCurrentDateTime, 1000);
  function gerConvertDateItem() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    let session = "AM";
  
    if (hours > 12) {
      hours = hours - 12;
      session = "PM";
    }
  
    if (hours === 0) {
      hours = 12;
    }
  
    const formattedHours = hours < 10 ? "0" + hours : hours;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
  
    const twelveHourTime = formattedHours + ":" + formattedMinutes + ":" + formattedSeconds + " " + session;
    const twentyFourHourTime = time.toLocaleTimeString("en-US", { hour12: false });
  
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    const sessionElement = document.getElementById("session");
    const toggleButton = document.getElementById("toggle-btn");
  
    if (toggleButton.innerText === "12-hr / 24-hr") {
      hoursElement.innerText = formattedHours;
      minutesElement.innerText = formattedMinutes;
      secondsElement.innerText = formattedSeconds;
      sessionElement.innerText = session;
      toggleButton.innerText = "24-hr / 12-hr";
    } else {
      const [hours, minutes, seconds] = twentyFourHourTime.split(":");
      hoursElement.innerText = hours;
      minutesElement.innerText = minutes;
      secondsElement.innerText = seconds;
      sessionElement.innerText = "";
      toggleButton.innerText = "12-hr / 24-hr";
    }
  }
  
  // update the time every second
  setInterval(() => {
    const time = new Date();
    const dateElement = document.getElementById("date");
    const dayElement = document.getElementById("day");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    const sessionElement = document.getElementById("session");
  
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    const month = months[time.getMonth()];
    const date = time.getDate();
    const day = days[time.getDay()];
    const year = time.getFullYear();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    let session = "AM";
  
    if (hours > 12) {
      hours = hours - 12;
      session = "PM";
    }
  
    if (hours === 0) {
      hours = 12;
    }
  
    const formattedHours = hours < 10 ? "0" + hours : hours;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
  
    dateElement.innerText = `${month} ${date}, ${year}`;
    dayElement.innerText = day;
    hoursElement.innerText = formattedHours;
    minutesElement.innerText = formattedMinutes;
    secondsElement.innerText = formattedSeconds;
    sessionElement.innerText = session;
  }, 1000);
  
  function gerConvertDateItem() {
    const hoursElement = document.getElementById('hours');
    const sessionElement = document.getElementById('session');
    const toggleBtn = document.getElementById('toggle-btn');
    
    if (toggleBtn.innerText === '12-hr / 24-hr') {
      // Switch to 24-hour format
      toggleBtn.innerText = '24-hr / 12-hr';
      const hours = Number(hoursElement.innerText.slice(0, 2));
      const session = sessionElement.innerText;
      if (session === 'PM' && hours !== 12) {
        hoursElement.innerText = `${hours + 12}:${hoursElement.innerText.slice(3, 5)}`;
      } else if (session === 'AM' && hours === 12) {
        hoursElement.innerText = `00:${hoursElement.innerText.slice(3, 5)}`;
      }
      sessionElement.innerText = '';
    } else {
      // Switch to 12-hour format
      toggleBtn.innerText = '12-hr / 24-hr';
      const hours = Number(hoursElement.innerText.slice(0, 2));
      const session = hours < 12 ? 'AM' : 'PM';
      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
      hoursElement.innerText = `${formattedHours}:${hoursElement.innerText.slice(3, 5)}`;
      sessionElement.innerText = session;
    }
  }
  
  
