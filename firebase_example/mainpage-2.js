firebase.database().ref('/posts/test').once('value').then(function(snapshot) {


var article = new Vue({
  el: '#article',
  data: {
    questionCards: snapshot.val()
  }
})

});

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes: routes
})
/*
var result = new Array();

firebase.auth().onAuthStateChanged(function(user) {

    if(user){



      /*  firebase.database().ref('/posts/test').orderByChild("uid").equalTo(user.uid).on("child_added",function(snapshot) {

        //console.log(snapshot.val());
        //console.log(JSON.stringify(snapshot.val()))

        result.push(snapshot.val());


    });

    var article = new Vue({
        el: '#article',
        data: {
            questionCards: result
        }
        })
    }

});

*/
/*var app = new Vue({
    router,
    el: '#mainpage',
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
        }]
      //  questionCards: result
        ,

    },
    methods: {
        like: function(index) {
            console.log(index);
            this.questionCards[index].unliked = !this.questionCards[index].unliked;
        }
    }
}).$mount('#mainpage-2')
*/
