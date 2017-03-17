var Doctor = require('./../js/Doctor.js').doctorModule;

var displayDoctors = function(symptom, response) {
  $('.show_doctors').append("<p> List of Doctors: </p> <ul>");
  for (var i = 0; i < response.data.length; i++) {
    $('.show_doctors').append("<li> Dr. " + response.data[i].profile.last_name + "</li>");
  }
    $('.show_doctors').append("</ul>");
};

$(document).ready(function() {
  $('#doctor-search-form').submit(function(event) {
    event.preventDefault();
    var symptom = $('#description').val();
    var newDoctor = new Doctor(symptom);
    newDoctor.searchSymptom(symptom, displayDoctors);
  });
});
