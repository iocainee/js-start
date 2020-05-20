let menu = document.querySelector('.menu'), // выбираем класс меню
	menuList = document.querySelectorAll('.menu-item'),
	fifth = document.createElement('li'),
	columns = document.querySelectorAll('.column'),
	advertising = document.querySelector('.adv'),
	title1 = document.getElementById('title')

menu.insertBefore(menuList[2],menuList[1]);

fifth.classList.add('menu-item');
fifth.textContent = 'Пятый пункт';
menu.appendChild(fifth);
document.body.style.backgroundImage = "url('img/apple_true.jpg')";
columns[1].removeChild(advertising);
title1.textContent = 'Мы продаем только подлинную технику Apple!'
