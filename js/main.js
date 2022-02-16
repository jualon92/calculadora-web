console.warn("iniciado")


const inputBill = document.querySelector(".js-bill")
const inputPersonas = document.querySelector(".js-personas")


const inputsPorcentajes = document.querySelectorAll(".js-botonPercent")
const inputsCalculo = document.querySelectorAll(".refresco")
const tipAmount = document.querySelector("#total__numero")
const totalNumero = document.querySelector(".js-nroTotal ")
const botonReset = document.querySelector("#btnReset")


const botonCustom = document.querySelector("#custom")
const contenedorCustom = document.querySelector("#botonera-porcentajes__custom") 
const toggleLeng = document.querySelector("#toggle-leng")

 

//para traduccion
const billLabel = document.querySelector(".js-bill")  
const tipLabel = document.querySelector(".js-tip")
const personasLabel = document.querySelector("#label-personas")
const notificacionPersonas = document.querySelector(".js-notif")
const cantidadTip = document.querySelector("#tip__number")
const persona = document.querySelector(".js-persona")
const persona2 = document.querySelector(".js-persona2")
const tipTotal = document.querySelector("#tip__number")
const totalTexto = document.querySelector(".js-totalNumero") 

const inputsBilingues = [ //podria hacerse un for each de labels pero hay divs, hacer todo label no me gusta tanto
    billLabel, 
    tipLabel, 
    personasLabel, 
    notificacionPersonas, 
    cantidadTip, 
    persona, 
    persona2,
    botonReset
]


 
const diccioReverso = { //podria importarse
    "Bill": "Cuenta",
    "Cuenta" : "Bill",
    "Tip Amount" : "Propina",
    "Propina" : "Tip Amount",
     "/ persona" : "/ person",
     "/ person" : "/ persona",
     "Total\n/ persona" : "Total\n/ person",
     "Total\n/ person" :  "Total\n/ persona",
    "Elegir propina %" :  "Select Tip %",
    "Select Tip %" :  "Elegir propina %",
    "Can't be zero" : "No puede ser 0",
   "No puede ser 0" :   "Can't be zero",
   "Number of people" : "Numero de Personas",
   "Numero de Personas" : "Number of people",
   "RESET" : "REINICIAR",
   "REINICIAR" : "RESET",

}

document.querySelector("#language-toggle").addEventListener("input", e => {
    
     inputsBilingues.forEach( ele => {
        ele.innerText = diccioReverso[ele.innerText]
    }); 
});

let eleccionPorcentaje = 0
 


///////F AUXILIARES
const datoSinIngresar = () => (inputPersonas.value == false || inputBill.value == false || eleccionPorcentaje  == 0) // si no hay ingreso en input, o en calculo, o boton activo

const getTotal = (valor, personas, tip) => ((valor / personas) + (tip)).toFixed(2)

const getAmount = (valor, personas, tip) => parseFloat((valor * tip / 100) / personas).toFixed(2)

const getDisplay = (ele) => ele.value !== "" ? parseFloat(ele.value).toFixed(2) : 0.00


///puede buscarse que un boton tenga clase activo o no mediante some, 
///pero con preguntar si eleccionPorcentaje fue asignado un nuevo valor es suficiente  
///const hayBotonActivo = () => Array.from(inputsPorcentajes).some(b => b.classList.contains("botonera-porcentajes__btn--active"))    // si hay un boton con clase activo activo









 
const setTablero = () => { // si datos estan ingresados, setear displays con  cantidad, sino con 0.00
    if (!datoSinIngresar()) { // si los datos no estan vacios
        console.log(inputPersonas.value)
        tipAmount.innerHTML = getAmount(getDisplay(inputBill), getDisplay(inputPersonas), eleccionPorcentaje)
        totalNumero.innerHTML = getTotal(getDisplay(inputBill), getDisplay(inputPersonas), parseFloat(tipAmount.innerHTML))
        botonReset.classList.add("reset-activo")
        botonReset.disabled = false

    } else { // si falta un dato,resultados deberian ser 0 para no confundir
        tipAmount.innerHTML = "0.00"
        totalNumero.innerHTML = "0.00"


        botonReset.classList.remove("reset-activo")
        botonReset.disabled = true
        console.log("no")
    }
}

 

for (const input of inputsPorcentajes) {
    input.addEventListener("click", e => {

        eleccionPorcentaje = parseFloat(input.innerText.split("%")[0])
        //mantener boton seleccionado , permanencia
        apagarBotones() //desactivar los otros botones
        input.classList.add("botonera-porcentajes__btn--active")
        setTablero() //necesito  para  registrar evento click, porque boton evento input no hace nada.
    })



}



function apagarBotones() { //podria ser forEach , const a rrow
    for (const input of inputsPorcentajes) {
        input.classList.remove("botonera-porcentajes__btn--active")
    }

}




for (const input of inputsCalculo) { //al detectar entrada input se actualizan los valores 
    input.addEventListener("input", e => {
        setTablero()
    })
}


inputPersonas.addEventListener("input", e => { //si input personas se vuelve 0 deberia mostrar html advertencia
    if (inputPersonas.value == false) { // si valor es falsy, 0, ""
        inputPersonas.classList.add("advertencia-personas") //coloreo border
        notificacionPersonas.classList.replace("invisible", "visible")

    } else {
        inputPersonas.classList.remove("advertencia-personas")
        notificacionPersonas.classList.add("visible", "invisible")
    }
})



document.querySelector(".reset").addEventListener("click", e => {

    if (botonReset.classList.contains("reset-activo")) {
        tipAmount.innerHTML = "0.00"
        totalNumero.innerHTML =   "0.00"
        inputBill.value =   ""
        inputPersonas.value =   ""
        eleccionPorcentaje =   0
        botonReset.classList.remove("reset-activo")
        botonReset.disabled = true
        apagarBotones()
    }


})
 
botonCustom.addEventListener("click", e => { //al apretar caja custom


    apagarBotones() //desactivar los otros botones

    //nuevo input a aparecer
    contenedorCustom.innerHTML = '<input type="text" class=" botonera-porcentajes__custom-input input-data refresco">'
    let inputNuevo = document.querySelector(".botonera-porcentajes__custom-input")
    
    //agrego listener a nuevo input que recibe porcentaje custom
    inputNuevo.addEventListener("input", e => { //al recibir input
       
        botonCustom.classList.add("botonera-porcentajes__btn--active")
        console.log("input detectado")
        eleccionPorcentaje = document.querySelector(".botonera-porcentajes__custom-input").value || 0
        
        console.log(eleccionPorcentaje)
        //mantener boton seleccionado , permanencia
        //    apagarBotones() //desactivar los otros botones
        // input.classList.add("activo")
        setTablero()  
    })

    inputNuevo.addEventListener("click", e =>{ // al ser clickeado, apaga los botones
        apagarBotones()   
    } )



    eleccionPorcentaje = 0 // porcentaje vuelve a valor default al apretar custom box
    setTablero() 
}) 

 