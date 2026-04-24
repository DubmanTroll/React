const boton = document.getElementById('copy-btn');

boton.onclick = function() {
    alert("¡Dirección copiada al portapapeles! (Simulado)");
    document.getElementById('connection-status').innerText = "Conectado ✅";
    document.getElementById('connection-status').style.color = "#4CAF50";
};