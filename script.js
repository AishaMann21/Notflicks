$("#searchbutton").click(function(){
  var movieName = $("input").val();
  console.log(movieName);
  
  
    $.ajax({
        url: "https://www.omdbapi.com/?apikey=8e9ded79&s=" + movieName,
        method: "GET",
        success: function(response) {
            var movieURL= response.Search[0].Poster
            $("#poster").attr("src", movieURL);

        },
    }); 
    
});
