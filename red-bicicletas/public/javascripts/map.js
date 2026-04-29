document.addEventListener('DOMContentLoaded', function() {
    // 1. Inicializar el mapa
    var map = L.map('main_map').setView([19.4335, -99.1915], 14);

    // 2. Cargar la capa de diseño
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // 3. Agregar los puntos
    L.marker([19.3243, -99.1742]).addTo(map).bindPopup('<b>Estación 1: Metro Universidad</b>');
    L.marker([19.3311, -99.1821]).addTo(map).bindPopup('<b>Estación 4: Filosofía y Letras</b>');
    L.marker([19.3345, -99.1825]).addTo(map).bindPopup('<b>Estación 6: Derecho</b>');
    L.marker([19.3308, -99.1918]).addTo(map).bindPopup('<b>Estación 10: Estadio Olímpico</b>');
});