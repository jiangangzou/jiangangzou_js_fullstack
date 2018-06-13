class PureFullPage {
    // constractor 做属性定义
    constructor(options) {
        const defaultOptions = {
            isShowNav: ture,
            delay: 1000,
            definePage: () => {},
        };
        // 1.手动计算page的高度
        // #pureFullPage高度？
        // 2、第几个页面
        this.options = Object.assign(defaultOptions,options);
        this.container = document.getElementById('pureFullPage');
        this.viewHeight = document.documentElement.clientHeight;
        this.init();
        this.DELAY = this.options.delay;
        this.navDots = [];
        this.currentPosition = 0;
    }
    init() {
            this.container.style.height = `${this.viewHeight}px`;
            // 事件监听 监听mousewheel
            // 浏览器嗅探
            // navigator.userAgent

            // 如果不是火狐
            //mousewheel触发太多次了 需要节流
            // this.scrollMouse方法 负责滚动 执行太频繁就throttle 在规定时间里只执行一次
            // 重新返回一个函数handleMouseWheel ,形成一个闭包，将this.scrollMouse封到内部
            // this 函数执行的context
            // 1000 delay 推迟下执行
            const handleMouseWheel = utils.throttle(this.scrollMouse, this, this.DELAY);
            if (navigator.userAgent.toLowerCase().indexOf('firefox') === -1) {
                document.addEventListener('mousewheel', handleMouseWheel, false);
            } else {
                document.addEventListener('DOMMouseScroll', handleMouseWheel, false);
            }

            window.addEventListener('resize',this.handleWindowResize.bind(this));
        }
        /**
         * 滚轮事件处理函数
         */
    scrollMouse() {
        // console.log(this.container);
        const delta = utils.getWheelDelta(event);
        if(delta < 0) {
            this.goDown();
        } else {
            this.goUp();
        }
    }
    handleWindowResize(event) {
        utils.debounce(this.getNewPosition,this,event,this.DELAY);
    }
    getNewPosition() {
        this.viewHeight = document.documentElement.clientHeight;
        this.container.style.height = `${this.viewHeight}px`;
    }
    goUp() {

    }
    goDown() {
        if(this.container.offsetTop <= this.viewHeight * (this.pagesNum -2)) {
            this.currentPosition = this.currentPosition - this.viewHeight;
        }
    }
}
