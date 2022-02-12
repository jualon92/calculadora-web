
console.warn("iniciado")


const inputBill = document.querySelector("#bill")
const inputPersonas = document.querySelector("#personas")
const inputsPorcentajes = document.querySelectorAll(".interface__boton")
const inputsCalculo = document.querySelectorAll(".refresco")
const tipAmount = document.querySelector(".tip__number")
const totalNumero = document.querySelector(".total__numero")
const botonReset = document.querySelector(".reset")
const notificacionPersonas = document.querySelector(".notificacion-personas")
/*
let valorOperacion = 0 // rever, podrian utilizarse funciones puras que retorn el valor y luego pasarse a html. sin necesidad de asignarlo ?
let numeroPersonas = 0
let eleccionPorcentaje = 0
 
let bandera = true
*/
const datoSinIngresar = () => (inputPersonas.value == false || inputBill.value == false || !hayBotonActivo())   // si no hay ingreso en input, o en calculo, o boton activo

const getTotal = (valor, personas, tip) =>  ((valor / personas) + (tip)).toFixed(2)

const getAmount = (valor, personas, tip) => parseFloat((valor * tip / 100) / personas).toFixed(2)

const getDisplay = (ele) => ele.value !== "" ? parseFloat(ele.value).toFixed(2) : 0.00


const hayBotonActivo = () => Array.from(inputsPorcentajes).some(b => b.classList.contains("activo"))  // si hay un boton con clase activo activo

const setTablero = () => {
    if (!datoSinIngresar()) { // si los datos no estan vacios
        console.log(inputPersonas.value)
        tipAmount.innerHTML = getAmount(getDisplay(inputBill), getDisplay(inputPersonas), eleccionPorcentaje)
        totalNumero.innerHTML = getTotal(getDisplay(inputBill), getDisplay(inputPersonas), parseInt(tipAmount.innerHTML))
        botonReset.classList.add("reset-activo")
        botonReset.disabled = false

    } else { // si falta un dato,resultados deberian ser 0 para no confundir
        tipAmount.innerHTML = 0
        totalNumero.innerHTML = 0


        botonReset.classList.remove("reset-activo")
        botonReset.disabled = true
    }
}


//tema de botones clase de %



for (const input of inputsPorcentajes) {
    input.addEventListener("click", e => {

        eleccionPorcentaje = parseInt(input.innerText.split("%")[0])
        //mantener boton seleccionado , permanencia
        apagarBotones() //desactivar los otros botones
        input.classList.add("activo")
        setTablero() //necesito  para  registrar evento click, porque boton evento input no hace nada.
    })

}


function apagarBotones() { //podria ser forEach , const a rrow
    for (const input of inputsPorcentajes) {
        input.classList.remove("activo")
    }

}




for (const input of inputsCalculo) { //al detectar entrada input se actualizan los valores 
    input.addEventListener("input", e => {
        setTablero()
    })
}


inputPersonas.addEventListener("input", e => { //si input personas se vuelve 0 deberia mostrar html advertencia
    if (inputPersonas.value == false){ // si valor es falsy, 0, ""
        inputPersonas.classList.add("advertencia-personas") //coloreo border
        notificacionPersonas.classList.replace("invisible", "visible" )

    }else{
        inputPersonas.classList.remove("advertencia-personas")
        notificacionPersonas.classList.add("visible","invisible")
    }
})



document.querySelector(".reset").addEventListener("click", e => {

    if (botonReset.classList.contains("reset-activo")) {
        tipAmount.innerHTML = 0
        totalNumero.innerHTML = 0
        inputBill.value = 0
        inputPersonas.value = 0
        botonReset.classList.remove("reset-activo")
        botonReset.disabled = true
        apagarBotones()
    }


})