//console.log('合唱团')
//talk is js 
//国王，招1000只鸡组成合唱团 
//json object
//只要会嘎嘎嘎的叫的都是鸭子
var choir = [];
var duck = {
    //duck是一个对象
    // name: '鸭王',
    // actor: '任达华',
    duckSingsing: function() {
        console.log('嘎嘎嘎');
    }
}
//jason就是一个对象，不需要new json可以慢慢描述 也是数据交换的标准
var yyy = {
    name: '杨玉杰',
    hasGirlFriend: false,
    birth: '5-23',
    girlAttributes: {
        sex: 'all',
        isAlive: true,
    }
}
console.log(yyy.girlAttributes.sex="false");
var chicken = {
    duckSingsing: function(){
        console.log('嘎嘎嘎');
    }
}

for(var i = 0; i < 999; i++){
    //choir.push(duck);
    joinChoir(duck);
}
// choir.push(chicken);
joinChoir(chicken);
console.log(choir.length);

// for(var i = 0; i < choir.length ; i++){
//     var singer = choir[i];
//     if(!singer.duckSingsing){
//         console.log('不是鸭子');
//         break;
//     }
// }

function joinChoir(ani){
    if(ani && typeof ani.duckSingsing == 'function'){
        choir.push(ani);

    }else {
        console.log('不合要求');
    }
}