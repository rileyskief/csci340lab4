
    // $(document).ready(function() {
    //     $('#fact').click(function() {
    //         $.ajax({
    //             dataType: "json",
    //             url: "https://cat-fact.herokuapp.com/facts",
    //             success: function(results) {
    //                 console.log(results["text"], results["setup"], results["delivery"]);},
                    

    //         });
    //     });
    // });
    
    //     $('#music').click(function() {
    //         $.ajax({
    //             dataType: "json",
    //             url: "https://binaryjazz.us/wp-json/genrenator/v1/genre/",
    //             success: function(results) {
    //                 console.log(results["text"], results["setup"], results["delivery"]);},
                
    //         });
    //     });






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
              $.ajax({
                dataType: "json",
                url: "https://binaryjazz.us/wp-json/genrenator/v1/genre/",
                success: function(results) {
                  console.log(results["joke"], results["setup"], results["delivery"]);
                  $('#quote').text(results["setup"] + " " + results["delivery"])
                  $('#quote').text(results["joke"])
                }
              })
            });  
          });
      
