import dog1 from "./a.js";

//b.js中定义了对象
const dog2 = {
    say() {
        console.log(dog1.dog.hi())
    }
}
