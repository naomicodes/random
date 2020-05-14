let searchButton = document.querySelector("#search")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
  let response = await fetch(`https://www.boredapi.com/api/activity/`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
  document.querySelector("#content").innerHTML = `
    <div class="card-deck">

<div class="card" style="width: 18rem;">
  <img src="https://media2.giphy.com/media/3oFzmkCSEpeDJFi5IA/giphy.gif" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Jimmy Fallon Thinks This Activity Was Super Fun.</h5>
    <p class="card-text">Now it's your turn!</p>
  </div>
  <ul class="list-group list-group-flush">
    <li id="a" class="list-group-item">Activity: ${data.activity}</li>
    <li id="t" class="list-group-item">Type Of Activity: ${data.type}</li>
    <li id="p" class="list-group-item">Number Of Participants Needed: ${data.participants}</li>
  </ul>
  <div class="card-body">
    <a href="https://fallon.1iota.com/show/353/the-tonight-show-starring-jimmy-fallon" class="card-link">Free Tickets To Jimmy Fallon's Next Show!</a>
    <a href="#" class="card-link">Follow Jimmy Fallon On Instagram</a>
  </div>
</div>
`
}

