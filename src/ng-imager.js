(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['Imager'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('Imager'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.Imager);
    }
}(this, function (Imager) {
    var ngImager = angular.module('ngImager', []);

    ngImager.directive('ngImager', function(){
        return {
            scope:{
                options: '='
            },
            link:function(scope, element, attrs){
                attrs.$set('data-src', scope.options.dataSrc);
                attrs.$set('data-alt', scope.options.dataAlt);
                attrs.$set('data-class', scope.options.dataClass);
                attrs.$set('data-width', scope.options.dataWidth);
                new Imager(element, {
                    availableWidths: scope.options.availableWidths,
                    widthInterpolator: scope.options.widthInterpolator,
                    availablePixelRatios: scope.options.availablePixelRatios,
                    className: scope.options.className || '',
                    scrollDelay: scope.options.scrollDelay || 250,
                    onResize: scope.options.onResize || true,
                    lazyload: scope.options.lazyload || false,
                    lazyloadOffset: scope.options.lazyloadOffset || 0,
                    onImagesReplaced: scope.options.onImagesReplaced
                });
            }                  
        }
    });
    return ngImager;
}));