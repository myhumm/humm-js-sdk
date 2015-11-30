'use strict';

window.onload = function() {

    var songId      = '557ecbf86a64fc1b8bed533f',
        userId      = '5649c5f4ae8c502a24a46a99a',
        playlistId  = '54d2c0e6ae8c50911ba2fcbd';

    humm.users.me(function(err, res){
        console.log('--------------------- users.me()----------');
        console.log(res);
    });

    humm.users.discoverReleases(function(err, res){
        console.log('--------------------- users.discoverReleases()----------');
        console.log(res);
    });

    humm.users.discoverArtists(function(err, res){
        console.log('--------------------- users.discoverArtists()----------');
        console.log(res);
    });

    humm.users.discoverPlaylists(function(err, res){
        console.log('--------------------- users.discoverPlaylists()----------');
        console.log(res);
    });

    humm.users.addFavourites(songId, function(err, res){
        console.log('--------------------- users.addFavourites()----------');
        console.log(res);
    });

    humm.users.addFollowing(userId, function(err, res){
        console.log('--------------------- users.addFollowing()----------');
        console.log(res);
    });

    humm.users.removeFollowing(userId, function(err, res){
        console.log('--------------------- users.removeFollowing()----------');
        console.log(res);
    });


    humm.users.addSubscriptions(playlistId, function(err, res){
        console.log('--------------------- users.addSubscriptions()----------');
        console.log(res);
    });

    humm.users.removeSubscriptions(playlistId, function(err, res){
        console.log('--------------------- users.removeSubscriptions()----------');
        console.log(res);
    });

    humm.users.get(userId, function(err, res){
        console.log('--------------------- users.get()----------');
        console.log(res);
    });

    humm.users.getFavourites(userId, function(err, res){
        console.log('--------------------- users.getFavourites()----------');
        console.log(res);
    });

    humm.users.getFollowing(userId, function(err, res){
        console.log('--------------------- users.getFollowing()----------');
        console.log(res);
    });

    humm.users.getPlaylists(userId, function(err, res){
        console.log('--------------------- users.getPlaylists()----------');
        console.log(res);
    });

    humm.users.getPlays(userId, function(err, res){
        console.log('--------------------- users.getPlays()----------');
        console.log(res);
    });
};
