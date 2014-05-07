// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.Matthew Darin
//  2.Tony Leung


// 1. "YOU SIGNED... WHO?!"

/* Pseudocode
Create Objects for each of our new clients
Declare variable for each object
Each object represents the persons profile 
In each object we will include the clients name, age and a popular quote to remember them by.*/



// 2. "Here they Come!"

 var aSandler = {name: "Adam Sandler", 
                 age: 47, 
                 quote: "That's your home! Are you too good for your home?!"};
                
 var kBell = {name: "Kristen Bell", 
              age: 33, 
              quote: "Do you wanna build a snowman?"};

 var jCarrey = {name: "Jim Carrey", 
               age: 52, 
               quote: "...So you're telling me there's a chance? YEAH!"};
               



// 3. "TIME IS MONEY!"

var aSandler = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!");
var kBell = new Client("Kristen Bell", 33, "Do you wanna build a snowman?");
var jCarrey = new Client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!");

function printClient(client){
    console.log("name: "+ client.name+ " age: "+ client.age + " quote: "+ client.quote);
}





//Building a more re-usable function constructor for our new clients 
//example 
//function employee(name,jobtitle,born)
//{
//this.name=name;
//this.jobtitle=jobtitle;
//this.born=born;
//}
//
//var fred=new employee("Fred Flintstone","Caveman",1970);


function Client(name, age, quote, func)
{
  this.name = name; 
  this.age = age;
  this.quote = quote; 
  this.showQuote = function() {
    console.log("My Quote is: " + this.quote);
  }
}



printClient(aSandler);
printClient(kBell);
printClient(jCarrey);



//Creating function that shows quote of our new Client and displays their quote when called 


//var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
//shooterMcGavin.constructor === Client;
//shooterMcGavin.age === 48;
//shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 4. "SHOW 'EM OFF!"

function printClient(client){
    console.log("name: "+ client.name+ " age: "+ client.age + " quote: "+ client.quote);
}


jCarrey.showQuote();

//Your Reflection:  
//After completing this exercise, I have learned a great deal in 



