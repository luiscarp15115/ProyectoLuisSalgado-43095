// Datos fijos

const doctores = [
    {
        nombre: 'Luis',
        apellido: 'Salgado',
        especialidad: 'Cardiologo'
    },
    {
        nombre: 'Nicolas',
        apellido: 'Salgado',
        especialidad: 'Pediatria'
    },
    {
        nombre: 'Luis',
        apellido: 'Mendoza',
        especialidad: 'Clinico'
    },
    {
        nombre: 'Nicolas',
        apellido: 'Mendoza',
        especialidad: 'Cardiologo'
    }
];

const filtroDoc = (condicion) => {
    for (let doctor of doctores) {
        if (doctor.especialidad === condicion) {
            console.log(doctor, doctores[doctor])
        }
    }
}

//MENU
alert("Bienvenidos a Clinic")
alert("Elige una de las siguientes opciones")
let opcionMenu = parseInt(prompt("Opcion 1: Sacar Turno  / Opcion 2: Ver profesionales"))

switch (opcionMenu) {
    case 1:
        // INGRESO DE DATOS
        let nombre = prompt("Ingrese su nombre");
        let apellido = prompt("Ingrese su apellido");

        let especiliadad = 0;

        while ((especiliadad <= 0) || (especiliadad > 3)) {
            especiliadad = parseInt(prompt("Ingrese especialidad para atenderse / 1- Pediatra / 2- Cardiologo / 3- Clinico"));
        }

        let especialidadNombre;

        let prepaga = 0;

        while ((prepaga <= 0) || (prepaga > 2)) {
            prepaga = parseInt(prompt("Ingrese prepaga afiliado / 1- OSDE / 2- Swiss medical"));
        }

        let prepagaNombre;

        let precioEspecialidad;
        let descuentoPrepaga;
        let precioTurno = 0;

        // ASIGNAR VARIABLES
        switch (especiliadad) {
            case 1:
                precioEspecialidad = 1000;
                especialidadNombre = "Pediatria";
                break;
            case 2:
                precioEspecialidad = 2000;
                especialidadNombre = "Cardiologo";
                break
            case 3:
                precioEspecialidad = 3000;
                especialidadNombre = "Clinico";
                break;
        }

        switch (prepaga) {
            case 1:
                descuentoPrepaga = 20;
                prepagaNombre = "OSDE";
                break;
            case 2:
                descuentoPrepaga = 10;
                prepagaNombre = "Swiss medical";
                break;
        }

        //CALCULAR TOTAL 

        function calculoTurno(precioEspecialidad, descuentoPrepaga) {
            return precioEspecialidad - ((descuentoPrepaga / 100) * precioEspecialidad);
        }

        precioTurno = calculoTurno(precioEspecialidad, descuentoPrepaga);

        //MOSTRAR RESUMEN DE TURNO

        console.log("Paciente: " + nombre + " " + apellido);
        console.log("Especialidad: " + especialidadNombre);
        console.log("Precio: " + precioEspecialidad);
        console.log("Prepaga: " + prepagaNombre);
        console.log("Descuento: " + descuentoPrepaga + "%");
        console.log("Total a pagar: " + precioTurno);

        break;
        
        // FILTRAR MEDICOS
    case 2:
        let filtroDoctor = 0

        alert("Elija que profesional quiere ver")

        while ((filtroDoctor <= 0) || (filtroDoctor > 3)) {
            filtroDoctor = parseInt(prompt("1. Pediatria / 2. Clinico / 3. Cardiologia "));
        }
        let nombreFiltroDoctor = "";

        if (filtroDoctor === 1) {
            nombreFiltroDoctor = "Pediatria"
        }
        else if (filtroDoctor === 2){
            nombreFiltroDoctor = "Clinico"
        }
        else if (filtroDoctor === 3){
            nombreFiltroDoctor = "Cardiologo"
        }

        filtroDoc(nombreFiltroDoctor)
}