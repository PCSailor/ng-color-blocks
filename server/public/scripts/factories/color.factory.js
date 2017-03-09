


// NOTE: From task.factory.js
myApp.factory('TaskFactory', ['$http', function($http) {
// NOTE: Factories have a return
// NOTE: like module.exports
// NOTE: factory is a dependancy that controller is needs

// var testArrayVariable = ['queso', 'bagel', 'donaldBagel', 'salsa'];
// testArrayVariable.pop();

  var factoryTasks = { list: [] }; // NOTE: from TaskController // must be property inside of object:
  getTasks();

  function getTasks() {
    $http({
      method: 'GET',
      url: '/tasks'
    }).then(function(response) {
      console.log('response from factory: ', response);
      console.log('response.data from factory: ', response.data);
      factoryTasks.list = response.data; // NOTE: make sure the factoryTasks points to an object property (aka .list)
      // factoryTasks = {
      //   list: [{name: 'sleep', id: 1}, {name: 'wake up', id: 2}]
      // }
    });
  }
  return { // NOTE: returning $http function
    // NOTE: Inside this return is the public API, if it's not in here, your controller won't see it

    allTasks: factoryTasks,
    updateTasks: getTasks // NOTE: refers to function getTasks()
  };
}]);
