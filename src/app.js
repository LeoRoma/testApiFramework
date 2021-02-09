let items = [];

fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=s3sidQNE043xhMtYMOTXG0E044n5RsFd') // Change different Api to test
  .then(
    function(response){
      if(response.status !== 200){
        console.log(`Looks like there was some problem. Status Code: ${response.status}`);
        return;
      }
      response.json()
        .then(function(data) {
          items.push(data.results);
        })
    }
  )
  .catch(function(error){
    console.log(`Fetch Error :-S ${error}`);
  })

  console.log(items);