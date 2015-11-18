'use strict';
(function() {
  angular
      .module("cgkMusicStore", ["ngRoute"])
      .config(function($routeProvider){
        $routeProvider
            .when("/music_store", {
              templateUrl: "template/all_songs.html",
              controller: "AllSongsController",
              controllerAs: "vm"
            })
            .when("/liked_songs", {
                templateUrl: "template/liked_songs.html",
                controller: "LikedSongsController",
                controllerAs: "vm"
            })
            .otherwise({redirectTo:"/music_store"});
      });
})();
