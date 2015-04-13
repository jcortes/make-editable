angular.module('meApp', [])

.directive('makeEditable', function($sce){
    return {
        restrict: 'A',
        templateUrl: 'make-editable.html',
        transclude: true,
        scope: true,
        link: function(scope, element, attrs){
            scope.showEdit = false;
            scope.enable = function(){
                scope.showEdit = true;
            };
            scope.disable = function(){
                scope.showEdit = false;
            };
        }
    };
})