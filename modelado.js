//Modelado creador de disparos.

function newShot (position, velocity){

var shot = {graphic: 'disparo01.png', damage: 1 };

shot._position = position;

shot._velocity = velocity;

var api = {advance: function(){ this._position.y += this._velocity;}};

shot.advance = newShot.api.advance;
return obj;
}


console.log(newShot);

//Modelado enemigo.

var enemy = {
graphic: 'specie01.png', position: {x: 10, y: 10}, currentDirection: 'right', score: 40};

console.log(enemy);

//Modelado nave.

var ship = {graphic : 'ship01.png', lives : 3, powerUp : false, position: {x: 10, y: 10}, 

moveLeft: function(){this.position.x -= 2;}
, moveRight: function(){this.position.x += 2;}, Shot: function(){newShot(position,2);}};
console.log(ship);