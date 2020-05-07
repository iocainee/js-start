/*Первое усложненное задание*/

let week = [ // Создаем массив с днями недели
	"Sun",
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat"
]; 
var d = new Date(); // в переменную d заносим текущую дату
var n = d.getDay(); // в переменную n заносим номер дня недели

for (let i=0; i < 7; i++) {
	if(week[i] === week[n]) {
		document.write("<br \/>", week[i].italics());		
	} else if(week[i] === week[5] || week[i] === week[6]) {
		document.write("<br \/>", week[i].bold());
	} else if(week[n] === week[5] || week[n] === week[6]) {
		document.write("<br \/>", week[i].bold().italics());
	} else { 
        document.write("<br \/>", week[i]);
    }
	}

/*Второе усложненное задание*/

let arr = ["434535","565345","768434","456372","543523","334734", "37545445"];

document.write("<br \/>У нас имеется следующий массив: ", arr);
document.write("<br \/>Из этого массива мы выбираем только те числа, которые начинаются на 3 или 7:<br \/>")

for (i = 0; i < 7; i++) {
	if(arr[i].substr(0,1) === "3" || arr[i].substr(0,1) === "7") {
		document.write(" ", arr[i]);
	} else {
		i++;
	}
}
