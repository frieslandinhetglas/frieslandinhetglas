// Kaart centreren op Friesland
var map = L.map('map').setView([53.2, 5.8], 9);

// OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Voorbeeldmarker: ciderproducent
var ciderIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/415/415733.png',
    iconSize: [30, 30]
});

L.marker([53.2, 5.75], {icon: ciderIcon})
  .addTo(map)
  .bindPopup("<b>Ciderbedrijf</b><br>Hier komt info over de producent.");
