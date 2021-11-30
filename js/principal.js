//CUERPO PRINCIPAL JAVASCRIPT - INICIO Y FIN
(function(){
    'use strict';
    //inicialize la carga completa del sitio web primero..
    //despues ejecuta el javascript
    document.addEventListener('DOMContentLoaded',function(){
        //mapa
        var map = L.map('mapa').setView([-25.498262, -54.661337], 16);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker([-25.498262, -54.661337]).addTo(map)
            .bindPopup('<img src="img/invitado1.jpg" width="250px"> <br> <h2>UPEWEBCONF</h2><br> <marquee><h3>Boletos ya disponibles.</h3></marquee>')
            .openPopup(); 
    })
})();

//numero animado
$('#num1')
  .prop('number', 0)
  .animateNumber(
    {
      number: 6
    },
    1000
  );

  $('#num2')
  .prop('number', 0)
  .animateNumber(
    {
      number: 15
    },
    1500
  );

  $('#num3')
  .prop('number', 0)
  .animateNumber(
    {
      number: 3
    },
    1000
  );

  $('#num4')
  .prop('number', 0)
  .animateNumber(
    {
      number: 9
    },
    1200
  );

  //cuenta regresiva

  $("#dias").countdown("2020/11/15", function(event) 
  {$(this).text(event.strftime('%D'));});

  $("#horas").countdown("2020/11/15", function(event) 
  {$(this).text(event.strftime('%H'));});

  $("#minutos").countdown("2020/11/15", function(event) 
  {$(this).text(event.strftime('%M'));});

  $("#segundos").countdown("2020/11/15", function(event) 
  {$(this).text(event.strftime('%S'));});

  //lettering / animacion de texto
  $(document).ready(function() {
  $(".nombre-sitio").lettering();
  });