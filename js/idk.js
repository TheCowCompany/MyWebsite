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