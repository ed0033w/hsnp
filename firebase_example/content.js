var article;

var reply;

firebase.database().ref('/posts/'+aryPara.id).once('value').then(function(snapshot) {

  article = snapshot.val();

   var articleCard = new Vue({
        el: '#articleCard',
        data: {
          questionCards: article
        }
      });

});


firebase.database().ref('/posts/'+aryPara.id+'/reply').once('value').then(function(snapshot) {  
    reply = snapshot.val();

    var replyCard = new Vue({
        el: '#replyCard',
        data: {
          questionCards: reply
        }
      });

  });