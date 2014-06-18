/**
 * Created by WLane on 6/12/2014.
 */
runClub.controller('homeController',['$scope', function($scope){
    $scope.helloWorld = "Is this even working";
    $scope.images = [
        "anImage.jpg",
        "twoGuys.jpg",
        "on-tap.jpg"
    ];

    $scope.map = {
        center: {
            latitude:26.283870,
            longitude:-80.188257
        },
        zoom: 17,
        options: {
            scrollwheel: false
        }
    };

}]);