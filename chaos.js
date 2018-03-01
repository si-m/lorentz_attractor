let buffer
//lorenz constants
let rho = 28
let sigma = 10
let beta = 8 / 3
//time change
const dt = 0.01
//inital positions
let x = 1, y = 3, z = 1
let dx, dy, dz, nx, ny, nz

let points = []
function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL)
}

function draw() {
    background(0)
    translate(0,200, 0)
    scale(10)
    rotateY(frameCount * 0.001)

    points.push([x, y, z])

    //increments
    dx = (sigma * (y - x)) * dt
    dy = (x * (rho - z) - y) * dt
    dz = (x * y - beta * z) * dt

    if(points.length > 1){
        let hu = 0
        noFill()
        beginShape(LINES)
        for (let dot of points){
            stroke(204,hu,200)
            vertex(dot[0], (dot[2])*-1, dot[1])
            hu = (hu+1) % 255
        }
        endShape()
    }

    //update x y z
    x = x + dx
    y = y + dy
    z = z + dz
}

//controls
window.reset = function(){
    background(0)
    x = 1, y = 2, z = 1
    rho = 28
    sigma = 10
    beta = 8 / 3
    points = []
    return "reset & restart!"
}

window.getConstants = function(){
    return {rho, sigma, beta}
}

window.setConstants = function (_rho = 28, _sigma = 10, _beta = 8 / 3){
    background(0)
    x = 1, y = 2, z = 1
    rho = _rho
    sigma = _sigma
    beta = _beta
    points = []
    return { rho, sigma, beta }
}
