
console.warn("iniciado")


const inputBill = document.querySelector("#bill")
const inputPersonas = document.querySelector("#personas")
const inputsPorcentajes = document.querySelectorAll(".interface__boton")
const inputsCalculo = document.querySelectorAll(".refresco")
const tipAmount = document.querySelector(".tip__number")
const totalNumero = document.querySelector(".total__numero")


let valorOperacion = 0 // rever, podrian utilizarse funciones puras que retorn el valor y luego pasarse a html. sin necesidad de asignarlo ?
let numeroPersonas = 0
let eleccionPorcentaje = 0
let bandera = true

const datoSinIngresar = () => (eleccionPorcentaje == false || numeroPersonas == false)


const getTotal = () => (valorOperacion / numeroPersonas) + parseInt(tipAmount.innerHTML)

const getAmount = () => parseInt((valorOperacion * eleccionPorcentaje / 100) / numeroPersonas)


const getDisplay = (ele) => ele.value !== "" ? parseInt(ele.value) : 0.00

/*
function getDisplay(ele){


    if (ele.value !== "") { //logica repetida, rever 
        return  parseInt(ele.value) // "01" => 1
     //   console.log("current valor operacion " + valorOperacion)
    } else { // NaN
        console.log("string")
        return 0.00
    }
}*/



/// IN 
inputBill.addEventListener("input", e => {
    //  e.preventDefault()

    valorOperacion = getDisplay(inputBill)
    /*
    if (inputBill.value !== "") { //logica repetida, rever 
        valorOperacion = parseInt(inputBill.value) // "01" => 1
        console.log("current valor operacion " + valorOperacion)
    } else { // NaN
        console.log("nan  bill")
        valorOperacion = 0
        tipAmount.innerHTML = 0.00
        totalNumero.innerHTML = 0.00
    }
    */

}
)


inputPersonas.addEventListener("input", e => {
    //  e.preventDefault()

    numeroPersonas = getDisplay(inputPersonas)
    /*
    if (inputPersonas.value !== "") {
        numeroPersonas = parseInt(inputPersonas.value) // "01" => 1
        console.log("current valor operacion " + numeroPersonas)
    } else { // NaN
        console.log("nan  bill")
        numeroPersonas = 0
        tipAmount.innerHTML = 0.00
        totalNumero.innerHTML = 0.00
    }
    console.log("numero de personas actual " + numeroPersonas)
    */
}
)


//tema de botones clase de %


for (const input of inputsPorcentajes) {
    input.addEventListener("click", e => {


        eleccionPorcentaje = parseInt(input.innerText.split("%")[0])
        //mantener boton seleccionado , permanencia
        apagarBotones() //desactivar los otros botones
        input.classList.add("activo")
        if (!datoSinIngresar()) { //cuando ingresa porcentaje actualiza 

            tipAmount.innerHTML = getAmount()
            totalNumero.innerHTML = getTotal()
        }
    })

}


function apagarBotones() {
    for (const input of inputsPorcentajes) {
        input.classList.remove("activo")
    }

}




for (const input of inputsCalculo) { //al detectar entrada input se actualizan los valores 
    input.addEventListener("input", e => {
        if (!datoSinIngresar()) {
            tipAmount.innerHTML = getAmount()
            totalNumero.innerHTML = parseInt(getTotal())
        } else {
            console.warn("faltan ingresar")
            console.log(valorOperacion, numeroPersonas, eleccionPorcentaje)
        }


    })
}



document.querySelector(".reset").addEventListener("click", e => {
    valorOperacion = 0 // rever, no me gusta 
    numeroPersonas = 0
    eleccionPorcentaje = 0
    tipAmount.innerHTML =  0 
    totalNumero.innerHTML = 0
    inputBill.value = 0
    inputPersonas.value = 0
    apagarBotones()

})