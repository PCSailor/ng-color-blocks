colorBlocks.factory('DataFactory', [function() {
  console.log("data factory running");
  var colors = ['red', 'blue', 'magenta', 'green', 'pink'];
// self.colors = ['red', 'blue', 'magenta', 'green', 'pink'];

function addingNewColorToFactoryArray(newColor) {
  colors.push(newColor);
}





// NOTE: Below lines are only for server communication
// $http({
// method: 'GET',
// url: '/play'
// }).then(function(response){
//   console.log('factory response = ', response.data);
//   color = response
// })

return {
  colorArray: colors,
  addNew: addingNewColorToFactoryArray
}
// NOTE:  factories are different from controllers because they need a return

}]);
