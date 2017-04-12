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
    $scope.isModalOpen = false;
    $scope.inFullScreen = false;

    var screenWidth = window.innerWidth >= 1200 ? window.innerWidth : 1200;
    var screenHeight = window.innerHeight;

    $scope.elemSize = (screenWidth - (screenWidth / 18) / 3) / 18;
    $scope.elemMargin = $scope.elemSize / 3;

    $scope.tableWidth = screenWidth;
    $scope.tableHeight = screenHeight;

    $scope.elements.push({
      "name": "Fullscreen",
      "category": null,
      "number": 0,
      "symbol": "Fu",
      "xpos": 6,
      "ypos": 2,
      "action": function () {
        $scope.goToFullScreen();
      }
    });

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
      $scope.isModalOpen = true;
      $scope.currentElement = e;
      // Get the modal
      var modal = document.getElementById('elemModal');

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      modal.style.display = "block";

      // When the user clicks on <span> (x), close the modal
      span.onclick = function () {
        modal.style.display = "none";
        $scope.isModalOpen = false;
        $scope.$apply();
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
          $scope.isModalOpen = false;
          $scope.$apply();
        }
      }
    };

    $scope.goToFullScreen = function () {
      if ($scope.inFullScreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
          $scope.inFullScreen = false;
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
          $scope.inFullScreen = false;
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
          $scope.inFullScreen = false;
        }
      } else {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
          $scope.inFullScreen = true;
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
          $scope.inFullScreen = true;
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen();
          $scope.inFullScreen = true;
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
          $scope.inFullScreen = true;
        }
      }
    };

  });
