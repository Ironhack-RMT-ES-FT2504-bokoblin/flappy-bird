class Tuberia {

  constructor( type, posicionY ) {
    // todas las propiedades/caracteristicas
    this.type = type // así nos permite saber el tipo de objeto que estamos creando desde cualquier metodo de la clase.

    // las tuberias aparecen con imagenes diferentes
    this.node = document.createElement("img")
    if (this.type === "arriba") {
      this.node.src = "./images/obstacle_top.png"
    } else if (this.type === "abajo") {
      this.node.src = "./images/obstacle_bottom.png"
    }
    

    gameBoxNode.append(this.node) // coje el nodo de imagen y lo inserta en el juego

    this.x = gameBoxNode.offsetWidth
    this.y = posicionY
    this.w = 50
    this.h = 200

    // definimos dimensiones iniciales
    this.node.style.width = `${this.w}px`
    this.node.style.height = `${this.h}px`

    // definir posiciones iniciales
    this.node.style.position = "absolute" // para poder posicionarlo de forma exacta
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`

    this.speed = 2
  }

  automaticMovement() {

    this.x -= this.speed
    this.node.style.left = `${this.x}px`

  }

}