// 1. Interactividad simple (Alerta al pasar el ratón sobre los nombres de caballos)
const listaCaballos = document.querySelectorAll('#famosos li');
listaCaballos.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#8b5a2b';
        item.style.fontWeight = 'bold';
    });
    item.addEventListener('mouseout', () => {
        item.style.color = 'black';
        item.style.fontWeight = 'normal';
    });
});

// 2. Conexión con API (Usaremos una de ejemplo para el clima)
// Reemplaza 'TU_API_KEY' por una real de OpenWeather si tienes, si no, usa este ejemplo:
async function obtenerClima() {
    try {
        // En un caso real usarías: fetch('https://api.openweathermap.org/data/2.5/weather?q=Jerez&appid=TU_KEY')
        // Aquí simulamos la respuesta para que veas cómo funciona
        const infoClima = "Soleado, 22°C en Jerez de la Frontera. ¡Día perfecto para entrenar!";
        document.getElementById('weather').innerText = infoClima;
    } catch (error) {
        console.log("Error al cargar la API");
    }
}

obtenerClima();
function sonar(s) {
    // 1. Buscamos el elemento de audio
    let sonido = (s === 'relincho') ? document.getElementById('audRelincho') : document.getElementById('audGalope');
    
    if (sonido) {
        // 2. Forzamos a que el navegador "rebobine" el sonido por si ya se pulsó antes
        sonido.pause();
        sonido.currentTime = 0;
        
        // 3. Intentamos reproducir
        let playPromise = sonido.play();

        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Fallo en la reproducción:", error);
                alert("Safari bloquea el sonido. Haz clic en cualquier parte de la página primero y vuelve a intentarlo.");
            });
        }
    } else {
        alert("No se encuentra el elemento de audio en el HTML.");
    }
}