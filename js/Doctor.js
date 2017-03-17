var apiKey = require('./../.env').apiKey;

function Doctor(symptom) {
  this.symptom = symptom;
}

Doctor.prototype.searchSymptom = function(symptom, callback) {

  $.get('https:api.betterdoctor.com/2016-03-01/doctors?query=' + symptom + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=' + apiKey)
  .then(function(response) {
    console.log(response);
    var doctor_one = response.data[0].profile.first_name;
    callback(symptom, response);
    // $('.show_doctors').append("<ul>");
    // for (var i = 0; i < response.profile.length; i++) {
    //   $('.show_doctors').append("<li>" + response.profile[i].first_name + "</li>");
    // }
    // $('.show_doctors').append("</ul>");
  });

  // .fail(function(error) {
  //   $('.show_doctors').text(error.responseJSON.message);
  // });
  // };

  // function display(symptom, doctor) {
  //   $('.show_doctor').text("Doctor" + doctor);
  // }

};
exports.doctorModule = Doctor;
