// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Matthew Darin 
//  2. Tony Leung 


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

//YOUR CODE HERE!
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
//Creating function that shows quote of our new Client and displays their quote when called 
function Client(name, age, quote, func)
{
  this.name = name; 
  this.age = age;
  this.quote = quote; 
  this.showQuote = function() {
    console.log("My Quote is: " + this.quote);
  }
}






// 4. "SHOW 'EM OFF!"
printClient(aSandler);
printClient(kBell);
printClient(jCarrey);
jCarrey.showQuote();
// ** BONUS **


//  Your Reflection:
This was a great coding challenge.  Tony and I had a great time working with one another (at least I think).  I think that there are 
going to be some growing pains with js, since I am new to coding, but it will be worth the effort.  I am going to fully invest
all of my free time into learning js before, during and after the program.  I plan to continue growing my communication skills
to more effectively pair in the future and I also hope to be more knowledgeable about the material in the future.  

Overall, I loved the assignment and the way we were able to talk it out and get through the material in a timely fashion.  
Completing assignments like this make me feel closer to the dev world.  I am grateful that I will have a snapshot like this to view
6 months from now.  It will truly be a testament to the program. 


