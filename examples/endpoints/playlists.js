'use strict';

window.onload = function() {

    var playlistId      = '54d2c0e6ae8c50911ba2fcbd',
        songId          = '557ecbf86a64fc1b8bed533f',
        contributorId   = '5649c5f4ae8c502a24a46a99a',
        songOrder       = {
            songs:[
                { sid :"54d2be65ae8c5003198baa38" },
                { sid :"54d2be65ae8c5003198baa3a" },
                { sid :"54d2be65ae8c5003198baa37" },
                { sid :"54d2be65ae8c5003198baa39" }
            ]
        };

    humm.playlists.create('hack','hack playlist', function(err, res){
        console.log('--------------------- playlists.create()----------');
        console.log(res);
    });

    humm.playlists.getFeatured(function(err, res){
        console.log('--------------------- playlists.getFeatured()----------');
        console.log(res);
    });


    humm.playlists.get(playlistId, function(err, res){
        console.log('--------------------- playlists.get()----------');
        console.log(res);
    });

    humm.playlists.update(playlistId, 'hack', 'hack playlists', true, function(err, res){
        console.log('--------------------- playlists.update()----------');
        console.log(res);
    });


    humm.playlists.order(playlistId, songOrder, function(err, res){
        console.log('--------------------- playlists.order()----------');
        console.log(res);
    });

    humm.playlists.getSongs(playlistId, function(err, res){
        console.log('--------------------- playlists.getSongs()----------');
        console.log(res);
    });

    humm.playlists.addSongs(playlistId, songId, 3, function(err, res){
        console.log('--------------------- playlists.addSongs()----------');
        console.log(res);
    });

    humm.playlists.removeSongs(playlistId, songId, function(err, res){
        console.log('--------------------- playlists.removeSongs()----------');
        console.log(res);
    });

    humm.playlists.addSubscribers(playlistId, function(err, res){
        console.log('--------------------- playlists.addSubscribers()----------');
        console.log(res);
    });

    humm.playlists.removeSubscribers(playlistId, function(err, res){
        console.log('--------------------- playlists.removeSubscribers()----------');
        console.log(res);
    });

    humm.playlists.getPopular(function(err, res){
        console.log('--------------------- playlists.getPopular()----------');
        console.log(res);
    });

    humm.playlists.getRecent(function(err, res){
        console.log('--------------------- playlists.getRecent()----------');
        console.log(res);
    });

    humm.playlists.search('paino', function(err, res){
        console.log('--------------------- playlists.search()----------');
        console.log(res);
    });


};
