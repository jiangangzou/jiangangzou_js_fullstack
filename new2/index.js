function Otaku (name,age) {
    this.name = name;
    this.age = age;
    this.habit = 'Games';
}
Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function() {
    console.log('I am' + this.name);
}

const person = new Otaku('积极',20);
person.sayYourName();


// 要返回一个新的对象
// 访问Otake 构造函数里的属性
// 访问到otaku.prototype中的属性或方法



// 参数1是类，后几个参数。。。
// js的函数参数异常灵活，数量可以不定，形参可以不给，
//还有。。。reset 运算整合起来，都会跟arguments结合起来

// function objectFactory(obj,...args) {

// }
function objectFactory() {
    var Constructor = [].shift.call(arguments);
    // console.log(Constructor);
    var obj = new Object();
    // console.log(obj);
    obj._proto_=Constructor.prototype;
    // 在apply内部手动指定函数执行时的this
    Constructor.apply(obj,arguments);
    return obj;
    // console.log(arguments);
    // 肢解动作，第一项
    // 其余项就是参数
    // var constructor = arguments[0];
    // var args = arguments.filter();
} 

var person = objectFactory(Otaku,'鸠摩智',50);

        