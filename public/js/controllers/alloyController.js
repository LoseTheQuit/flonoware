'use strict';

console.log("OUTSIDE: alloy Controller");

app.controller('alloyController', function($scope, $http, alloyService) {

  console.log("INSIDE: alloy Controller");

  $scope.totalNO = 0;
  $scope.totalYES = 0;

  $scope.openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  }

  $scope.closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  }
  $scope.collectionPlate = function() {

    alloyService.getVoteCount(function(response) {
      console.log("_________________________________");
      // console.log("getHomebrew response.DATA: ");
      // console.info(response);
      console.log("_________________________________");
      $scope.totalAmountOfItemsInThisColletection = (response.data + 1);

    });

    $scope.refresh();
  }

  $scope.refresh = function() {
    alloyService.getVotes(function(response) {
      console.log("_________________________________");
      // console.log("getVotes response.DATA: ");
      // console.info(response.data);
      console.log("_________________________________");

      if (response.data[response.data.length - 1].answer === "yes") {
        $scope.totalYES++;
      } else {
        $scope.totalNO++;
      }

      $scope.votes = response;
    });
  }

  $scope.collectionPlate();

  $scope.refresh();

  $scope.deleteAll = function() {

    alloyService.delAllVotes(function(response) {

      console.log("_________________________________");
      console.log("getHomebrew response.DATA: ");
      console.info(response);
      console.log("_________________________________");
      $scope.calexit = response;

    });
    $scope.totalNO = 0;
    $scope.totalYES = 0;
    $scope.refresh();
  }

  $scope.addCustom = function() {

    console.log($scope.coord)

    alloyService.postHomeBrew($scope.coord, function(response) {

      console.log("_________________________________");
      console.log("postHomeBrew SUCCESS");
      $scope.refresh();
    })

  }

  $scope.add = function() {

    console.log($scope.coord)

    alloyService.postHomeBrew($scope.coord, function(response) {

      console.log("_________________________________");
      console.log("postHomeBrew SUCCESS");
      $scope.refresh();
    })

  }

  $scope.remove = function(id) {

    console.log(id);

    alloyService.delHomeBrew(id, function(response) {

      console.log("_________________________________");
      console.log("deleteHomeBrew SUCCESS");
      $scope.refresh();
    })
  }

  $scope.edit = function(id) {
    getVoteCount
    console.log(id)

    alloyService.getSpecificHomeBrew(id, function(response) {

      console.log("_________________________________");
      console.log("getSpecificHomeBrew SUCCESS");
      console.log(response);
      $scope.coord = response.data;
      $scope.refresh();

    })
  }

  $scope.update = function() {

    console.log($scope.coord._id);
    console.log($scope.coord);

    alloyService.putHomeBrew($scope.coord._id, $scope.coord, function(response) {

      console.log("_________________________________");
      console.log("updateHomeBrew SUCCESS");
      console.log(response);
      $scope.refresh();

    })
  }

  $scope.deselect = function() {
    $scope.contact = "";
  }

  /*

  THIS IS WHERE I START TO MAKE THE MAGIC HAPPEN!

  */

  setTimeout(function() {

    setInterval(function() {

      $scope.high = 180;
      $scope.lo = -150;
      $scope.randomNum = Math.floor((Math.random() * $scope.high) + $scope.lo);

      $scope.userVOTE = {
        answer: $scope.randomNum > -80
          ? "yes"
          : "no"
      }

      $scope.collectionPlate();
      if ($scope.totalAmountOfItemsInThisColletection <= 10000) {
        $scope.customAdd();
      } else {
        $scope.deleteAll();
      }

    }, 1000);

  }, 1000);

  $scope.customAdd = function() {

    console.log($scope.coord)

    alloyService.postVotes($scope.userVOTE, function(response) {
      console.log("_________________________________");
      console.log("postHomeBrew SUCCESS");
      $scope.refresh();
    })

  }

  $scope.addVote = function(x) {
    $scope.userVOTE = {
      answer: x
    }
    alloyService.postVotes($scope.userVOTE, function(response) {
      console.log("_________________________________");
      console.log("postVOTE SUCCESS");
      $scope.refresh();
    })
  }

});
