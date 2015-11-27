'use strict';

window.onload = function() {

    var songId = '557ecbf86a64fc1b8bed533f';

    humm.songs.getFeatured(function(err, res){
        console.log('--------------------- songs.getFeatured()----------');
        console.log(res);
    });

    humm.songs.getPopular(function(err, res){
        console.log('--------------------- songs.getPopular()----------');
        console.log(res);
    });

    humm.songs.getRecent(function(err, res){
        console.log('--------------------- songs.getRecent()----------');
        console.log(res);
    });

    humm.songs.search('heroes', function(err, res){
        console.log('--------------------- songs.search()----------');
        console.log(res);
    });

    humm.songs.appearsIn(songId, function(err, res){
        console.log('--------------------- songs.appearsIn()----------');
        console.log(res);
    });

    humm.songs.get(songId, function(err, res){
        console.log('--------------------- songs.get()----------');
        console.log(res);
    });

    humm.songs.getSimilar(songId, function(err, res){
        console.log('--------------------- songs.getSimilar()----------');
        console.log(res);
    });

/*    humm.songs.getStaffPicks(function(err, res){
        console.log('--------------------- songs.getStaffPicks()----------');
        console.log(res);
    });*/
};
