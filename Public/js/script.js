window.addEventListener("load", function(){
    let formularioVinos = document.querySelector("form.addVino")
    console.log(formularioVinos)
    formularioVinos.addEventListener("submit", function(e){
        let errores = []
        let campoNombre = document.querySelector("input.name")
        console.log(campoNombre.value)
        let campoDescripcion = document.querySelector("input.descripcion")

        if (campoNombre.value == ""){
            errores.push("El campo nombre de vino es obligatorio")
        } else if(campoNombre.value.length < 5){
            errores.push("El campo nombre de vino debe tener al menos 5 caracteres")
        }
        if (campoDescripcion.value == ""){
            errores.push("El campo descripción de vino es obligatorio")
        } else if(campoNombre.value.length < 20){
            errores.push("El campo descripción de vino debe tener al menos 20 caracteres")
        }

        if(errores.length > 0){
            e.preventDefault()

        let ulErrores = document.querySelector("div.errores ul")
        for (let i=0; i<errores.length; i++){
            ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
        }


        }
    })
})
