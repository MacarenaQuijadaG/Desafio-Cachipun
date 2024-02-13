//FUNCION DEL CACHIPUN
function jugarCachipun() {
    const opciones = ["piedra", "papel", "tijera"];
    
    // ELECCION DEL USUARIO
    const eleccionJugador = prompt("Eliga piedra, papel o tijera:").toLowerCase();
    while (!opciones.includes(eleccionJugador)) {
      alert("Opción no válida. Por favor, elige piedra, papel o tijera.");
      eleccionJugador = prompt("Eliga piedra, papel o tijera:").toLowerCase();
    }

    // ELECCION DE LA MAQUINA
    const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];
    alert("La computadora eligio: " + eleccionComputadora);

    // ROPERACION QUE DETERMINA QUIEN ES EL GANADOR
    if (eleccionJugador === eleccionComputadora) {
      alert("¡Es un empate!");
    } else if (
        (eleccionJugador === "piedra" && eleccionComputadora === "tijera") ||
        (eleccionJugador === "papel" && eleccionComputadora === "piedra") ||
        (eleccionJugador === "tijera" && eleccionComputadora === "papel")
    ) {
      alert("¡Felicidades Ganaste!");
    } else {
      alert("¡La maquina gana!");
    }
  }

  // DECLARACION Y LECTURA DE CUANTAS VECES LA VARIABLE SE INGRESA
  const vecesJugar = prompt("¿Cuántas veces quieres jugar?");
  for (const i = 0; i < vecesJugar; i++) {
    jugarCachipun();
  }