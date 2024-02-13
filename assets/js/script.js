
function jugarCachipun(veces) {
    // genera la eleccion 
    function eleccionComputador() {
        let opcionComputador = Math.floor(Math.random() * 3); 
        switch (opcionComputador) {
            case 0:
                return "piedra"; // 0
            case 1:
                return "papel"; // 1
            case 2:
                return "tijera"; // 2 
        }
    }

    // quien gana comparativa de eleccion
    function determinarGanador(opcionUsuario, opcionComputador) {
        if (opcionUsuario === opcionComputador) {
            return "Empate";
        } else if (
            (opcionUsuario === "piedra" && opcionComputador === "tijera") ||
            (opcionUsuario === "papel" && opcionComputador === "piedra") ||
            (opcionUsuario === "tijera" && opcionComputador === "papel")
        ) {
            return "¡Felicidades Ganaste!";
        } else {
            return "¡Computador gana!";
        }
    }

    
    for (let i = 0; i < veces; i++) {
        const opcionUsuario = prompt("Elige piedra, papel o tijera:").toLowerCase();

        if (!(opcionUsuario === "piedra" || opcionUsuario === "papel" || opcionUsuario === "tijera")) {
            alert("Por favor, ingresa una opción válida.");
            return;
        }
        const opcionComputador = eleccionComputador();
        // muestra el ganador
        alert("Computador eligió: " + opcionComputador);
        alert(determinarGanador(opcionUsuario, opcionComputador));
    }
}

// funcion principal de donde llama a elegir una opcion
const veces = parseInt(prompt("¿Cuántas veces deseas jugar?"));
if (isNaN(veces) || veces <= 0) {
    alert("Por favor, ingresa un número válido mayor que cero.");
} else {
    jugarCachipun(veces);
}