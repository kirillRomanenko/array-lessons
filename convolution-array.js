// 1) Найдите самого старшего.
// 2) Посчитайте средний возраст.
// 3) Сгруппируйте пользователей по возрасту.


const users = [
    { name: 'Vasya', age: 19, rate: 900 },
    { name: 'Dima', age: 18, rate: 1000 },
    { name: 'Sveta', age: 13, rate: 85 },
    { name: 'Peyta', age: 14, rate: 100 },
    { name: 'Seryozha', age: 18, rate: 900 },
    { name: 'Valera', age: 14, rate: 150 }
];

console.log('Task #1\n');

const userOld = users.reduce(function (prev, current) {
    if(current.age > prev.age) {
        return current;
    }
    return prev;
});

console.log(userOld);

console.log('Task #2\n');

const resultat=users.reduce(function(a, b) { 
    const res = (a.age + b.age)/users.length;
    return res;
});

console.log(resultat);


