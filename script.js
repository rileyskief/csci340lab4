$(document).ready(function() {
    $('#fact-button').click(function() {
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
