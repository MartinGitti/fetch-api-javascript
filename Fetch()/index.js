/* JAVASCRIPT SHEET: */

// Add Event Listener which will display jokes once button with 'id=getText' is clicked. 
document.getElementById("getText").addEventListener('click', getJokes);

// Create function below to get jokes: 
function getJokes () {
  fetch("http://api.icndb.com/jokes/random/3​") // Fetch method to retrieve data from API.
  .then((res) => res.json()) // Arror function that displays the jokes in the relevant div created on html page:
  .then((data) => {
    let output = '<h2>Jokes</h2>'; // Create variable to ouput jokes from API.
    console.log(data.value); // Use console.log() to test if above works.
    // Loop through arrays: 
    data.value.forEach(function(joke) {
      // Template strings used below to diplay jokes to output variable. 
      output += `
        <div>
          <p>${joke.joke}</p> 
        </div>
      `;
    });
    document.getElementById('output').innerHTML = output;
  })
}

// Display and update time every 1 second, using setInterval function as suggested by task: 
let time = setInterval(currentTime, 1000);

function currentTime() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  document.getElementById("time").innerHTML = time;
}

////////////////////////////////////////THE END////////////////////////////////////////////