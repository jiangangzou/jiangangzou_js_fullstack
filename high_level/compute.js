function add(a,b) {
    return a + b;
}

function minus(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}
// 函数是一等对象，object
// fn要做什么运算，传进来
//高阶函数，函数的参数或者返回值是函数
function compute(a,b,fn) {
    // switch(operate) {
    //     case '+': return add(a,b);
    //     break;
    //     case '-': return minus(a,b);
    //     break;
    //     case '*': return multiply(a,b);
    //     break;
    //     case '/': return divide(a,b);
    //     break;
    // }
    return fn(a,b);
    

}

console.log(compute(5,8,add));

// js callback fn
//练习将函数作为参数
