function Place(destination, locale, landmark, year, notes) {
  this.destination = destination;
  this.locale = location;
  this.landmark = landmark;
  this.year = year;
  this.notes = notes;
};

Place.prototype.displayDestination = function() {
  return this.destination;
};

var myPlaces = [];
myPlaces[0] = new Place("Burien", "Washington", "Lake Burien", "2007", "College, Career, & Citizenship");
myPlaces[1] = new Place("Aloha", "Oregon", "Schulze Hotel", "1978", "Not Hawaii");

var i = 0;
$(document).ready(function() {
  $("ul#places").append("<li><span class='places'>" + myPlaces[0].destination + "</span></li>");
  $("ul#places").append("<li><span class='places'>" + myPlaces[1].destination + "</span></li>");
  console.log("got it!");
  var newPlace = [];
  $("#new-destination").submit(function(event) {
    event.preventDefault();

    var inputtedDestination = $("input#new-destination").val();
    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedYear = $("input#new-year").val();
    var inputtedNotes = $("input#new-notes").val();

    newPlace[i] = new Place(inputtedDestination, inputtedLocation, inputtedLandmark, inputtedYear, inputtedNotes);

    $("ul#placeName").append("<li>" + newPlace[i].displayDestination() + "</li>");

    $("ul#places").append("<li><span class='places'>" + inputtedDestination + "</span></li>" + "<li><span class='places'>" + inputtedLocation + "</span></li>" + "<li><span class='places'>" + inputtedLandmark + "</span></li>" + "<li><span class='places'>" + inputtedYear + "</span></li>" + "<li><span class='places'>" + inputtedNotes + "</span></li>");

    i++;

    $("#placeName").click(function() {
      $("newPlace[i]#places").show();
    });

    $("input#new-destination").val("");
    $("input#new-location").val("");
    $("input#new-landmark").val("");
    $("input#new-year").val("");
    $("input#new-notes").val("");
  });

});
