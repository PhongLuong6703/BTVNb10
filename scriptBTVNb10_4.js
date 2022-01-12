/*
Thay đổi giá trị 6 bằng 606 bằng 2 cách:
let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};
*/

let obj = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
  };

//obj.bar[3].xyz = 606;
//console.log(obj);

if (obj['bar']) {
    for (let i in obj['bar']) {
        for (let j in obj['bar'][i]) {
            if (obj['bar'][i][j] === 6) {
                obj['bar'][i][j] = 606;
            }
        }
    }
}
console.log(obj['bar']);