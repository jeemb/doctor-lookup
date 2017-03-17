var Doctor = require('./../js/Doctor.js').doctorModule;

var displayDoctors = function(symptom, doctor) {
  $('.show_doctors').text("The best doctor for " + symptom + "is" + doctor);
};

$(document).ready(function() {
  $('#doctor-search-form').submit(function(event) {
    event.preventDefault();
    var symptom = $('#description').val();
    var newDoctor = new Doctor(symptom);
    newDoctor.searchSymptom(symptom, displayDoctors);
  });
});
