//* ELEMENTOS PRINCIPALES DEL DOM

// pantallas
const splashScreenNode = document.querySelector("#splash-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameOverScreenNode = document.querySelector("#game-over-screen")

// botones
const startBtnNode = document.querySelector("#start-btn")

// game box
const gameBoxNode = document.querySelector("#game-box")


//* VARIABLES GLOBALES DEL JUEGO

let pollitoObj = null; // esto es para poder luego agregar el obj del pollito aqui, pero que en TODO mi código yo pueda acceder a ella.

// let tuberiaObj = null;
let tuberiasArr = []

let gameIntervalId = null
let tuberiasIntervalId = null


//* FUNCIONES GLOBALES DEL JUEGO

function startGame() {
  // console.log("iniciando el juego")
  //1. ocultar la pantalla inicial
  splashScreenNode.style.display = "none";

  //2. mostrar la pantalla de juego
  gameScreenNode.style.display = "flex";

  //3. Añadimos los elementos iniciales del juego 
  pollitoObj = new Pollito()
  

  //4. iniciamos el intervalo principal del juego
  gameIntervalId = setInterval(() => {
    gameLoop()
  }, Math.round(1000/60)) // 60fps

  //5. iniciamos otros intervalos del juego
  tuberiasIntervalId = setInterval(() => {
    tuberiaAppear()
  }, 2000) // las tuberias aparecen cada 2 segundos

}

function gameLoop() {
  // console.log("juego andando 60 fps")
  pollitoObj.gravityEffect()

  tuberiasArr.forEach((eachTuberiaObj) => {
    eachTuberiaObj.automaticMovement()
  })

  tuberiasDestroy()
  checkCollisionPollitoTuberias()
  checkCollisionPollitoFloor()
}

function tuberiaAppear() {

  let randomPositionY = Math.floor( Math.random() * -120 ) // entre -120 y 0

  let tuberiaObjArriba = new Tuberia( "arriba", randomPositionY)
  tuberiasArr.push(tuberiaObjArriba)

  // las tuberias aparece de dos en dos
  let tuberiasSpaceBetween = 320
  let positionYAbajo = randomPositionY + tuberiasSpaceBetween

  let tuberiaObjAbajo = new Tuberia( "abajo", positionYAbajo)
  tuberiasArr.push(tuberiaObjAbajo)

  // console.log(tuberiasArr.length)


  
  // las tuberias aparecen a una altura aleatoria

}

function tuberiasDestroy() {

  // verificar si existen tuberias en el array y si la primera tuberia que fue añadida ya ha salido de la caja de nuevo
  if (tuberiasArr.length > 0 && (tuberiasArr[0].x + tuberiasArr[0].w) <= 0) {
    // console.log("ha salido la tuberia de la pantalla")
    tuberiasArr[0].node.remove() // 1. destuir el nodo
    tuberiasArr.shift() // 2. removerla del array (la primera)
  }
  
  

}

function checkCollisionPollitoTuberias() {

  // pollitoObj
  tuberiasArr.forEach((eachTuberiaObj) => {
    // eachTuberiaObj
    if (
      pollitoObj.x < eachTuberiaObj.x + eachTuberiaObj.w &&
      pollitoObj.x + pollitoObj.w > eachTuberiaObj.x &&
      pollitoObj.y < eachTuberiaObj.y + eachTuberiaObj.h &&
      pollitoObj.y + pollitoObj.h > eachTuberiaObj.y
    ) {
      // Collision detected!
      // console.log("el pollito se ha estrellado")
      gameOver()
    }
  })

}

function checkCollisionPollitoFloor() {
  if ((pollitoObj.y + pollitoObj.h) >= gameBoxNode.offsetHeight ) {
    gameOver()
  }
}

function gameOver() {

  //1. detener TODOS los intervalos
  clearInterval(gameIntervalId)
  clearInterval(tuberiasIntervalId)

  //2. ocultar la pantalla de juego
  gameScreenNode.style.display = "none"

  //3. mostrar la pantalla final
  gameOverScreenNode.style.display = "flex"

}


//* EVENT LISTENERS

startBtnNode.addEventListener("click", () => {
  startGame()
})

gameBoxNode.addEventListener("click", () => {
  pollitoObj.jump()
})


// mini planificacion

/* 

// - fondo
// - pajarraco (nodo, x, y, h, w, speedGravity, speedJump)
  // - gravity()
  // - jump() - addEventListener. no puede saltar más que el techo.
// - obstaculos (nodo, x, y, h, w, speed)
  // - automaticMovement()

// - obstaculos aparecer (spawn)
// - obstaculos desaparecen (despawn)
// - colision entre pajarraco y tuberias
// - colision entre pajarraco y piso
// - gameOver


EXTRA:
- score
- reiniciar

*/