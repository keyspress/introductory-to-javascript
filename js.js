var number = prompt('pick a number');

number = parseInt(number);

var random = Math.floor(Math.random() * number + 1);

alert(random);
