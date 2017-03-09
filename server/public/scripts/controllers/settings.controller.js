// colorBlocks.controller('SettingsController', ['$scope', function($scope) { //NOTE: not best practice

colorBlocks.controller('SettingsController', ['DataFactory', function(DataFactory) {
  console.log("settings controller running");
var self = this;

// self.tangent = 'Talk $scope'; // <!-- NOTE: not best practice -->
self.colors = DataFactory.colorsArray; // NOTE:
self.newColor = '';
self.addNewColor = function () {
console.log("addNewColor button clicked");

DataFactory.addNew(self.newColor);
};


}]);
