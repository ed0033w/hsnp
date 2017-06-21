

var result = new Array();

firebase.auth().onAuthStateChanged(function(user) {

    if(user){
        

        firebase.database().ref('/posts').orderByChild("uid").equalTo(user.uid).on("child_added",function(snapshot) {

        //console.log(snapshot.val());
        //console.log(JSON.stringify(snapshot.val()))
        
        result.push(snapshot.val());


        });
    
        var article = new Vue({
            el: '#article',
            data: {
                questionCards: result
            },
            methods:{
                deletePost: function(post){
                    //alert(this.id);
                    firebase.database().ref('/posts/'+ post).remove().then(function(){
                        window.location.href = 'personalPage.html';
                    });
                }
            }
        });
    }

});