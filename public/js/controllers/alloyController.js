'use strict';

console.log("OUTSIDE: alloy Controller");

app.controller('alloyController', function ($scope, $http, alloyService) {

    console.log("INSIDE: alloy Controller");

    $scope.collectionPlate = function () {

        alloyService.getHomeBrewCount(function (response) {

            console.log("_________________________________");
            console.log("getHomebrew response.DATA: ");
            console.info(response);
            console.log("_________________________________");
            $scope.totalAmountOfItemsInThisColletection = response.data;

        });

        $scope.refresh();
    }

    $scope.refresh = function () {

        alloyService.getHomeBrew(function (response) {

            console.log("_________________________________");
            console.log("getHomebrew response.DATA: ");
            console.info(response);
            console.log("_________________________________");
            $scope.gps = response;

        });

    }

    $scope.collectionPlate();

    $scope.refresh();

    $scope.deleteAll = function () {

        alloyService.delAllHomeBrew(function (response) {

            console.log("_________________________________");
            console.log("getHomebrew response.DATA: ");
            console.info(response);
            console.log("_________________________________");
            $scope.gps = response;

        });

        $scope.refresh();
    }




    $scope.addCustom = function () {

        console.log($scope.coord)

        alloyService.postHomeBrew($scope.coord, function (response) {

            console.log("_________________________________");
            console.log("postHomeBrew SUCCESS");
            $scope.refresh();
        })

    }


    $scope.add = function () {

        console.log($scope.coord)

        alloyService.postHomeBrew($scope.coord, function (response) {

            console.log("_________________________________");
            console.log("postHomeBrew SUCCESS");
            $scope.refresh();
        })

    }


    $scope.remove = function (id) {

        console.log(id);

        alloyService.delHomeBrew(id, function (response) {

            console.log("_________________________________");
            console.log("deleteHomeBrew SUCCESS");
            $scope.refresh();
        })
    }

    $scope.edit = function (id) {

        console.log(id)

        alloyService.getSpecificHomeBrew(id, function (response) {

            console.log("_________________________________");
            console.log("getSpecificHomeBrew SUCCESS");
            console.log(response);
            $scope.coord = response.data;
            $scope.refresh();

        })
    }

    $scope.update = function () {

        console.log($scope.coord._id);
        console.log($scope.coord);

        alloyService.putHomeBrew($scope.coord._id, $scope.coord, function (response) {

            console.log("_________________________________");
            console.log("updateHomeBrew SUCCESS");
            console.log(response);
            $scope.refresh();

        })
    }

    $scope.deselect = function () {

        $scope.contact = "";

    }

    /*

    THIS IS WHERE I START TO MAKE THE MAGIC HAPPEN!

    */

    setTimeout(function () {

        setInterval(function () {

            $scope.high = 180;
            $scope.lo = -150;
            $scope.randomLat = Math.floor((Math.random() * $scope.high) + $scope.lo);
            $scope.randomLong = Math.floor((Math.random() * $scope.high) + $scope.lo);

            $scope.customCoordinates = {
                lat: $scope.randomLat,
                long: $scope.randomLong
            }

            // console.info('Lat: ' + $scope.randomLat + ' Long: ' + $scope.randomLong);

            $scope.collectionPlate();
            if ($scope.totalAmountOfItemsInThisColletection <= 1000) {
                $scope.customAdd();
            } else {
                $scope.deleteAll();
            }

        }, 1000);

    }, 1000);

    $scope.customAdd = function () {

        console.log($scope.coord)


        alloyService.postHomeBrew($scope.customCoordinates, function (response) {

            console.log("_________________________________");
            console.log("postHomeBrew SUCCESS");
            $scope.refresh();
        })

    }



});