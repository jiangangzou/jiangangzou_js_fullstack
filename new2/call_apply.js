var obj1 = {
    name: 'sven'
}

var obj2 = {
    name: 'anne'
}

window.name = 'window';

var getName = function() {
    // 函数的this 由运行时决定，运行时函数的调用方式决定
    console.log(`hi,i am ${this.name}`);
}
// this可以被指定

// getName.call(obj1);
// getName.apply(obj2);

// var func = function(a,b,c) {
//     console.log([a,b,c]);
// }

// func.apply(null,[1,2,3]);
// func.call(null,1,2,3);