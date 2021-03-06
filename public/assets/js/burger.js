// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eat-burger").on("click", function(event) {
      event.preventDefault();
        console.log("ate burger");
      var id = $(this).data("id");
      var eaten = $(this).data("eaten");
  
      var newState = {
        devoured: eaten
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
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
  
    $(".order").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log("ordered burger");
  
      
      var newBurger = {
        name: $("#ca").val().trim()
      };
      console.log(newBurger);
      // Send the POST request.
      $.ajax("/api/burgers", {
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
  