window.addEventListener("load", function(){
    let formularioUsers = document.querySelector("form.loginUser")

    // Validación formulario de vinos
    console.log(formularioUsers)
    formularioUsers.addEventListener("submit", function(e){
        let errores = []
        let campoEmail = document.querySelector(".emilio")
        console.log(campoEmail)
        let campoContra = document.querySelector(".contra")
        console.log(campoContra)

        if (campoEmail.value == ""){
            errores.push("El campo email es obligatorio")
        } else if(!validator.isEmail(campoEmail)){
            errores.push("El campo email debe tener un formato válido")
        }
        if (campoContra.value == ""){
            errores.push("El campo contraseña es obligatorio")
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

