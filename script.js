let budget = prompt('What is your budget?'); // Спрашиваем бюджет магазина
let shopName = prompt('What is your shop name?'); // Спрашиваем название магазина
let shopGoods1 = prompt('What type of goods do you sell?'); // Узнаем первый товар
let shopGoods2 = prompt('What type of goods do you sell?'); // Узнаем второй товар
let shopGoods3 = prompt('What type of goods do you sell?'); // Узнаем третий товар

let dailyBudget = budget/30; // Высчитываем бюджет на день

alert("Ваш бюджет в день:" + dailyBudget); // Выводим бюджет на день

let mainList = { // всю инфу заносим в объект
	budget: budget,
	shopName: shopName,	
	open: true,
	shopGoods: [shopGoods1,shopGoods2,shopGoods3],
	employers: {

	}
};

function digit (number) {
  var figures = "" + number
  var sum = 0

  for (var i = 0; i < figures.length; i++) 
    sum += +figures[i]

  return sum
}

digit(33721) // output => 2+5+5 = 12