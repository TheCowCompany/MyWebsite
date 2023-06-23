document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("playButton");
  
    // Add a click event listener to the button
    button.addEventListener("click", function() {
      // Perform the action you want when the button is clicked
  
      // Send a message
      var message = "Yo";
      alert(message);
    });
  });