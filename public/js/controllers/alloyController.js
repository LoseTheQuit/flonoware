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

  $scope.statesArr_proxy = [
    {
      "name": "Alabama",
      "abbreviation": "AL"
    }, {
      "name": "Alaska",
      "abbreviation": "AK"
    }, {
      "name": "Arizona",
      "abbreviation": "AZ"
    }, {
      "name": "Arkansas",
      "abbreviation": "AR"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "Colorado",
      "abbreviation": "CO"
    }, {
      "name": "Connecticut",
      "abbreviation": "CT"
    }, {
      "name": "Delaware",
      "abbreviation": "DE"
    }, {
      "name": "Florida",
      "abbreviation": "FL"
    }, {
      "name": "Georgia",
      "abbreviation": "GA"
    }, {
      "name": "Hawaii",
      "abbreviation": "HI"
    }, {
      "name": "Idaho",
      "abbreviation": "ID"
    }, {
      "name": "Illinois",
      "abbreviation": "IL"
    }, {
      "name": "Indiana",
      "abbreviation": "IN"
    }, {
      "name": "Iowa",
      "abbreviation": "IA"
    }, {
      "name": "Kansas",
      "abbreviation": "KS"
    }, {
      "name": "Kentucky",
      "abbreviation": "KY"
    }, {
      "name": "Louisiana",
      "abbreviation": "LA"
    }, {
      "name": "Maine",
      "abbreviation": "ME"
    }, {
      "name": "Maryland",
      "abbreviation": "MD"
    }, {
      "name": "Massachusetts",
      "abbreviation": "MA"
    }, {
      "name": "Michigan",
      "abbreviation": "MI"
    }, {
      "name": "Minnesota",
      "abbreviation": "MN"
    }, {
      "name": "Mississippi",
      "abbreviation": "MS"
    }, {
      "name": "Missouri",
      "abbreviation": "MO"
    }, {
      "name": "Montana",
      "abbreviation": "MT"
    }, {
      "name": "Nebraska",
      "abbreviation": "NE"
    }, {
      "name": "Nevada",
      "abbreviation": "NV"
    }, {
      "name": "New Hampshire",
      "abbreviation": "NH"
    }, {
      "name": "New Jersey",
      "abbreviation": "NJ"
    }, {
      "name": "New Mexico",
      "abbreviation": "NM"
    }, {
      "name": "New York",
      "abbreviation": "NY"
    }, {
      "name": "North Carolina",
      "abbreviation": "NC"
    }, {
      "name": "North Dakota",
      "abbreviation": "ND"
    }, {
      "name": "Ohio",
      "abbreviation": "OH"
    }, {
      "name": "Oklahoma",
      "abbreviation": "OK"
    }, {
      "name": "Oregon",
      "abbreviation": "OR"
    }, {
      "name": "Pennsylvania",
      "abbreviation": "PA"
    }, {
      "name": "Rhode Island",
      "abbreviation": "RI"
    }, {
      "name": "South Carolina",
      "abbreviation": "SC"
    }, {
      "name": "South Dakota",
      "abbreviation": "SD"
    }, {
      "name": "Tennessee",
      "abbreviation": "TN"
    }, {
      "name": "Texas",
      "abbreviation": "TX"
    }, {
      "name": "Utah",
      "abbreviation": "UT"
    }, {
      "name": "Vermont",
      "abbreviation": "VT"
    }, {
      "name": "Virginia",
      "abbreviation": "VA"
    }, {
      "name": "Washington",
      "abbreviation": "WA"
    }, {
      "name": "West Virginia",
      "abbreviation": "WV"
    }, {
      "name": "Wisconsin",
      "abbreviation": "WI"
    }, {
      "name": "Wyoming",
      "abbreviation": "WY"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }
  ];
  $scope.statesArr = [
    {
      "name": "Alabama",
      "abbreviation": "AL"
    }, {
      "name": "Alaska",
      "abbreviation": "AK"
    }, {
      "name": "Arizona",
      "abbreviation": "AZ"
    }, {
      "name": "Arkansas",
      "abbreviation": "AR"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "Colorado",
      "abbreviation": "CO"
    }, {
      "name": "Connecticut",
      "abbreviation": "CT"
    }, {
      "name": "Delaware",
      "abbreviation": "DE"
    }, {
      "name": "Florida",
      "abbreviation": "FL"
    }, {
      "name": "Georgia",
      "abbreviation": "GA"
    }, {
      "name": "Hawaii",
      "abbreviation": "HI"
    }, {
      "name": "Idaho",
      "abbreviation": "ID"
    }, {
      "name": "Illinois",
      "abbreviation": "IL"
    }, {
      "name": "Indiana",
      "abbreviation": "IN"
    }, {
      "name": "Iowa",
      "abbreviation": "IA"
    }, {
      "name": "Kansas",
      "abbreviation": "KS"
    }, {
      "name": "Kentucky",
      "abbreviation": "KY"
    }, {
      "name": "Louisiana",
      "abbreviation": "LA"
    }, {
      "name": "Maine",
      "abbreviation": "ME"
    }, {
      "name": "Maryland",
      "abbreviation": "MD"
    }, {
      "name": "Massachusetts",
      "abbreviation": "MA"
    }, {
      "name": "Michigan",
      "abbreviation": "MI"
    }, {
      "name": "Minnesota",
      "abbreviation": "MN"
    }, {
      "name": "Mississippi",
      "abbreviation": "MS"
    }, {
      "name": "Missouri",
      "abbreviation": "MO"
    }, {
      "name": "Montana",
      "abbreviation": "MT"
    }, {
      "name": "Nebraska",
      "abbreviation": "NE"
    }, {
      "name": "Nevada",
      "abbreviation": "NV"
    }, {
      "name": "New Hampshire",
      "abbreviation": "NH"
    }, {
      "name": "New Jersey",
      "abbreviation": "NJ"
    }, {
      "name": "New Mexico",
      "abbreviation": "NM"
    }, {
      "name": "New York",
      "abbreviation": "NY"
    }, {
      "name": "North Carolina",
      "abbreviation": "NC"
    }, {
      "name": "North Dakota",
      "abbreviation": "ND"
    }, {
      "name": "Ohio",
      "abbreviation": "OH"
    }, {
      "name": "Oklahoma",
      "abbreviation": "OK"
    }, {
      "name": "Oregon",
      "abbreviation": "OR"
    }, {
      "name": "Pennsylvania",
      "abbreviation": "PA"
    }, {
      "name": "Rhode Island",
      "abbreviation": "RI"
    }, {
      "name": "South Carolina",
      "abbreviation": "SC"
    }, {
      "name": "South Dakota",
      "abbreviation": "SD"
    }, {
      "name": "Tennessee",
      "abbreviation": "TN"
    }, {
      "name": "Texas",
      "abbreviation": "TX"
    }, {
      "name": "Utah",
      "abbreviation": "UT"
    }, {
      "name": "Vermont",
      "abbreviation": "VT"
    }, {
      "name": "Virginia",
      "abbreviation": "VA"
    }, {
      "name": "Washington",
      "abbreviation": "WA"
    }, {
      "name": "West Virginia",
      "abbreviation": "WV"
    }, {
      "name": "Wisconsin",
      "abbreviation": "WI"
    }, {
      "name": "Wyoming",
      "abbreviation": "WY"
    }
  ];

  console.log($scope.statesArr.length);
  console.log($scope.statesArr.length);
  console.log($scope.statesArr.length);
  console.log($scope.statesArr.length);
  console.log($scope.statesArr.length);
  console.log($scope.statesArr.length);
  console.log($scope.statesArr.length);
  console.log($scope.statesArr.length);
  console.log($scope.statesArr.length);
  console.log($scope.statesArr.length);

  setTimeout(function() {

    setInterval(function() {

      $scope.high = 13;
      $scope.lo = 0;
      $scope.randomNum = Math.floor((Math.random() * $scope.high) + $scope.lo);
      $scope.stateListHi = $scope.statesArr_proxy.length;

      $scope.stateListAns = Math.floor((Math.random() * $scope.stateListHi) + $scope.lo);;

      // $scope.userVOTE = {
      //   answer: $scope.randomNum > 2
      //     ? "yes"
      //     : "no",
      //   location: $scope.statesArr_proxy[$scope.stateListAns].name
      // }

      if ($scope.totalAmountOfItemsInThisColletection <= 999999999) {
        $scope.customAdd($scope.userVOTE);
      } else {
        $scope.deleteAll();
        $scope.customAdd($scope.userVOTE);
      }

      // JACKPOT
      $scope.collectionPlate();
      // JACKPOT

    }, 100);

  }, 5000);

  $scope.customAdd = function(userVote) {

    alloyService.postVotes($scope.userVOTE, function(response) {
      console.log("customAdd postVotes - SUCCESS");
      console.log("_________________________________");
      $scope.refresh();
    })

  }

  $scope.addVote = function(x) {

    $scope.userVOTE = {
      answer: x,
      location: $scope.statesArr_proxy[$scope.stateListAns].name
    }

    alloyService.postVotes($scope.userVOTE, function(response) {
      console.log("_________________________________");
      console.log("postVOTE SUCCESS");
      $scope.collectionPlate();
    })

  }

});
