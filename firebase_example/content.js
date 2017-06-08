firebase.database().ref('/posts/-Km2IOlax46t1jiJ58n3/reply').once('value').then(function(snapshot) {


var article = new Vue({
  el: '#article',
  data: {
    questionCards: snapshot.val()
  }
})

});