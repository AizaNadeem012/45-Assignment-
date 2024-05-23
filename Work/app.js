// Question No 1:
// Install Node.js, TypeScript and VS Code on your computer.
// Question No 2;
// Personal Message:
// let personName = "";
// personName = prompt('What is Your Name?') || "";
// if (personName !== null && personName !== '') {
//     alert(`“Hello ${personName}, would you like to learn some Python today?”`);
// }
// else {
//     alert('You have to fill your name !');
// }
// Question No 3;
var myName = "aiza";
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase());
// Question No 4:
// Famous Quote:
console.log('"Power corrupts; absolute power corrupts absolutely".');
// Question No 5:
var famous_person = "John Dalberg-Acton";
console.log("".concat(famous_person, " Once Said \"Power corrupts; absolute power corrupts absolutely\" "));
// Qustion No 6;
var whiteName = "             Aiza                ";
console.log(whiteName);
var newName = whiteName.trim();
console.log(newName);
// Question No 7;
// // Question No 7;
// Number Eight: 
// // Addition
console.log(5 + 3);
// // Subtraction
console.log(10 - 2);
// // Multiplication
console.log(4 * 2);
// //Divide
console.log(16 / 2);
// Question No 8:
// // Addition
console.log(5 + 3);
// Subtraction
console.log(10 - 2);
// // Multiplication
console.log(4 * 2);
// //Divide
console.log(16 / 2);
// Question No 9:
// /Favorite Number:
var favourite_Number = 10;
var message = "Here Is Your Favourite Number" + favourite_Number;
console.log(message);
// // Question No 10;
// Adding Comments:
// Program Written By :Aiza Nadeem;
//  Date: 2/16/2024
// This program will written Hello Eric!;
// console.log("Hello Eric!");
// // Question No 11;
// Names:
var names = ["Aiza", "Areeba", "Yusra", "Rabia"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// // Question No 12;
// Greetings:
var news = ["Neha", "Rahimeen", "Kabshah", "Fatima"];
var myMessage = 'Wellcome To The Governor Sindh IT Initiative:';
for (var a = 0; a < news.length; a++) {
    console.log(myMessage + news[a]);
}
// // Question No 13;
// Your Own Array: 
var transportation = ["Bike", "Car", "Train", "Aeroplane", "Cycle"];
for (var b = 0; b < transportation.length; b++) {
    console.log('I would like to Own a ' + transportation[b]);
}
// // Question No 14;
//Guest List: 
var guest_List = ["Aiza", "Areeba", "Wajahat", "Ahmed"];
for (var a = 0; a < guest_List.length; a++) {
    console.log(" Dear ".concat(guest_List[a], ": I am Inviting You For a Today Dinner"));
}
// Question  No 15:
// /Changing Guest List: 
var changing_guest_List = ["Aiza", "Areeba", "Wajahat", "Ahmed"];
for (var a = 0; a < changing_guest_List.length; a++) {
    console.log(" Dear ".concat(changing_guest_List[a], ": I am Inviting You For a Today Dinner"));
}
var absent_Guest = "Aiza";
var add_Guest = "Neha";
guest_List[0] = add_Guest;
for (var a = 0; a < guest_List.length; a++) {
    console.log(" Dear ".concat(guest_List[a], ": I am Inviting You For a Today Dinner"));
}
console.log(" Mr ".concat(absent_Guest, " is not coming to the Dinner."));
