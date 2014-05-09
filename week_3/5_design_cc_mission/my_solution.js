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

//Refactored Code 

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
  x: 0,
  y: 0,
  arrow: {
     x: 0,
     y: 0,
     speed: 100
	},
  aggresive: true,
  rage: false,
  alive: true,
  name: "Magnusson",
  height: 8,
  weight: 100,
  moveXY: function(x, y) {
  	this.x = x;
  	this.y = y;
  },
  says: function(str) {
  	console.log(str);
  },
  attackXY: function (x, y){
	this.arrow.x = x;
	this.arrow.y = y;
	console.log("Arrow hit at ".concat(this.arrow.x).concat(", ").concat(this.arrow.y));
	},
	taunt: function(str){
	console.log(str);
	this.rage = true;
	},
	befriend: function(name){
	 this.agressive = false;
	 console.log("Lets be friends, ".concat(name));
	},
	betray: function(name){
		this.rage = true;
		this.attackXY();
	} 
  };
  
  knight.says("Hello!");
  knight.taunt("Die!");
  console.log(knight.rage);
  knight.attackXY(55, 33);
  knight.moveXY(40, 50);
  knight.betray();
  knight.befriend("Loki");
  
var ogre = {
   name: "Loki",   
   height: 11, 
   weight: 200, 
   alive: true,
   x: 0,
   y: 0,
   axe: {
     x: 0,
     y: 0
   },
   moveXY: function(x, y) {
   	this.x = x;
   	this.y = y;
   },
   taunt: function(str) {
   	console.log(str);
   	this.rage = true;
   },
   says: function(str){
     console.log(str);
   },
   attackXY: function(x, y){
     this.axe.x = x;
     this.axe.y = y;
     console.log("Axe swung at ".concat(this.axe.x).concat(", ").concat(this.axe.y));
   },
   betray: function(name){
    this.rage = true;
	  this.attackXY();
   },
  agressive: true,
  rage: false
}; 

ogre.says("Hello!");
ogre.taunt("I'll eat you!");
console.log(ogre.rage);
ogre.attackXY(33, 21);
ogre.betray("Magnusson");
//ogre.befriend();

// Reflection: 
// I worked on this project for several hours with Arik Gadye.  We tried to create a storyline that would be fun like the 
// Code Combat games and then we defined all necessary objects that would need to be called throughout the game.   
// This exercise was both challenging and enjoyable.  We are pretty unsure of how this code works, so we will need to revisit this 
//code after we learn a little bit more about JS. 
// 
// What parts of your strategy worked? What problems did you face? We had a great time writing the psedocode, the storyline.  We 
//also had a great time creating the objects and functions.  We are unforotunately not sure how to run the code, so we are 
//not sure if all of our work was good/passable. 

//What questions did you have while coding? What resources did you find to help you answer them?
//We had a few questions regarding how to create objects.  We had trouble determining whether or not the code would run.


//What concepts are you having trouble with, or did you just figure something out? If so, what? I am still struggling with 
//creating test code and running it through the terminal window. I am also still learning how to use git commands in terminal. 
//Did you learn any new skills or tricks? I learned better practices to pair program.  It is starting to get more comfortable. 

//How confident are you with each of the Learning Competencies? 
//Which parts of the challenge did you enjoy? I loved building storylines/pseudocode.  I also enjoy building the objects and functions for each part. 
//Which parts of the challenge did you find tedious? Nothing was really tedious, but it took a few minutes to ensure that each of our functions were 
//working properly. 
// 
// 
// 
//
