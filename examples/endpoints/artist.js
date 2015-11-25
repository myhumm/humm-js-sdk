'use strict';

window.onload = function() {

    var artistId = '55116991f9c816a0d639ea75';

    humm.artists.get(artistId, function(err, res){
        console.log('--------------------- artists.get()----------');
        console.log(res);
    });

    humm.artists.addFollowers(artistId, function(err, res){
        console.log('--------------------- artists.addFollowers()----------');
        console.log(res);
    });

    humm.artists.removeFollowers(artistId, function(err, res){
        console.log('--------------------- artists.removeFollowers()----------');
        console.log(res);
    });

    humm.artists.getPlaylists(artistId, function(err, res){
        console.log('--------------------- artists.getPlaylists()----------');
        console.log(res);
    });

    humm.artists.getRadio(artistId, function(err, res){
        console.log('--------------------- artists.getRadio()----------');
        console.log(res);
    });

    humm.artists.getSimilar(artistId, function(err, res){
        console.log('--------------------- artists.getSimilar()----------');
        console.log(res);
    });

    humm.artists.getTopSongs(artistId, function(err, res){
        console.log('--------------------- artists.getTopSongs()----------');
        console.log(res);
    });

    humm.artists.getFeatured(function(err, res){
        console.log('--------------------- artists.getFeatured()----------');
        console.log(res);
    });

    humm.artists.getPopular(function(err, res){
        console.log('--------------------- artists.getPopular()----------');
        console.log(res);
    });

    humm.artists.getRecent(function(err, res){
        console.log('--------------------- artists.getRecent()----------');
        console.log(res);
    });

    humm.artists.search('nujabes', function(err, res){
        console.log('--------------------- artists.search()----------');
        console.log(res);
    });
};
