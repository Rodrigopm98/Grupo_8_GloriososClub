window.addEventListener("load", function(){
    let formulario = document.querySelector("form.tabla");
    let nombre = document.querySelector("input.name");
    let lastNamee = document.querySelector("input.lastName");
    let userName = document.querySelector("input.userName");
    let email = document.querySelector("input.email");
    let provincia = document.querySelector("input.province");
    let ciudad = document.querySelector("input.city");
    let direccion = document.querySelector("input.address");

    nombre.addEventListener("keypress", function(e){
        let errorName = document.querySelector("div.errorName");
            errorName.innerHTML = "<p>"+ "" + "</p>"
    })
    lastNamee.addEventListener("keypress", function(e){
        let errorLastName = document.querySelector("div.errorLastName");
        errorLastName.innerHTML = "<p>"+ "" + "</p>"
    })
    userName.addEventListener("keypress", function(e){
        let errorUserName = document.querySelector("div.errorUserName");
        errorUserName.innerHTML = "<p>"+ "" + "</p>"
    })
    email.addEventListener("keypress", function(e){
        let errorEmail = document.querySelector("div.errorEmail");
        errorEmail.innerHTML = "<p>"+ "" + "</p>"
    })
    provincia.addEventListener("keypress", function(e){
        let province = document.querySelector("div.errorProvince");
        province.innerHTML = "<p>"+ "" + "</p>"
    })
    ciudad.addEventListener("keypress", function(e){
        let city = document.querySelector("div.errorCity");
        city.innerHTML = "<p>"+ "" + "</p>"
    })
    direccion.addEventListener("keypress", function(e){
        let address = document.querySelector("div.errorAddress");
        address.innerHTML = "<p>"+ "" + "</p>"
    })



    formulario.addEventListener("submit", function(e){
     

        let nombre = document.querySelector("input.name");
        let lastNamee = document.querySelector("input.lastName");
        let userName = document.querySelector("input.userName");
        let email = document.querySelector("input.email");
        let provincia = document.querySelector("input.province");
        let ciudad = document.querySelector("input.city");
        let direccion = document.querySelector("input.address");
        let imagenUsuario = document.querySelector("input.imageUser");
       

        const emailValido = email => {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
          }

        
    
        if(nombre.value == ""){
            e.preventDefault();
            let errorName = document.querySelector("div.errorName");
            errorName.innerHTML = "<p>"+ "El campo de nombre debe estar completo" + "</p>"
        }else if(!(nombre.value.length >= 2)){
            e.preventDefault();
            let errorName = document.querySelector("div.errorName");
            errorName.innerHTML = "<p>"+ "El campo de nombre debe contener al menos 2 caracteres" + "</p>"}

          
        

        if(lastNamee.value == ""){
            e.preventDefault();
            let errorLastName = document.querySelector("div.errorLastName");
            errorLastName.innerHTML = "<p>"+ "El campo de apellido debe estar completo" + "</p>"

        }else if(!(lastNamee.value.length >= 2)){
            e.preventDefault();
            let errorLastName = document.querySelector("div.errorLastName");
            errorLastName.innerHTML = "<p>"+ "El campo de apellido debe contener al menos 2 caracteres" + "</p>"

        }
        if(userName.value == ""){
            e.preventDefault();
            let errorUserName = document.querySelector("div.errorUserName");
            errorUserName.innerHTML = "<p>"+ "Debes colocar un nombre de usuario" + "</p>"

        }
        if(email.value == ""){
            e.preventDefault();
            let errorEmail = document.querySelector("div.errorEmail");
            errorEmail.innerHTML = "<p>"+ "Debes colocar un email" + "</p>"

        }else if(!emailValido(email.value)){
            e.preventDefault();
            let errorEmail = document.querySelector("div.errorEmail");
            errorEmail.innerHTML = "<p>"+ "Formato de email inválido" + "</p>"

        }
        if(provincia.value == ""){
            e.preventDefault();
            let province = document.querySelector("div.errorProvince");
            province.innerHTML = "<p>"+ "Debes colocar una provincia" + "</p>"

        }
        if(ciudad.value == ""){
            e.preventDefault();
            let city = document.querySelector("div.errorCity");
            city.innerHTML = "<p>"+ "Debes colocar una localidad" + "</p>"

        }
        if(direccion.value == ""){
            e.preventDefault();
            let address= document.querySelector("div.errorAddress");
            address.innerHTML = "<p>"+ "Debes colocar una dirección" + "</p>"

        }
       
        if(imagenUsuario.value != ""){
            let imagen = imagenUsuario.value;
            let coincidencia1 = imagen.endsWith(".png");
            let coincidencia2 = imagen.endsWith(".jpg");
            let coincidencia3 = imagen.endsWith(".jpeg");
            let coincidencia4 = imagen.endsWith(".gif");
            if(!(coincidencia1 || coincidencia2 || coincidencia3 || coincidencia4)){
                e.preventDefault();
                let errorImagenUsuario = document.querySelector("div.errorImagenUsuario");
                errorImagenUsuario.innerHTML = "<p>"+ "Solo se admiten extenciones .png .jpg .jpeg .gif" + "</p>"
            
            }
        }
    })

})