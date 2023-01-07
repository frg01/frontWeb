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

//es6的导出模块数据
/**
 * export 可以全部或部分导出
 */
export {
    sum,
    sub,
    name
}
