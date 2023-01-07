//导入数据视为对象  引入
//如果导入时只需要部分数据，可以导入部分数据
const m = require("./function.js")

const {sub} = require("./function.js")

//使用
//只要idea可以识别变量、函数、对象 就没问题
console.log(m.sub("100","200"));
console.log(m.sum("10","90"));
console.log(m.name);
console.log(m.PI);
console.log(m.sub("30","15"));