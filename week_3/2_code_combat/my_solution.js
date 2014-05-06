/* Write pseudocode and plan for each challenge.
For example, move right x2, move up x1 and ATTACK! */

/* Challenge 1 Pseudocode 
move down x 2
move rigth x1
move up x2
move right x2
move down x 1
then ATTACK!



Path that I chose: 
*/

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();
 

//Challenge 2 Pseudocode: Grab the Mushroom
//move up x 1
//move right x1
//move left x 1
//move up x 1 
//ATTACK!!!!!

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

//Challenge 3 Pseudocode: Drink the potion
//ATTACK x 1
//move right x 1
//move down x 1
//move up x 1
//move right x 1 
//ATTACK 

this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

//Challenge #4: Taunt the Guards 
//move Right x 1 
//bust down door x 1
//move right x 1
//say something x 1 
//move left x 2
//say something x 1
//move rigth x 1
//say something x 1
//move right x 2 
//move up x 1
//move right x 1 
//say something x 1
//say attack x 2
//say follow me x 1
//move right x 2 

this.moveRight();
this.bustDownDoor();

// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("leeroy Jenkinss!");
this.say("Attack!");
this.say("Attack!");
this.say("Follow me");
this.moveRight();
this.moveRight();

//Challenge #5: It's a Trap 
//move down x 2 
//say something 
//move up x 2
//say something x 2

// Taunt the Ogre and run for cover!
this.moveDown();
this.moveDown();
this.say("Hey Punk Ass");
this.moveUp();
this.moveUp();
this.say("Attack!");

//Challenge #6: Taunt
//Say something x 3 

this.say("Hey big head..");
this.say("Yeah, you heard me");
this.say("I hear your mother makes a nice lobster bisque");

//Challenge #7: Cowardly Taunt 
//move coordinates x 3
//say something x 1
//move coordinates x 1 
//taunt x 1
//move coordinates x 1 (retreat)

this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.

this.say("I can lure them in here.");

// Run your soldier out where the ogres can hear you.

// Say something!

// Then run back behind the arrow towers for safety.

// You can shift+click on the map to insert coordinatethis 
this.moveXY(55, 30);
this.say("Come on dummy!");
this.moveXY(70, 10);

//Challenge #8: Commanding army 
//move coordinates x 3
//greeting x 1
//say follow me x 1 
//move group x 1
//say attack x 1
//NOBODY MESSES WITH THARIN 

this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");

// Saying anything with "follow" in it will get nearby soldiers
// to follow you

// Saying anything with "attack" will send nearby troops into
// a battle mode.

// Make sure Tharin is safe!
this.say("follow me");
this.moveXY(65, 44);
this.say("Attack!");

//Challenge #9 Break the Prison (This one was out of order)
//move right and check each door 

// Write this isFriend(name) spell to tell friend from foe.
// Return true for friends' names, false for ogres' names.
if(name === "William" || name === "Lucas")
    return true;
if(name === "Krogg" || name === "Brack" || name === "MARCUS")
    return false;          // <-- Start here; Krogg is not a friend!
    
return true;

//Challenge # 10 : Mobile Artillery 
//Move coordinates x 1
//attack coordinates x 1
//move coordinates x 1 
//attack coordinates x 3
//move coordinates x 1
//attack coordinates x 1 

this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres

// If they survive a hit, ogres retaliate!
// Larger ogres take more than one hit...
// So, position and aim carefully.
this.moveXY(49, 41);
this.attackXY(49, 67);
this.attackXY(49, 51);//second shot to kill big guy
this.attackXY(70, 57);
this.moveXY(39, 4);
this.attackXY(44, 18);//second shot to kill 2nd big guy.

 
 
 
 
 
 
// Reflection:
// Write your reflection here.

//This lesson was a lot of fun.  I learned basic JS commands and actually saw the impact of those commands.  At first when I saw 
//this lesson, I was nervous that it might become monotonous to keep typing pseudocode for each step, but it wasn't.

//I really saw the value of each step that I took and I feel that I learned a lot.'
