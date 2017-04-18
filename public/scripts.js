
const memoryPal = angular.module('memoryPal', [
  'ngRoute',
]);
memoryPal.controller('mainController', ($scope) => {
  $scope.message = 'you see me?';
  console.log($scope.message);
});
