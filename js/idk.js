document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("playButton");
  
    // Add a click event listener to the button
    button.addEventListener("click", function() {
      // Perform the action you want when the button is clicked
  
      // Send a message
      var message = "Yo";
      
    });
  });

function loadHTMLFile(file) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", file, true);
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          document.open();
          document.write(xhr.responseText);
          document.close();
      }
  };
  xhr.send();
}