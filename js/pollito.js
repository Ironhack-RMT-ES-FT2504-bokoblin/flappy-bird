class Pollito {

  constructor() {
    // todas las propiedades/caracteristicas

    this.node = document.createElement("img")
    this.node.src = "./images/flappy.png"

    gameBoxNode.append(this.node) // coje el nodo de imagen y lo inserta en el juego

    this.x = 50
    this.y = 50
    this.w = 40
    this.h = 35

    // definimos dimensiones iniciales
    this.node.style.width = `${this.w}px`
    this.node.style.height = `${this.h}px`

    // definir posiciones iniciales
    this.node.style.position = "absolute" // para poder posicionarlo de forma exacta
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`

    this.gravitySpeed = 2;
    this.jumpSpeed = 40;
  }

  // .todos los metodos/acciones
  gravityEffect() {
    // console.log("fuerza de gravedad sobre el pollito")
    this.y += this.gravitySpeed
    //! SIEMPRE que una propiedad de dimension, posicion, estilo cambie, DEBEMOS actualizar el style del nodo.
    this.node.style.top = `${this.y}px`
  }

  jump() {
    if (this.y > 0) {
      // solo puede saltar si está dentro de la caja de juego
      this.y -= this.jumpSpeed
      this.node.style.top = `${this.y}px`
    }
  }

}