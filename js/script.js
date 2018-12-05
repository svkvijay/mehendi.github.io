var main = function() {
    var slide = $('.toggleMenu');
    var press = $('.menu');
    slide.hide(); 
    press.click(function() {
     // slide.toggle("slide", { direction: "left" }, 200);      
      slide.animate({'width': 'toggle'},200);    
    });
    // Map
    var location = {lat: 12.900790 , lng: 80.093719};
    var map = new google.maps.Map(
    document.getElementById('map_canvas'), {zoom: 12, center: location});
    var marker = new google.maps.Marker({position: location, map: map});
    var cityCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.15,
      map: map,
      center: location,
      radius: 5000
    });

    $('.goto_link').click(function() {
      slide.hide(200);  
    })
}
   
   
   $(document).ready(main);


  