/*
Cho object obj, hãy tạo một array chứa key của tất cả các property của obj và đều viết hoa
  có sử dụng Object.key()
  có sử dụng các method của array
  Có sử dụng toUpperCase()
*/

let obj = {
    b: 2,
    a: 1,
    c: 3,
  };
  
  // TODO
  //?? OUTPUT is [B, A, C]

const keys = Object.keys(obj);
let a =[];
for (let i in keys) {
    a.push(keys[i].toUpperCase());
};
console.log(a)
