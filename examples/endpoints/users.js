'use strict';

window.onload = function() {

    var playlistId      = '54d2c0e6ae8c50911ba2fcbd',
        songId          = '557ecbf86a64fc1b8bed533f',
        contributorId   = '5649c5f4ae8c502a24a46a99a';

    humm.artists.addFollowers(artistId, function(err, res){
        console.log('--------------------- artists.addFollowers()----------');
        console.log(res);
    });



};
