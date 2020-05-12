let searchButton = document.querySelector("#search");

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", () => {
  console.log("button pressed");
  sendApiRequest();
});

//An asynchronous function to fetch data from the API.
async function sendApiRequest() {
  let response = await fetch(`https://www.boredapi.com/api/activity/`);
  console.log(response);
  let data = await response.json();
  console.log(data);
  useApiData(data);
}

//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data) {
  document.querySelector("#content").innerHTML = `
 <div id="wrapper">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">You should...</h5>
      <p class="card-text">${data.activity}</p>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Type of Activity</h5>
      <p class="card-text">${data.type}</p>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Number of Participants</h5>
      <p class="card-text">${data.participants}</p>
    </div>
  </div>
</div>
`;
}
