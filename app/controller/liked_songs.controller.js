'use strict';
(function() {
    angular
        .module("cgkMusicStore")
        .controller("LikedSongsController", LikedSongsController)
        .filter('filterLikedSongs', filterLikedSongs);

    function LikedSongsController(musicStoreService) {
        var vm = this;

        musicStoreService.getAllSongs().then(function (data) {
            vm.songs = data;
        });
    }

    function filterLikedSongs(){
        return function(songs) {
            var filteredSongs = [];
            angular.forEach(songs, function(song) {
                if(song.liked) {
                    filteredSongs.push(song);
                }
            });
            return filteredSongs;
        }
    }
})();