let reinicio = true
const operarios = [
  { id: 129, nombre: "Agustin Rossi", localidad: "san justo", telefono: "11-4564-9877" },
  { id: 234, nombre: "Pol Fernandez", localidad: "ramos mejia", telefono: "11-1269-5468" },
  { id: 98, nombre: "Dario Bennedeto", localidad: "capital", telefono: "11-6834-1928" },
  { id: 35, nombre: "Alan Varela", localidad: "mataderos", telefono: "11-9324-3456" },
  { id: 78, nombre: "Juan Ramirez", localidad: "villa luzuriaga", telefono: "11-7123-3984" },
  { id: 50, nombre: "Marcos Rojo", localidad: "la tablada", telefono: "11-7584-8645" },
  { id: 2, nombre: "Luca Langoni", localidad: "lomas del mirador", telefono: "11-3454-9126" },
];

while(reinicio){
  let localidad = prompt("¿En que localidad necesita un operario?").toLowerCase();
let operario = operarios.find(item => item.localidad === localidad)
let mensaje = `
Id de Operario= ${operario.id}
Operario= ${operario.nombre}
Localidad= ${operario.localidad}
`;
alert(mensaje)

let respuesta = confirm("¿Quieres contactar a este operario?")
let mensaje_contacto = `
Telefono= ${operario.telefono}
`;
if(respuesta){
  alert(mensaje_contacto)
  reinicio = confirm("¿Quieres buscar otro operario?")
}else{
  alert("Perfecto, terminamos")
  reinicio = confirm("¿Quieres buscar otro operario?")
}

}










