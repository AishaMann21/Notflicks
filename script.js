$("#searchbutton").click(function(){
  var movieName = $("input").val();

  
  
    $.ajax({
        url: "https://www.omdbapi.com/?apikey=8e9ded79&s=" + movieName,
        method: "GET",
        success: function(response) {
            var movieTitle = response.Search[0].Title
            $("#title").html(movieTitle);
            var movieURL= response.Search[0].Poster
            $("#poster").attr("src", movieURL);
           

        },
    }); 
    
});
