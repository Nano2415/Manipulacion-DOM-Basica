const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calcular1");
const input2 = document.querySelector("#calcular2")
const button = document.querySelector("#btncalcular")
const pResult = document.querySelector("#Resultado")
const pError = document.querySelector("#error")

const usuario = document.querySelector("#juego")
const button2 = document.querySelector("#jugar")
const pjuego = document.querySelector("#ganador")
const pjugada = document.querySelector("#jugada")

const btnAtacar = document.querySelector("#atacar")
const btnDefen = document.querySelector("#defender")
const btnRepit = document.querySelector("#repetir")
const pPlayers = document.querySelector("#players")
const pCam = document.querySelector("#campeon")

const incorreo = document.querySelector("#correo")
const incontra = document.querySelector("#contraseña")
const inusuario = document.querySelector("#nombre")
const correoUsuario = document.querySelector("#correoIniciarSesion")
const contraseña = document.querySelector("#contraseñaIniciarSesion")
const btnCrear = document.querySelector("#crear")
const btniniciar = document.querySelector("#iniciar")
const pdatos = document.querySelector("#datos")
const pcuenta = document.querySelector("#cuentaCreada")



button.addEventListener('click', btnOClick)

function btnOClick() {
    console.log("Hiciste click")
    let suma = Number(input1.value) + Number(input2.value);
    console.log(suma)
    if (suma <= 0 || suma >= 0) {
        pResult.innerText = `Resultado: ${suma}`
       return
    } 
    else {
     suma = "Syntax ERROR"
    pResult.innerText = `Resultado: ${suma}`
    }
}

button2.addEventListener('click',btn0Jugar)

function btn0Jugar() {
    
    let pc = Math.floor(Math.random() * 4);
    console.log("Hiciste Click")
     switch (true) {
      case usuario.value == 1 && pc == 0:
        pjuego.innerText = "EMPATE"
        pjugada.innerText = "usuario: piedra <--> pc: piedra"
        
        break;
      case usuario.value == 1 && pc == 1:
        pjuego.innerText = "EMPATE"
        pjugada.innerText = "usuario: piedra <--> pc: piedra"
        
        break;
        case usuario.value == 1 && pc == 2:
            pjuego.innerText = "GANASTE"
            pjugada.innerText = "usuario: piedra <--> pc: tijera"

          break;
          case usuario.value == 1 && pc == 3:
            pjuego.innerText = "PERDISTE"
            pjugada.innerText = "usuario: piedra <--> pc: papel"

            break;
            case usuario == 2 && pc == 0:
            pjuego.innerText = "GANASTE"
            pjugada.innerText = "usuario: tijera <--> pc: papel"
        
        break;
        case usuario.value == 2 && pc == 3:
            pjuego.innerText = "GANASTE"
            pjugada.innerText = "usuario: tijera <--> pc: papel"
        
        break;
        case usuario.value == 2 && pc == 2:
            pjuego.innerText = "EMPATE"
            pjugada.innerText = "usuario: tijera <--> pc: tijera"
          break;
          case usuario.value == 2 && pc == 1:
            pjuego.innerText = "PERDISTE"
            pjugada.innerText = "usuario: tijera <--> pc: piedra"

         break;
        case usuario.value == 3 && pc == 0:
            pjuego.innerText = "GANASTE"
            pjugada.innerText = "usuario: papel <--> pc: piedra"
        
        break;
        case usuario.value == 3 && pc == 1:
            pjuego.innerText = "GANASTE"
            pjugada.innerText = "usuario: papel <--> pc: piedra"
        
        break;
        case usuario.value == 3 && pc == 3:
            pjuego.innerText = "EMPATE"
            pjugada.innerText = "usuario: papel <--> pc: papel"

          break;
          case usuario.value == 3 && pc == 2:
            pjuego.innerText = "PERDISTE"
            pjugada.innerText = "usuario: papel <--> pc: tijera"

        break;
        default:
            console.warn("Esa opcion no existe")
            pjuego.innerText = "Esa opcion no existe, favor de utilizar una de las ya mostradas"
            
     }


    
}

btnAtacar.addEventListener('click',atacar)
btnDefen.addEventListener('click',defender)
btnRepit.addEventListener('click',repetir)
let pc;

  

function atacar() {
  pc = Math.floor(Math.random() * 4)
  switch (true) {
    case pc == 0:
      pPlayers.innerText = 'Pc no a podido evitar el ataque *Muere*'
      pCam.innerHTML = 'HAZ GANADO'
      
      break;
      case pc == 1:
      pPlayers.innerText = 'Pc a atacado al igual que tu *Sus espadas chocan entre si*'
      pCam.innerHTML = ' '
      break;
      case pc == 2:
      pPlayers.innerText = 'Pc se a defedido de tu ataque *A logrado esquivar tu ataque*'
      pCam.innerHTML = ' '
      break;
      case pc == 3:
      pPlayers.innerText = 'Pc a esquivado tu ataque, y te a herido  *Haz muerto*'
      pCam.innerHTML = 'HAZ PERDIDO'
      break;
  }
  

}

function defender() {
  pc = Math.floor(Math.random() * 4)
  switch (true) {
    case pc == 0:
      pPlayers.innerText = 'Pc no quizo atacar *se mantiene en guardia*'
      pCam.innerHTML = ' '
      break;
      case pc == 1:
      pPlayers.innerText = 'Pc a atacado *Logras evadir el golpe*'
      pCam.innerHTML = ' '
      break;
      case pc == 2:
      pPlayers.innerText = 'se ambos de mantienen en guardia'
      pCam.innerHTML = ' '
      break;
      case pc == 3:
      pPlayers.innerText = 'No haz logrado esquivar por completo el ataque del pc *Haz muerto*'
      pCam.innerHTML = 'HAZ PERDIDO'
      break;
  
}
}

function repetir() {
  pPlayers.innerHTML = " "
  pCam.innerHTML = " "

  
}

btnCrear.addEventListener('click',registrarse)
btniniciar.addEventListener('click',iniciarSesion)



 


function registrarse() {
  let err = incontra.value.split("")
  let arr = incorreo.value.split("@")
  //console.log(arr)
  //console.log(err)
  for (let i = 0; i < arr.length; i++) {
    let validacionC = (arr[i] == "gmail.com")? true : false;
    //console.log(arr[i])
    console.log(validacionC)
     if (validacionC == true) {
    if (err.length >= 8)  {
      pcuenta.innerHTML = ` tu cuenta a sido creada con exito Bienvenido ${inusuario.value}` 
  console.log("bienvenido")
    } 
    else{
      pcuenta.innerHTML= `Tu contraseña no cumple con los requisitos establecidos, debe ser mayor a 7 caracteres`
    }
  }
  else{
    pcuenta.innerHTML = `El correo que es introducido en incorrecto`
  }
}
 
  
  
  
}
function iniciarSesion() {

  
  let crearCuenta = {
    correo : incorreo.value,
   contraseñaa : incontra.value,
   usuario : inusuario.value,
   }
   
  /*let crearCuenta = {
   correo : "pedrofnaf15@gmail.com",
   contraseñaa : "Nano2415K..",
   usuario : "TheNano",
   }*/


   if (correoUsuario.value == crearCuenta.correo || correoUsuario.value == crearCuenta.usuario) {
    if (contraseña.value == crearCuenta.contraseñaa) {
      console.log("Se inicio sesion correctamente")
      pdatos.innerHTML = "Se inicio sesion correctamente"
      
    }
    else{
      console.log("La contraseña es incorrecta")
      pdatos.innerHTML = "La contraseña es incorrecta"
    }
   }
   else {
    console.log("El correo/usuario o contraseña son invalidos")
    pdatos.innerHTML = "El correo/usuario o contraseña son invalidos"
   }
  }

  function hora() {
    document.getElementById("demo").innerHTML= Date();
    
  }








//pid.innerHTML = ""
//const img = document.createElement("img")
//img.setAttribute("src","https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png")
//pid.append(img)