let axios = require('axios');
let cheerio = require('cheerio');
let jsonfile = require('jsonfile')
let file = 'dataa.json'

let base_url = 'http://int.soccerway.com/national/england/premier-league/20172018/regular-season/r41547/';

axios.get(base_url).then((response) => {
    let $ = cheerio.load(response.data);
    let kurs = [];
    $('.team_rank', '.leaguetable').each((i, elm) => {
      kurs.push({
        position: $(elm).children().eq(0).first().text(),
        team: $(elm).children().eq(2).first().text()
        // erate: {
        //   sell: $(elm).children().eq(1).first().text(),
        //   buy: $(elm).children().eq(2).first().text()
        // },
        // tt: {
        //   sell: $(elm).children().eq(3).first().text(),
        //   buy: $(elm).children().eq(4).first().text()
        // },
        // notes: {
        //   sell: $(elm).children().eq(5).first().text(),
        //   buy: $(elm).children().eq(6).first().text()
        // }
      });
    });
    return (kurs);
  })
  .then((kurs) => {
    console.log(kurs);
    let json = kurs
    jsonfile.writeFile(file, json, function() {
      console.log('error!!!');
    })

  });
