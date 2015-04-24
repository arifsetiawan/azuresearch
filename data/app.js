
// Replace SEARCHSERVICE and ADMINKEY

var async = require('async');
var _ = require('lodash');
var request = require('superagent');

var fs = require('fs');
var path = require('path');

var fileNames = ['raw1.json', 'raw2.json'];

var addData = function() {

  async.eachSeries(fileNames, function(filename, cb) {

    console.log('Process ' + process.cwd() + '/' + filename);

    fs.readFile(process.cwd() + '/' + filename, function(err, data) {

      var jsonData = JSON.parse(data.toString());

      var mappedData = _.map(jsonData, function(d) {

        console.log('Mapping data for ' + d.HotelTranslatedName);

        var hotel = {
          "@search.action": "upload",
          hotelId: d.HotelId + "",
          baseRate: parseFloat(d.TextPrice),
          hotelName: d.HotelTranslatedName,
          starRating: d.StarRating,
          smartDeal: d.IsSmartDeal,
          freeWifi: d.IsFreeWifi,
          reviewScore: parseFloat(d.TextReviewScore),
          reviewCount: d.ReviewCount,
          areaName: d.AreaName,
          address: d.Address,
          coordinate: { "type": "Point", "coordinates": [d.Coordinate.Longitude, d.Coordinate.Latitude] },
          imageUrl: d.ImageUrl
        }
        return hotel;
      })

      console.log(mappedData);

      request
        .post('https://SEARCHSERVICE.search.windows.net/indexes/hotels/docs/index?api-version=2015-02-28')
        .send({ value: mappedData })
        .set('Api-key', 'ADMINKEY')
        .set('Content-type', 'application/json')
        .end(function(err, res){
          console.error(err);
          console.log(res.body);
          console.log('Uploaded ' + filename + ' contents to azure search');
          cb(null);
        });

    })

  },
  function(err) {
    console.log('DONE');
    process.exit();
  })

}

addData();

// ups
process.on('uncaughtException', function(err) {
  console.error('uncaughtException', err.stack);
  process.exit();
});
