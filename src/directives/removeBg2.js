module.exports = function(Scroller) {
      return {
        restrict: 'A',
        link: function($scope, element, attrs) {
            var height

            angular.element(window).bind('scroll touchmove', function() {
                // console.log(window.pageYOffset)

                if (window.pageYOffset > 720) {
                    element.css('display','block');
                } else {
                    element.css('display','none');
                }
               
            })

        }
    }
}