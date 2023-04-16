class Cliente {
     constructor(nombre, apellido, mail) {
       this.nombre = nombre;
       this.apellido = apellido;
       this.mail = mail;
     }
   }
   
   const arrayClientes = [];
   
   const formulario = document.getElementById("formulario");
   formulario.addEventListener("submit", (e) => {
     e.preventDefault();
   
     const nombre = document.getElementById("nombre");
     const apellido = document.getElementById("apellido");
     const mail = document.getElementById("mail");
   
     // Validación de formulario
     if (nombre.value === "" || apellido.value === "" || mail.value === "") {
       alert("Por favor complete todos los campos del formulario");
       return;
     }
   
     const cliente = new Cliente(nombre.value, apellido.value, mail.value);
   
     arrayClientes.push(cliente);
     console.log(arrayClientes);
   
     // Almacenar los datos en localStorage
     localStorage.setItem("arrayClientes", JSON.stringify(arrayClientes));
   
     formulario.reset();
   });
   
   // Obtener los datos del localStorage y asignarlos a la variable arrayClienteAgregado
   let arrayClienteAgregado = JSON.parse(localStorage.getItem("arrayClientes"));
   console.log(arrayClienteAgregado);
   
