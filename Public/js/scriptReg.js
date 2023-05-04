window.addEventListener("load", function(){
    let formularioUsers = document.querySelector("form.addUser")

    // Validación formulario de vinos
    console.log(formularioUsers)
    formularioUsers.addEventListener("submit", function(e){
        let errores = []
        let campoNombre = document.querySelector(".fullName")
        console.log(campoNombre.value)
        let campoEmail = document.querySelector(".emilio")
        let imagenUser = document.querySelector("input.imgUser")
        console.log(imagenUser.value)
        let campoContra = document.querySelector(".contra")

        if (campoNombre.value == ""){
            errores.push("El campo nombre de vino es obligatorio")
        } else if(campoNombre.value.length < 5){
            errores.push("El campo nombre de vino debe tener al menos 5 caracteres")
        // }
        if (campoEmail.value == ""){
            errores.push("El campo email es obligatorio")
        } else if(!validator.isEmail(campoEmail)){
            errores.push("El campo email debe tener un formato válido")
        }
        let fileName = imagenUser.value.split("\\").pop();
        let allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;         
        if (!allowedExtensions.exec(fileName)) {
            errores.push("La imagen debe tener una extensión válida (.jpg, .jpeg o .png)")
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

