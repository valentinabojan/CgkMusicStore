'use strict';
(function() {
    angular
        .module("cgkMusicStore")
        .controller("AllSongsController", AllSongsController)
        .filter('filterByName', filterByName);

    function AllSongsController(musicStoreService) {
        var vm = this;

        vm.searchedSong = "";
        vm.filterByName = filterByName;
        vm.like = likeSong;
        vm.dislike = likeSong;

        activate();

        function activate() {
            musicStoreService.getAllSongs().then(function (data) {
                vm.songs = data;
            });
        }

        function likeSong(song) {
            song.liked = !song.liked;
        }
    }

    function filterByName(){
        return function(songs, searchedSong) {
            var filteredSongs = [];
            angular.forEach(songs, function(song) {
                if(song.name.indexOf(searchedSong) > -1) {
                    filteredSongs.push(song);
                }
            });
            return filteredSongs;
        }
    }

})();