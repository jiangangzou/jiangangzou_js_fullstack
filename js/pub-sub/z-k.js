var zk = {};

zk.peopleList = [];

zk.listen = function(fn) {
    this.peopleList.push(fn);
}

zk.tragger = function() {
    for (var i=0,fn; fn = this.peopleList[i++];) {
        fn.apply(this,arguments);
    }
}

zk.listen(function(msg) {
console.log("shoudao"+`${msg}`+"sh;klsl;ch;l");
})

zk.tragger('我要发布消息');