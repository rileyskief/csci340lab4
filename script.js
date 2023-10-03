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

  $(document).ready(function() {
    $('#music').click(function() {
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
