window.addEventListener("load", function(){
    let formularioUserEdit = document.querySelector("form.editPerfil")

    // formularioUserEdit.addEventListener("submit", function(e){
    //     e.preventDefault()
    // })

    // Validación formulario de registro de usuarios
    //console.log(formularioUserEdit)
    formularioUserEdit.addEventListener("submit", function(e){
        let errores = []
        let campoNombre = document.querySelector("input.fullName")
        //console.log(campoNombre.value)
        let campoApellido = document.querySelector("input.apellido")
        //console.log(campoApellido.value)
        let campoEmail = document.querySelector("input.emilio")
        //console.log(campoEmail.value)
        // let imagenUser = document.querySelector("input.imgUser")
        // console.log(imagenUser.value)
        let campoContra = document.querySelector("input.contra")
        //console.log(campoContra.value)
        let nuevaContra = document.querySelector("input.nuevaContra")
        let nuevaContra2 = document.querySelector("input.nuevaContra2")

        if (campoNombre.value == ""){
            errores.push("El campo nombre es obligatorio")
        } else if(campoNombre.value.length < 5){
            errores.push("El campo nombre debe tener al menos 5 caracteres")
        }
        if (campoApellido.value == ""){
            errores.push("El campo apellido es obligatorio")
        } else if(campoApellido.value.length < 5){
            errores.push("El campo apellido debe tener al menos 5 caracteres")
        }
        if (campoEmail.value == ""){
            errores.push("El campo email es obligatorio")
        } else if(!validator.isEmail(campoEmail.value)){
            errores.push("El campo email debe tener un formato válido")
        }
        if (campoContra.value == ""){
            errores.push("El campo contraseña es obligatorio")
        }
        if (nuevaContra.value == ""){
            errores.push("El campo nueva contraseña es obligatorio")
        }else if(nuevaContra.value.length < 5){
            errores.push("El campo nueva contraseña debe tener al menos 5 caracteres")
        }
        if (nuevaContra2.value == ""){
            errores.push("El campo repita nueva contraseña es obligatorio")
        } else if(nuevaContra2.value.length < 5){
            errores.push("El campo repita nueva contraseña debe tener al menos 5 caracteres")
        }
        
        // let fileName = imagenUser.value.split("\\").pop();
        // let allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;         
        // if (!allowedExtensions.exec(fileName)) {
        //     errores.push("La imagen debe tener una extensión válida (.jpg, .jpeg o .png)")
        //     }
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