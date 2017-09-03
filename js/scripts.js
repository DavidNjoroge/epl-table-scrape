$(document).ready(function() {
  $.getJSON('dataa.json' + '&callback=?', function(data) {
    console.log(data);
  });
  // $.ajax({
  //   dataType: 'json',
  //   url: 'dataa.json',
  //   data: data,
  //   success: success
  // });
  // .done(function(msg) {
  //
  //   console.log(msg);
  // })
});
