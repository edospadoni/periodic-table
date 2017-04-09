'use strict';

/**
 * @ngdoc function
 * @name periodicTableApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the periodicTableApp
 */
angular.module('periodicTableApp')
  .controller('MainCtrl', function ($scope) {
    $scope.elements = data.elements;
    $scope.currentElement = {};

    var screenWidth = window.innerWidth >= 1200 ? window.innerWidth : 1200;
    var screenHeight = window.innerHeight;

    $scope.elemSize = (screenWidth - (screenWidth / 18) / 3) / 18;
    $scope.elemMargin = $scope.elemSize / 3;

    $scope.tableWidth = screenWidth;
    $scope.tableHeight = screenHeight;

    $scope.getTimes = function (n) {
      return new Array(n);
    };

    $scope.elementPos = function (index) {
      return index * $scope.elemSize + $scope.elemMargin;
    };

    $scope.getCategory = function (category) {
      return category.replace(/\s/g, '-');
    };

    $scope.openDetailModal = function (e) {
      $scope.currentElement = e;
      // Get the modal
      var modal = document.getElementById('elemModal');

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      modal.style.display = "block";

      // When the user clicks on <span> (x), close the modal
      span.onclick = function () {
        modal.style.display = "none";
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    };

  });
