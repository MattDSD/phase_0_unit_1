// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.
 
var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}

/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.

   Define the variable 'adam' and create an empty object. Properties will most likely be added later

2. Give adam a name property with the value "Adam".

   Create the property value for name and assign "Adam" to it 

3. Add a spouse property to terah and assign it the value of adam.

  Create a spouse property for the var terah and give it the value adam 

4. Change the value of the terah weight property to 125.

  terah recently lost weight. Adjust her weight from 130 to 125.

5. Remove the eyeColor property from terah.

  Removing eye color property from terah 

6. Add a spouse property to adam and assign it the value of terah.

  Adding spouse property to adam and giving it assignment of terah

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties

   adding children property with no property 

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".

  adding children property 

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".

   adding children property 

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

    adding children property 

11. Add a children property to adam and assign it the value of terah children.

    adding children property


*/

// __________________________________________
// Write your code below.




//1)Define the variable 'adam' and create an empty object. Properties will most likely 
//be added later
adam = {};

//2)Create the property value for name and assign "Adam" to it 
adam = {name: "Adam"};

//Create a spouse property for the var adam and give it the value terah
adam.spouse = terah;

//3)Create a spouse property for the var terah and give it the value adam 
terah.spouse = adam;

//5)Removing eye color property from terah 
terah.eyeColor = undefined;

//7)adding children property with no property 
terah.children = {};

//Added property value for each child of terah (carson, carter and colton)

terah.children.carson = {name: "Carson"};
terah.children.carter = {name: "Carter"};
terah.children.colton = {name: "Colton"};

//Add the value of children as terah's children
adam.children = terah.children;

//4)terah recently lost weight. Adjust her weight from 130 to 125.
terah.weight = 125;







// __________________________________________
// Reflection: Use the reflection guidelines
// 
// This was a learning challenge for me.  I think a few things finally clicked in regards to defining objects.  I feel 
//more comfortable defining and object and assignign it a value moving forward.  I also solidified my knowledge of running
//code from node. I struggled for awhile on a few of the assignments, but did a little bit of googling and was able to dig 
// my way ot.  
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)


assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)
