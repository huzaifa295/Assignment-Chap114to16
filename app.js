//     //  JAVASCRIPT
//     //  Assignment 14 - 16

// //  Qusetion no. 1

var student_names = [];
console.log(student_names);

// //  Qusetion no. 2

var student_names = new Array();
console.log(student_names);

// //  Qusetion no. 3

var string_array = ["Mango", "Banana", "Orange", "Apple"];
console.log(string_array);

// //  Qusetion no. 4

var num_array = [1, 2, 3, 4];
console.log(num_array);

// //  Qusetion no. 5

var boolean_array = [true, false];
console.log(boolean_array);

// //  Qusetion no. 6

var mixed_array = ["Mango", 1, true];
console.log(mixed_array);

// //  Qusetion no. 7

var education_qualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M. Phil.",
  "PhD",
];
console.log(education_qualifications);

// //  Qusetion no. 8

var student_name = ["Huzaifa", "Hashir", "Sadiq"];
var student_score = [480, 320, 230];
var Students_parcentage = [96, 64, 46];
var list = [
  `Score of ${student_name[0]} is ${student_score[0]}. Percentage:${Students_parcentage[0]}%`,
  `Score of ${student_name[1]} is ${student_score[1]}. Percentage:${Students_parcentage[1]}%`,
  `Score of ${student_name[2]} is ${student_score[2]}. Percentage:${Students_parcentage[2]}%`,
];
console.log(list);

// //  Qusetion no. 9

var colors = ["Red", "Yellow", "Green", "Pink", "Orange"];

var new_color = prompt("Enter a new color at the begining");
colors.unshift(new_color);
console.log(colors);

var new_color = prompt("Enter a new color at the last");
colors.push(new_color);
console.log(colors);

var new_color = prompt("Enter a new color at the begining");
colors.unshift(new_color);
console.log(colors);

var new_color = prompt("Enter another new color at the begining");
colors.unshift(new_color);
console.log(colors);

colors.shift();
console.log(colors);

colors.pop();
console.log(colors);

var index = parseInt(prompt("Enter index add color"));
var new_color = prompt("Enter a new color");
colors.splice(index, 0, new_color);
console.log(colors);

// // Qusetion no. 10

var students_score = [320, 230, 480, 120];
console.log(students_score.sort());

// //  Qusetion no. 11

var cities_list = ["Karachi", "Lahore", "Islamabad", "Queeta", "Peshawar"];
console.log(`Cities list: ${cities_list}`);
console.log(
  `Selected cities list: ${cities_list[1]},${cities_list[2]},${cities_list[3]},`
);

// //  Qusetion no. 12

var arr = ["This " + "is " + "my " + "cat"];
console.log(arr);

// //  Qusetion no. 13

var devices = [];
devices.push("Keyboard");
console.log(devices);
devices.push("mouse");
console.log(devices);
devices.push("printer");
console.log(devices);
devices.push("moniter");
console.log(devices);

// //  Qusetion no. 14

var devices = [];
devices.unshift("Keyboard");
console.log(devices);
devices.unshift("mouse");
console.log(devices);
devices.unshift("printer");
console.log(devices);
devices.unshift("moniter");
console.log(devices);

// //  Qusetion no. 15

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");

for (var i = 0; i < manufacturers.length; i++) {
  document.write(
    '<option value="' + manufacturers[i] + '">' + manufacturers[i] + "</option>"
  );
}