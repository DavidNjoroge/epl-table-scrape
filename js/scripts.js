$(document).ready(function() {
  $.getJSON('dataa.json', function(json) {
    /*optional stuff to do after success */
    console.log(json);
  });
});
