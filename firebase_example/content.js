var article;

var reply;

firebase.database().ref('/posts/'+aryPara.id).once('value').then(function(snapshot) {

  article = snapshot.val();

  firebase.database().ref('/users/' + article.uid).once('value').then(function(snapshot) {
    if(snapshot.val().headimg){
      article.headimg = snapshot.val().headimg
    }else{
      article.headimg = 'startimg.jpg'
    }

   var articleCard = new Vue({
        el: '#articleCard',
        data: {
          questionCards: article
        }
    });
  });
      

});


firebase.database().ref('/posts/'+aryPara.id+'/reply').once('value').then(function(snapshot) {  
    reply = snapshot.val();
    var sum = 0;
    var count = 0;
    var replylist = [];
    
    snapshot.forEach(function(element) {
      sum += 1;
      //console.log(element.val().headimg);
      var p = element.val();
      console.log(p);
      console.log(" sum: "+ sum);
    });
    if(reply){
      snapshot.forEach(function(element) {
        var p = element.val();
        firebase.database().ref('/users/' + p.uid).once('value').then(function(snapshot) {
          console.log(snapshot.val())
          if(snapshot.val().headimg){
            p.headimg = snapshot.val().headimg;
          }else{
            p.headimg = 'startimg.jpg';
          }
          replylist.push(p);
          count += 1;
          //console.log("count: "+ count + " sum: "+ sum);
          if(count == sum){
            replylist.sort().reverse();
            var replyCard = new Vue({
              el: '#replyCard',
              data: {
                questionCards: replylist
              },
              methods:{
                  deleteReply: function(article_id,reply_id){
                      //alert(this.id);
                      firebase.database().ref('/posts/'+ article_id + '/reply/' + reply_id).remove().then(function(){
                          window.location.href = 'content.html?id=' + article_id;
                      });
                  }
              }
            });
          }

        });
      });
    }else{
      var replyCard = new Vue({
        el: '#replyCard',
        data: {
          questionCards: reply
        },
        methods:{
            deleteReply: function(article_id,reply_id){
                //alert(this.id);
                firebase.database().ref('/posts/'+ article_id + '/reply/' + reply_id).remove().then(function(){
                    window.location.href = 'content.html?id=' + article_id;
                });
            }
        }
      });
    }
    /*for(element in reply){
      firebase.database().ref('/users/' + element.uid).once('value').then(function(snapshot) {
        if(snapshot.val().headimg){
          element.headimg = snapshot.val().headimg
        }else{
          element.headimg = 'startimg.jpg'
        }
      });
    }*/




    /*var replyCard = new Vue({
        el: '#replyCard',
        data: {
          questionCards: reply
        },
        methods:{
            deleteReply: function(article_id,reply_id){
                //alert(this.id);
                firebase.database().ref('/posts/'+ article_id + '/reply/' + reply_id).remove().then(function(){
                    window.location.href = 'content.html?id=' + article_id;
                });
            }
        }
      });*/

  });
  
function share(){
  FB.ui({
    method: 'share',
    display: 'popup',
    href: location.href,
  }, function(response){});
}
