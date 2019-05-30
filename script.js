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
            var movieIMdb= response.Search[0].imdbID
            $("#link").attr("href", "https://www.imdb.com/title/" + movieIMdb);
            $("#link").html("Click here for more info!!");
            $("#recommended").html("More Like This:");
            
            var movieURL= response.Search[1].Poster
            $("#poster1").attr("src", movieURL);
            
            var movieURL= response.Search[2].Poster
            $("#poster2").attr("src", movieURL);
            
            var movieURL= response.Search[3].Poster
            $("#poster3").attr("src", movieURL);
        }
    }); 
    
});
