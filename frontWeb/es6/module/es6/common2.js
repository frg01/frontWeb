//定义对象，变量，常量，函数 时就使用export
//在定义时 要保证导出与导入的名称一致
export const sum = function (a, b) {
    return parseInt(a) + parseInt(b);
}
export const sub = function (a, b) {
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
