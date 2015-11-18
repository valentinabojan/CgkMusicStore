'use strict';
(function () {
    angular
        .module("cgkMusicStore")
        .factory("musicStoreService", musicStoreService);

    function musicStoreService($http, $q) {
        var songs = null;
        var service = {
            getAllSongs: getAllSongs
        };

        return service;

        function getAllSongs () {
            if (!songs)
                return getSongsFromUrl();
            return $q.resolve(songs);
        }

        function getSongsFromUrl() {
            return $http({
                method: 'GET',
                url: 'store.json',
                cache: true
            }).then(function(response){
                songs = response.data;
                return songs;
            });
        }
    }
})();