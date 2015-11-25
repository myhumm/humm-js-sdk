'use strict';

window.onload = function() {

    humm.init({
        client_id: '564dc328af59fc5215984f7a',
        //  client_secret: ' mac998cuy498ryc49r7yh94hr974hrw846tndw86tbw',
        redirect_uri:'http://localhost:8080/webpack-dev-server/connectComplete.html'
    });

    humm.radio(function(error, response) {
        console.log('------------- humm.radio() -------------');
        console.log(error);
        console.log(response);
    });


    //Auth examples
    var authViaImplicitGrant = function(){
        humm.authViaImplicitGrant(function(error, response) {
            console.log('------------- authViaImplicitGrant complete -------------');
            console.log(error);
            console.log(response);
        });
    };
    document.getElementById('authViaImplicitGrant').addEventListener('click', authViaImplicitGrant);


    var authViaAuthorizationCode = function(){
        humm.authViaCodeGrant(function(error, response) {
            console.log('------------- authViaAuthorizationCode complete -------------');
            console.log(error);
            console.log(response);
        });
    };
    document.getElementById('authViaAuthorizationCode').addEventListener('click', authViaAuthorizationCode);


    var isConnect = function(){
        console.log(humm.isAuthorised())
    };
    document.getElementById('isConnect').addEventListener('click', isConnect);
};
