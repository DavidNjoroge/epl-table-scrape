data = [{
  "position": "1",
  "team": "Manchester United"
}, {
  "position": "2",
  "team": "Liverpool"
}, {
  "position": "3",
  "team": "Huddersfield Town"
}, {
  "position": "4",
  "team": "Manchester City"
}, {
  "position": "5",
  "team": "West Bromwich"
}, {
  "position": "6",
  "team": "Chelsea"
}, {
  "position": "7",
  "team": "Watford"
}, {
  "position": "8",
  "team": "Southampton"
}, {
  "position": "9",
  "team": "Tottenham Hotspur"
}, {
  "position": "10",
  "team": "Burnley"
}, {
  "position": "11",
  "team": "Stoke City"
}, {
  "position": "12",
  "team": "Everton"
}, {
  "position": "13",
  "team": "Swansea City"
}, {
  "position": "14",
  "team": "Newcastle United"
}, {
  "position": "15",
  "team": "Leicester City"
}, {
  "position": "16",
  "team": "Arsenal"
}, {
  "position": "17",
  "team": "Brighton & Hov…"
}, {
  "position": "18",
  "team": "AFC Bournemouth"
}, {
  "position": "19",
  "team": "Crystal Palace"
}, {
  "position": "20",
  "team": "West Ham United"
}, {
  "position": "1",
  "team": "3"
}, {
  "position": "2",
  "team": "3"
}, {
  "position": "3",
  "team": "3"
}, {
  "position": "4",
  "team": "3"
}, {
  "position": "5",
  "team": "3"
}]

function dataAppender() {
  for (var i = 0; i < data.length; i++) {
    data[i]
    $('#here').append('<li>Pos: ' + data[i].position + '  ' + data[i].team + '</li>')
  }
}




$(document).ready(function() {
  // alert('boom')
  localStorage.setItem('data', JSON.stringify(data))
  console.log(data[2].team);
  dataAppender()




});
