var apiKey = require('./../.env').apiKey;

function Doctor(symptom) {
  this.symptom = symptom;
}

Doctor.prototype.searchSymptom = function(symptom, callback) {

  $.get('https:api.betterdoctor.com/2016-03-01/doctors?query=' + symptom + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=' + apiKey)
  .then(function(response) {
    callback(symptom, response);
  })

  .fail(function(error) {
    $('.show_doctors').text(error.responseJSON.message);
  });
};

exports.doctorModule = Doctor;
