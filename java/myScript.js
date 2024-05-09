let button = document.getElementById("login")
let nameUser = document.getElementById("name")
let password = document.getElementById("password")



button.addEventListener("click", function() {
    if(password.value.length ==8 && nameUser.value.length == 10 ){
        alert("los datos estan bien")
    } else if (password.value.length != 8){
        alert("revise la cantidad de caracteres en contraseña")
    }else if (nameUser.value.length != 10){
        alert("revise la cantidad de caracteres en nombre")
    }
});
function alerta(){
    alert("hola")
}