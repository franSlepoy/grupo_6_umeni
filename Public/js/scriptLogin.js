window.addEventListener("load", function(){
    let formularioLogin = document.querySelector("form.loginUser")

    // formularioLogin.addEventListener("submit", function(e){
    //     e.preventDefault()
    // })

    // Validación formulario de registro de usuarios
    //console.log(formularioLogin)
    formularioLogin.addEventListener("submit", function(e){
        let errores = []
        let campoEmail = document.querySelector("input.emilio")
        //console.log(campoEmail.value)
        let campoContra = document.querySelector("input.contra")
        //console.log(campoContra.value)

        if (campoEmail.value == ""){
            errores.push("El campo email es obligatorio")
        } else if(campoEmail.value.length < 5){
            errores.push("El campo email debe tener al menos 5 caracteres")
        // }
        } else if(!validator.isEmail(campoEmail.value)){
            errores.push("El campo email debe tener un formato válido")
        }
        if (campoContra.value == ""){
            errores.push("El campo contraseña es obligatorio")
        }
        
        console.log(errores)
    

        if(errores.length > 0){
            e.preventDefault()

        let ulErrores = document.querySelector("div.errores ul")
        for (let i=0; i<errores.length; i++){
            ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
        }

        }
        })
        })

