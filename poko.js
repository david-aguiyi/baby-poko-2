function copyToClipboard() {
  /* Get the text field */
  var copyText = document.getElementById("ca-num");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Change the SVG icon */
  var svgElement = document.getElementById("fsvg"); // Replace with your SVG element's ID
  var originalSVG = svgElement.innerHTML; // Save the original SVG
  
  svgElement.innerHTML = '<path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>'; // New SVG path

  /* Change the SVG icon back to the original after 2 seconds */
  setTimeout(function() {
    svgElement.innerHTML = originalSVG;
  }, 2000);
}
