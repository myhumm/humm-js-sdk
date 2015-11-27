'use strict';

window.onload = function() {

    humm.init({
        client_id: '56570bacae8c5087411778a3',
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
