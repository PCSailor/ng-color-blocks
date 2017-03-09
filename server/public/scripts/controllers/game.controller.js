colorBlocks.controller('GameController', ['$http', 'DataFactory', function($http, DataFactory) {
// NOTE:  dependancy injector is first line

console.log('game controller running');

var self = this; // NOTE: this is GameController
self.colors = DataFactory.colorArray; // .colors must match html
// NOTE: GameController is dependant on DataFactory.  This requires
// NOTE: gameview.html/.colors must match GameController.js/self.colors
// NOTE: self.colors gets from controller to the DOM
// NOTE: DataFactory.colorArray gets from DataFactory.js to the controlloer



// start game
init();

// resets game to the starting state
function init() {
  self.messageText = "";
  self.currentColor = self.colors[randomNumber(0, self.colors.length - 1)];
  self.colorPrompt = 'Can you find the ' + self.currentColor + ' block?'
}

// click handler for guessing colors
self.handleInput = function(clickedColor) {
  if(clickedColor === self.currentColor) {
    alert('You got it!\n\nNow try another!');
    init();
  } else {
    self.messageText = 'Oh no! You guessed wrong!';
  }
}

//UTILITY FUNCTIONS
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
}]);
