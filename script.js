
        $(document).ready(function() {
            $('#clicker').click(function() {
              $.ajax({
                dataType: "json",
                url: "https://cat-fact.herokuapp.com/facts",
                success: function(results) {
                  console.log(results[0]["text"]);   
                  $('#fact').text(results[0]["text"])
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
      
