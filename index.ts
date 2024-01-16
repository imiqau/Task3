console.log("Hello World")
// Initializing a string array with names
var names : string[] = ["Ali", "Ahsan", "Aamir", "Amin","Amna", "Aalia", "Amber", "Arooj"];
var temp : string = "abc"; // introducing a temporary variable of type string
// Pushing few names in to the last of the array
names.push("Asif");
names.push("Aashir");
names.push('Abeer');
names.push('Aanya');
// Display array length and last element value
console.log(`names array has ${names.length} elements and the last name is ${names[names.length-1]}.`)
names.pop();// Removing last element of the array
console.log(`names array has ${names.length} elements and the last name is ${names[names.length-1]}.`)
temp = names[0];
console.log(temp);
names.shift();// delete first element of the array
console.log(`names array has ${names.length} elements and the First name is ${names[0]}.`);
names.unshift("Ammarra");//Add a name at first element
console.log(`First name is ${names[0]}.`);

names.splice(4,0,'Arshad','Alina');//Add two elements at 5th place of an existing array
console.log(names)
names.splice(7,1);
console.log(names)