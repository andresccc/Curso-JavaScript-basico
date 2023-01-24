// - Tu nombre (string)

// - Tu edad (number)

// - ¿Eres desarrollador? (boolean)

// - Tu fecha de nacimiento (Date)

// - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)

const datosPersonales = {
  nombre: "Andrés",
  edad: 18,
  desarrollador: true,
  fechaNacimiento: new Date(2022, 0, 6),
  libroFavorito: {
    titulo: "El Psicoanalista",
    autor: "John Katzenbach",
    fecha: new Date(1483228800000),
    url: "https://www.buscalibre.com.co/libro-el-psicoanalista-john-katzenbach-b-de-bolsillo/9789585993679/p/50315359?bmkt_source=google&bmkt_campaign=878570393&gclid=Cj0KCQiAt66eBhCnARIsAKf3ZNEiCTe-CgIUNcUJWNYY-d_2GB11_tSqoZ1dqOBGb0KCM00_cBHqdJcaAn5CEALw_wcB",
  },
};

console.log(datosPersonales);
