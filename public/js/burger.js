// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eat-burger").on("click", function(event) {
      var id = $(this).data("id");
      var eaten = $(this).data("eaten");
  
      var newState = {
        devoured: eaten
      };
  
      // Send the PUT request.
      $.ajax("/api/cats/" + id, {
        type: "PUT",
        data: newState
      }).then(
        function() {
          console.log("changed to", eaten);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".order").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/cats", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});
  