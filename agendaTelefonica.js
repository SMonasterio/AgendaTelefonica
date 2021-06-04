/*Nos piden realizar una agenda telefónica de contactos.
Un contacto está definido por un nombre y un teléfono.
Se considera que un contacto es igual a otro cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos.
Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Las funciones serán:
aniadirContacto(Contacto): Añade un contacto a la agenda, si la agenda no puede almacenar mas contactos indicar por pantalla.
existeContacto(Conctacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.
Usar LocalStorage para guardar la info de la agenda y para consultar sus datos*/

let agenda = JSON.parse(localStorage.getItem("agenda")) || [];

class contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

//------------------------------------------------------------------------------------------------------------
//aniadirContacto(Contacto): Añade un contacto a la agenda,
//si la agenda no puede almacenar mas contactos indicar por pantalla.

function aniadirContacto(nombre, telefono) {
  //Validación: sí no está en la lista de contactos seguir, sino ('Contacto existente')

  let user = agenda.find(function (contacto) {
    return contacto.nombre === nombre;
  });
  if (user) {
    document.write("  //  El contacto sí existe  //  ");
  } else {
    if (agenda.length <= 9) {
      agenda.push(new contacto(nombre, telefono));
      localStorage.setItem("agenda", JSON.stringify(agenda));
      document.write(` //  ${nombre} ha sido agregado con éxito  //  `);
    } else {
      document.write("  //  Memoria llena  //  ");
    }
  }
}

//------------------------------------------------------------------------------------------------------------
//existeContacto(Conctacto): indica si el contacto pasado existe o no.

function existeContacto(nombre) {
  let user = agenda.find(function (contacto) {
    return contacto.nombre === nombre;
  });
  if (user) {
    document.write("  //  El contacto sí existe  //  ");
  } else {
    console.warn("El contacto no exite");
  }
}

//------------------------------------------------------------------------------------------------------------
//listarContactos(): Lista toda la agenda

function listarContactos() {
  agenda.forEach(function (contacto) {
    console.log(`Nombre:${contacto.nombre}`);
    console.log(`Teléfono:${contacto.telefono}`);
    console.log(
      `====================================================================`
    );
  });
}

//------------------------------------------------------------------------------------------------------------
//buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
function buscarContacto(nombre) {
  let user = agenda.find(function (contacto) {
    return contacto.nombre === nombre;
  });
  if (user) {
     console.log(`telefono: ${user.telefono}`);
  } else {
    console.warn("El contacto no exite");
  }
}

//------------------------------------------------------------------------------------------------------
//eliminarContacto(Contacto): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
function eliminarContacto(nombre) {
  let idUser = agenda.findIndex(function (contacto) {
    return contacto.nombre === nombre;
  });
  if (idUser > -1) {
    let validar = confirm("Está seguro que quiere eliminar el usuario?");
    if (validar) {
      agenda.splice(idUser, 1);
      localStorage.setItem("agenda", JSON.stringify(agenda));
      console.log("El contacto ha sido borrado");
    } else {
      console.warn("El contacto no ha sido eliminado");
    }
  } else {
    console.warn("Contacto inexistente");
  }
}

//---------------------------------------------------------------------------------------------------------
//agendaLlena(): indica si la agenda está llena.
function agendaLlena() {
  if (agenda.length <= 9) {
    document.write(` // Todavía tiene espacio disponible  //  `);
  } else {
    document.write("  //  Memoria llena  //  ");
  }
}

//-----------------------------------------------------------------------------------------------------------
//huecosLibres(): indica cuántos contactos más podemos ingresar.

function huecosLibres() {
  console.log(`Espacios libres: ${10 - agenda.length} `);
}
