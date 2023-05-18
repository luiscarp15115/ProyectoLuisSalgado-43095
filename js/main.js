// INGRESO DE DATOS

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

let especiliadad = 0;

while((especiliadad <=0) || (especiliadad>3)){
    especiliadad=parseInt(prompt("Ingrese especialidad para atenderse / 1- Pediatra / 2- Cardiologo / 3- Clinico"));
}

let especialidadNombre;

let prepaga = 0;

while((prepaga <=0) || (prepaga>2)){
    prepaga = parseInt(prompt("Ingrese prepaga afiliado / 1- OSDE / 2- Swiss medical"));
}

let prepagaNombre;

let precioEspecialidad;
let descuentoPrepaga;
let precioTurno=0;

// ASIGNAR VARIABLES
switch (especiliadad){
    case 1:
        precioEspecialidad=1000;
        especialidadNombre="Pediatria";
    break;
    case 2:
        precioEspecialidad=2000;
        especialidadNombre="Cardiologo";
    break
    case 3:
        precioEspecialidad=3000;
        especialidadNombre="Clinico";
    break;
}

switch (prepaga){
    case 1:
        descuentoPrepaga=20;
        prepagaNombre="OSDE";
    break;
    case 2:
        descuentoPrepaga=10;
        prepagaNombre="Swiss medical";
    break;
}

//CALCULAR TOTAL 

function calculoTurno(precioEspecialidad,descuentoPrepaga){
    return precioEspecialidad - ((descuentoPrepaga/100)*precioEspecialidad);
}

precioTurno=calculoTurno(precioEspecialidad,descuentoPrepaga);

//MOSTRAR RESUMEN DE TURNO

console.log("Paciente: "+nombre+" "+apellido);
console.log("Especialidad: "+especialidadNombre);
console.log("Precio: "+precioEspecialidad);
console.log("Prepaga: "+prepagaNombre);
console.log("Descuento: "+descuentoPrepaga+"%");
console.log("Total a pagar: "+precioTurno);


