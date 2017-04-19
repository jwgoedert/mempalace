angular.module('memoryPal.services', [])
  .factory('Decks', function ($http) {
    return {
      getAll: function (cb) {
        return $http({
          method: 'GET',
          url: '/deckCreator',
        }).then(function successCallback(val) {
          console.log("cards! callback", val.data);
          return val.data;
        });
      },
    };
  });
