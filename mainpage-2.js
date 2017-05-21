const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes: routes
})

var app = new Vue({
    router,
    el: '#mainpage-2',
    data: {
        questionCards: [{
            fid: 1,
            title: 'Card Title 1',
            // img: 'http://lorempixel.com/800/400/food/1',
            img: 'images/mainpage-2-problem.jpg',
            content: '請救救我這幾何變態問題',
            unliked: true
        }, {
            fid: 2,
            title: 'Card Title 2',
            // img: 'http://lorempixel.com/800/400/food/2',
            img: 'images/mainpage-2-problem.jpg',
            content: '請救救我這幾何變態問題',
            unliked: true
        }, {
            fid: 3,
            title: 'Card Title 3',
            // img: 'http://lorempixel.com/800/400/food/3',
            img: 'images/mainpage-2-problem.jpg',
            content: '請救救我這幾何變態問題',
            unliked: true
        }, {
            fid: 4,
            title: 'Card Title 2',
            // img: 'http://lorempixel.com/800/400/food/2',
            img: 'images/mainpage-2-problem.jpg',
            content: '請救救我這幾何變態問題',
            unliked: true
        }, {
            fid: 5,
            title: 'Card Title 2',
            // img: 'http://lorempixel.com/800/400/food/2',
            img: 'images/mainpage-2-problem.jpg',
            content: '請救救我這幾何變態問題',
            unliked: true
        }, {
            fid: 6,
            title: 'Card Title 2',
            // img: 'http://lorempixel.com/800/400/food/2',
            img: 'images/mainpage-2-problem.jpg',
            content: '請救救我這幾何變態問題',
            unliked: true
        }, {
            fid: 7,
            title: 'Card Title 2',
            // img: 'http://lorempixel.com/800/400/food/2',
            img: 'images/mainpage-2-problem.jpg',
            content: '請救救我這幾何變態問題',
            unliked: true
        }, {
            fid: 8,
            title: 'Card Title 2',
            // img: 'http://lorempixel.com/800/400/food/2',
            img: 'images/mainpage-2-problem.jpg',
            content: '請救救我這幾何變態問題',
            unliked: true
        }],

    },
    methods: {
        like: function(index) {
            console.log(index);
            this.questionCards[index].unliked = !this.questionCards[index].unliked;
        }
    }
}).$mount('#mainpage-2')
