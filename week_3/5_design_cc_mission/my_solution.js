// I worked [ with:Matthew Darin & Arik Gadye] on this Challenge 
//
// The STORY:
//(The story is set on a XY axis with no boundary restrictions) 
//Magnusson and the evil ogre Loki are out to get one another.  Both Loki and Magnusson begin the game in a 
//state of aggression (aggressive: true).  'aggression: true' equates to each character moving faster  during the 
//game. Each character has the ability to talk to one another and taunt one another.  If a knight.says or ogre.says, 
//conversation will proceed.  If knight.taunts or ogre.taunts, the recipient of the taunt will become enraged (rage: true).
//In our game, Rage: true will instantly cause the enraged character to attack the other.  
//
//Characters can befriend one another, in lieu of the holiday season. befriend: changes aggressive to false.  In 
//order to befriend another character, or calm their rage down, call Magnusson.befriend(Loki) or Loki.befriend(Magnusson).
//Each character has a weight, height, name, rage, aggression and vector position values.  To change pos: Vector XY,
//you can call knight or ogre.moveXY(xy coordinates). The last property that we created is attackXY, which allows
//each character to attack one another if they are within 10 units of one another.  If one of the characters is hit
//alive goes from true to false.
//
//The games is in your hands.
//
var knight = {
  pos: Vector {
    x: 0,
    y: 0
  }
  }
  aggresive: true,
  rage: false,
  alive: true,
  name: Magnusson,
  height: 8,
  weight: 100
  };
  
  knight.says("");
  knight.taunt("");
  knight.attackXY();
  knight.moveXY();
  knight.betray();
  knight.befriend();
  
  
var ogre = {
  name: Loki,   
  height: 11, 
  weight: 200, 
  alive: true,
  pos: Vector {
    x: 56,
    y: 35,
  }
  agressive: true,
  rage: false
}; 

  ogre.taunt("I'm going to eat you!"); 
  ogre.says("");
  ogre.movesXY();
  ogre.swingAxe();
  ogre.betray();
  ogre.befriend();

var arrow = {
  pos: Vector {
    x: 12,
    y: 23.324
  }
  speed: 100
};

var axe = {
  pos: Vector {
    x: 80,
    y: 99
  }
};

//pseuodocode
//Knight or Ogre says something 
function says(str){
  console.log(str);
}

//Defining method for Knight shooting arrow on XY axis 
function attackXY(x, y){
  arrow.pos.Vector = x;
  arrow.pos.Vector = y;
}

//Ogre or Knight move along the XY axis 
function movesXY(x, y){
  this.x = x;
  this.y = y;
}

//Ogre or Knight betray can betray one another
function betray(name){
  attackXY();  
  swingAxe();
}

function swingAxe(){
  // if the ogre is within 10 length of the knight
  if ((ogre.y <= knight.y - 10 || ogre.y <= knight.y + 10)) && ((ogre.x <= knight.x - 10) || (ogre.x <= knight.x + 10 ))
}
//Ogre or knight befriend one another for a nice Thanksgiving dinner
function befriend(name){
  this.agressive = false;
}

//Ogre or Knight can taunt one another and end the holiday season
function taunt(str){
  console.log(str);
  this.rage = true;
} 

// Reflection
// 
// 
// 
// 
// 
// 
// 
// 
