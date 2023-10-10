
        $(document).ready(function() {
            $('#clicker').click(function() {
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
      
