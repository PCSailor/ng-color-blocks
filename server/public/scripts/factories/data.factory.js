colorBlocks.factory('DataFactory', [function() {
  console.log("data factory running");
  var colors = ['red', 'blue', 'magenta', 'green', 'pink'];
// self.colors = ['red', 'blue', 'magenta', 'green', 'pink'];

// $http({
// method: 'GET',
// url: '/play'
// }).then(function(response){
//   console.log('factory response = ', response.data);
//   color = response
//
//
// })

return {
  allColors: colors
}

}]);
