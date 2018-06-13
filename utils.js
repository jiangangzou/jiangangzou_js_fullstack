截流throttle,dedounce 

const utils = {
    // 帮忙method执行的次数在规定时间内只有一次
    // method执行时，函数内的this指向一定要指向pureFullPage，才能引用this.container
    // context 上下文环境 对象
    // 节流函数 返回一个函数 这个函数里面包着真正要执行的函数 但是限制了条件
    throttle(method, context, delay) {
        // 高阶函数???
        // 闭包 函数执行的时候的上下文环境
        let wait = false;
        return function(...args) {
            // console.log(args) //真正的事件处理函数
            // method只会执行一次
            // method作为一个普通函数被执行（method()）就会指向window
            // 指针指向context 要保持这个this
            // args执行时浏览器给他的所有参数  如event对象
            // 还是method执行的话要使他的上下文环境跟原来一样，就可以调用以前的方法和参数 使用apply/call可以做到
            if (!wait) {
                method.apply(context, args)
                wait = true;
                setTimeout(() => {
                    wait = false
                }, delay)
            }


        }
    },
    debounce(method,context,event,delay){
        clearTimeout(method.tId);
        method.tId = setTimeout(() => {
            method.call(context,event);
        },delay);
    },
    getWheelDelta(event) {
        if(event.wheelDelta) {
            this.getWheelDelta = event => event.wheelDelta;
            return event.wheelDelta;
        }
        this.getWheelDelta = event => event.detail;
        return -event.detail;
    }
}
