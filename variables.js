let make = 'Nissan'; 
console.log ( 'make', make);

let model = 'Sentra'; 
console.log ( 'model', model);

let year = '2015'; 
console.log ( 'year', year);

let color = 'Black'; 
console.log ( 'color', color);

let classification = 'Stadard'; 
console.log ('classification',classification );

let engine = 'Gas';
console.log ('engine', engine);

let cylinders = 'inline 4'
console.log ( "cylinders", cylinders);

// Two different ways to combine strings.
console.log (`My car is a ${year} ${make} ${model} ${color} `) // This is a template literal.
console.log("My car is a"+" " + year+" " + make+ " " + model+ " " + color) // This is combining variables with strings.