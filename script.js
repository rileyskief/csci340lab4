
        $(document).ready(function() {
            $('#clicker').click(function() {
              $.ajax({
                dataType: "json",
                url: "https://meowfacts.herokuapp.com/",
                success: function(results) {
                  // console.log(results[0]["data"]);   
                  $('#fact').text(results["data"])
                },
                error: function(xhr,status,error) {
                  console.log(error);
                }
              });
            });
            $('#click').click(function() {
              $.ajax({
                dataType: "json",
                url: "https://binaryjazz.us/wp-json/genrenator/v1/genre/",
                success: function(results) {
                  console.log(results);
                  $('#Genre').text(results)
                }
              })
            });  
          });
      
