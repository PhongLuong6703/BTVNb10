/*
Cho đoạn code sau, sau đó biểu diễn các cách để truy cập được các thuộc tính bên trong object đó:
  let person = {
    name:       'Bob',
    occupation: 'web developer',
    hobbies:    'painting',
};
*/

let person = {
    name:       'Bob',
    occupation: 'web developer',
    hobbies:    'painting',
};

//Có 2 cách để truy cập được các thuộc tính bên trong object:
// Cách 1: Sử dụng dấu chấm (dot notation): Syntax: object.keys
// Cách 2: Sử dụng dấu ngoặc vuông (bracket notation): Syntax: object['keys']

console.log(person.hobbies);
console.log(person.name);
console.log(person.occupation);

console.log(person['name']);
console.log(person['occupation']);
console.log(person['hobbies']);