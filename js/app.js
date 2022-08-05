// funcion de mapa 1//
function iniciarMap(){
  var coord = {lat: 31.736288533615948 ,lng: -106.41214488403814};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 14,
    center: coord,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false

    //31.736288533615948, -106.41214488403814
    //31.75038314393068, -106.42683367272322
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });

  var coord2 = {lat: 31.75038314393068,lng: -106.42683367272322};
  var map2 = new google.maps.Map(document.getElementById('map2'),{
    zoom: 14,
    center: coord2,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false
  });
  var marker2 = new google.maps.Marker({
    position: coord2,
    map: map2
  });
}