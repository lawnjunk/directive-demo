'use strict'

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html')
require('./scss/base.scss')
// npm modules
const angular = require('angular')
// app modules
// module constants
const app = angular.module('formDemo', [])
// module logic
app.controller('AdventureController', ['$scope', function($scope){
  $scope.powers = ['fly', 'breath water', 'lazerz', 'ice', 'fire']
  $scope.playerClasses = [
    {id: 0, name: 'slug'},
    {id: 1, name: 'guls'},
    {id: 2, name: 'sloth'}
  ]

  $scope.start = function(){
    if($scope.player.name){
      if ($scope.player.randomPower){
        $scope.player.power = $scope.powers[Math.floor(Math.random() * $scope.powers.length )]
      }

      if ($scope.player.randomClass){
        $scope.player.class = $scope.playerClasses[Math.floor(Math.random() * $scope.playerClasses.length )]
      }

      $scope.player.done = true
    }
  }
}
])
