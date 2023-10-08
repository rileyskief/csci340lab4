
    $(document).ready(function() {
        $('#fact').click(function() {
            $.ajax({
                dataType: "json",
                url: "https://cat-fact.herokuapp.com/facts",
                success: function(results) {
                console.log(results["text"]);
                },
                error: function(xhr,status,error) {
                console.log(error);
                }
            });
        });
    });


    
        $('#music').click(function() {
            $.ajax({
                dataType: "json",
                url: "https://binaryjazz.us/wp-json/genrenator/v1/genre/",
                success: function(results) {
                console.log(results["text"]);
                },
                error: function(xhr,status,error) {
                console.log(error);
                }
            });
        });
    
  

    
        $('#both').click(function() {
            music();
            fact();
        });
      


