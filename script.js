let budget = prompt('What is your budget?'); // Спрашиваем бюджет магазина
let shopName = prompt('What is your shop name?'); // Спрашиваем название магазина
let time = 19;

let mainList = { // всю инфу заносим в объект
	budget: budget,
	shopName: shopName,	
	open: false,
	shopGoods: [],
	employers: {

	}
};

/*for (let i = 0; i < 5; i++) {
	let a = prompt('What type of goods do you sell?');
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
		console.log('All is correct!');
		mainList.shopGoods[i] = a;
	} else {
		i = i - 1;
	}
}*/

let i = 0;
while (i < 5) {	
	let a = prompt('What type of goods do you sell?');
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
	console.log("All is correct!");
	i++;
	} else {
		i = i--;
	}
}

if(time < 0) {
	console.log('It is impossible!');
} else if(time > 8 && time < 20) {
	console.log('It is time to work!');
	} else if(time < 24) {
	console.log('It is too late!');
		} else { 
			console.log('There is only 24 hours in a day!');
};

alert(mainList.budget / 30); // Выводим бюджет на день

console.log(mainList);

function digit (number) {
  var figures = "" + number
  var sum = 0

  for (var i = 0; i < figures.length; i++) 
    sum += +figures[i]

  return sum
}

digit(33721) // output => 2+5+5 = 12