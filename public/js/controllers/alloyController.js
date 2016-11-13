'use strict';

console.log("OUTSIDE: alloy Controller");
app.controller('alloyController', function($scope, $http, alloyService) {
  console.log("INSIDE: alloy Controller");

  $scope.totalNO = 0;
  $scope.totalYES = 0;

  $scope.openNav = function() {
    document.getElementById("myNav").style.width = "100%";
  }

  $scope.closeNav = function() {
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

    $scope.getVoteSplit();
    $scope.refresh();
  }

  $scope.getVoteSplit = function() {
    alloyService.getVoteSplitCount(function(response) {
      // console.log("getHomebrew response.DATA: ");
      console.log("____________ SPLIT DATA ____________");
      console.info(response.data.length);
      console.log("____________ SPLIT DATA ____________");
      $scope.totalYES = response.data.length;
      $scope.totalNO = $scope.totalAmountOfItemsInThisColletection - response.data.length;

      console.log("TOTAL: " + ($scope.totalYES + $scope.totalNO));
    });

  }

  $scope.refresh = function() {

    alloyService.getVotes(function(response) {
      // console.log("getVotes response.DATA: ");
      // console.info(response.data);
      console.log("getVotes");
      console.log("_________________________________");

      // if (response.data[response.data.length - 1].answer !== undefined)
      //   if (response.data[response.data.length - 1].answer === "yes") {
      //     $scope.totalYES++;
      //   } else {
      //     $scope.totalNO++;
      // }

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

  /*

  THIS IS WHERE I START TO MAKE THE MAGIC HAPPEN!

  */

  setTimeout(function() {

    setInterval(function() {

      // $scope.high = 12;
      // $scope.lo = 0;
      // $scope.randomNum = Math.floor((Math.random() * $scope.high) + $scope.lo);
      //
      // $scope.userVOTE = {
      //   answer: $scope.randomNum > 5
      //     ? "yes"
      //     : "no"
      // }
      //
      // $scope.collectionPlate();
      // $scope.customAdd($scope.userVOTE);
      // if ($scope.totalAmountOfItemsInThisColletection <= 999999999) {
      //   $scope.customAdd($scope.userVOTE);
      // } else {
      //   $scope.deleteAll();
      // }

      $scope.collectionPlate();

    }, 100);

  }, 1000);

  $scope.customAdd = function(userVote) {

    alloyService.postVotes(userVote, function(response) {
      console.log("customAdd postVotes - SUCCESS");
      console.log("_________________________________");
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
      $scope.collectionPlate();
    })

  }

});
