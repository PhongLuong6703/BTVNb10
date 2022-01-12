/*
Tạo một object mới có tên **family** và sử dụng Object **myFamily** như là prototype của object đó
let myFamily = {
  quantity: 4,
  member: ["Dad", "Mom", "Me", "Daughter"],
  location: "Vietnam",
};
*/

let myFamily = {
    quantity: 4,
    member: ["Dad", "Mom", "Me", "Daughter"],
    location: "Vietnam",
};

let family = {
    myFamily
}

console.log(family);