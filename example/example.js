var exampleApp = angular.module( "Example", ['ngImager']);
exampleApp.controller('ExampleCtrl', function($scope){
    $scope.options = {
        dataSrc: "http://loremflickr.com/{width}/500",
        dataAlt: "alternative text",
        dataWidth: "300px",
        dataClass: "picture-of-cat",
        availableWidths: [400, 800, 900, 1200],
        widthInterpolator: function(w,p){
            return w;
        }
    }
});