//定义对象，变量，常量，函数
const sum = function (a, b) {
    return parseInt(a) + parseInt(b);
}
const sub = function (a, b) {
    return parseInt(a) - parseInt(b);
}

let name = "学习es5";

const PI = 3.14;


const monster = {
    name:"牛魔王",
    age:500,
    hi() {
        console.log("hi 你好 牛魔王");
    }
}

//导出模块
//需要导出的数据，写入道{}中即可
//可以全部导出，也可以部分导出  导出的对象可视为一个对象
//属性名和和函数/变量/对象名相同，可以简写
//还可以简写
exports = {
    sum,
    sub,
    name,
    PI
}
// module.exports = {
//     sum,
//     sub,
//     name,
//     PI
// }