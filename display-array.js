// Создайте массив, содержащий только имена пользователей.

const users = [
    { name: 'Vasya', age: 19, rate: 900 },
    { name: 'Dima', age: 18, rate: 1000 },
    { name: 'Sveta', age: 13, rate: 85 },
    { name: 'Peyta', age: 14, rate: 100 },
    { name: 'Seryozha', age: 18, rate: 900 },
    { name: 'Valera', age: 14, rate: 150 }
];

const usersName = [];
for (let i=0; i<users.length; i++) {
    usersName.push(users[i].name);
}
console.log('Source:\n', users, '\n');
console.log('Names:\n', usersName);