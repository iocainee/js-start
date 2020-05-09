let budget,
	shopName,
	time,
	price

function start() {
	budget = prompt('What is your budget?');

	while (isNaN(budget) || budget == '' || budget == null) {
		budget = prompt('What is your budget?');
	}

	shopName = prompt('What is your shop name?').toUpperCase();
	time = 19;
}
/*start();*/

let mainList = { // всю инфу заносим в объект
	budget: budget,
	shopName: shopName,	
	open: false,
	shopGoods: [],
	employers: {},
	discount: true
};

function chooseGoods() {
		for (let i = 0; i < 5; i++) {
			let a = prompt('What type of goods do you sell?');
			if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
				console.log('All is correct!');
				mainList.shopGoods[i] = a;
			} else {
				i = i - 1;
			}
		}
}
/*chooseGoods();*/

function workTime(time) {
		if(time < 0) {
			console.log('It is impossible!');
		} else if(time > 8 && time < 20) {
			console.log('It is time to work!');
			} else if(time < 24) {
			console.log('It is too late!');
				} else { 
					console.log('There is only 24 hours in a day!');
		}
};
workTime(18);

function dailyBudget() {
		alert("Daily budget: " + mainList.budget / 30);
};
/*dailyBudget();*/

function discountSystem() {
	price = prompt('What is the product price?');
	if(mainList.discount === true) {
		alert("Price with discount is " + price * 0.8);
	} else {	
		alert("Price without discount is " + price);
	}

}
/*discountSystem();*/

function hireEmployers() {
	for (let i = 1; i < 4; i++) {
		let name = prompt("Employer name");
		mainList.employers[i] = name;
	}
}

console.log(mainList);
