//定义对象，变量，常量，函数
const cat = {
    name:"小猫",
    age:10,
    cry(){
        console.log(name,"喵喵叫")
    }
}

const dog = {
    name:"小狗",
    age:15,
    hi(){
        console.log(name,"汪汪叫")
    }
}

//批量导出
export {
    cat,
    dog
}
