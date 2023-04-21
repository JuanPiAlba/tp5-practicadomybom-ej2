let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let dni = document.getElementById("dni");
let sexo = document.getElementById("sexo");
let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let fechadnacim = document.getElementById("fechadnacmiento");
let btnformulario = document.getElementById("btnformulario");
let mostrarDatos = document.getElementById("mostrarDatos");
let mostrarGeneracion = document.getElementById("mostrarGeneracion");

btnformulario.addEventListener("submit", generacion);

function generacion(e) {
  e.preventDefault();
  if (
    nombre.value.length > 0 &&
    edad.value.length > 0 &&
    dni.value.length > 0 &&
    fechadnacim.value.length > 0
  ) {
    const nuevaPersona = new Persona(
      nombre.value,
      edad.value,
      dni.value,
      sexo.value,
      peso.value,
      altura.value,
      fechadnacim.value
    );
    let incorporacion = document.getElementById("incorporacion");
    incorporacion.children[0].children[0].innerHTML = `${nuevaPersona.mostarNombre}`;
  }
}

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anionacimiento) {
    this.Nombre = nombre;
    this.Edad = edad;
    this.Dni = dni;
    this.Sexo = sexo;
    this.Peso = peso;
    this.Altura = altura;
    this.Anionacimiento = anionacimiento;
  }

  mostrarGeneracion() {
    if (this.Anionacimiento >= 1994 && this.Anionacimiento < 2010) {
      return "Generacion Z de 1994 al 2010 con Expansion masiva de Internet y con rasgos caracteristico de Irreverencia";
    } else if (this.Anionacimiento >= 1981 && this.Anionacimiento < 1993) {
      return "Generacion Y Millennials, de 1981 al 1993 con Inicio de la Digitalizacion y con rasgos caracteristico de Frustacion";
    } else if (this.Anionacimiento >= 1969 && this.Anionacimiento < 1980) {
      return "Generacion X, de 1969 al 1980 con Inicio de la Crisis del 73 y transicion española y con rasgos caracteristico de Obsecion por el Exito";
    } else if (this.Anionacimiento >= 1949 && this.Anionacimiento < 1969) {
      return "Generacion Baby Boom, de 1964 al 1969 con Paz y exposicion demografica y con rasgos caracteristico de Ambision";
    } else if (this.Anionacimiento >= 1930 && this.Anionacimiento < 1948) {
      return "Generacion Silent Generation, de 1930 al 1948 con Conflictos Belicos y con rasgos caracteristico de Auteridad";
    } else {
      return "<p>No hay datos para mostrar</p>";
    }
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      return true;
    } else {
      return false;
    }

    //indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
  }
  mostrarDatos() {
    return `<ul>
    <li>Nombre y Apellido: ${this.Nombre}</li>
    <li>Apellido:${this.Edad}</li>
    <li>Dni: ${this.Dni}</li>
    <li>Sexo: ${this.Sexo === "H" ? "Hombre" : "Mujer"}</li>
    <li>Peso: ${this.Peso}</li>
    <li>Altura: ${this.Altura}</li>
    <li>Fecha de Nacimiento: ${this.Anionacimiento}</li>
    </ul>`;
    //devuelve toda la información del objeto. // ul y li
  }
  get mostarNombre() {
    return this.nombre;
  }
}
