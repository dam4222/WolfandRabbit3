'use strict'

require('angular')
require('angular-ui-router')
require('angular-resource')
require('angular-animate')
require('angular-sanitize')
require('./modules/Modal')
require('./modules/UI')

// require('./js/parallax')
// require('./js/animated-nav')
// require('./js/audio-player')

angular.module('wolfandrabbit2', [
	'ui.router', 
	'ngResource', 
	'Modal', 
	'UI',
	'ngSanitize'
])

.config(require('./routes'))

.controller('homeCtrl', ['$scope', '$state', '$resource', 'Videos', require('./controllers/homeCtrl.js')])
.controller('aboutCtrl', ['$scope', '$state', require('./controllers/aboutCtrl.js')])
.controller('libCtrl', ['$scope', '$state', 'Tracks', '$animate', 'Tags', 'Audio', require('./controllers/libCtrl.js')])
.controller('checkoutCtrl', ['$scope', '$state', 'Tracks', 'Stripe', require('./controllers/checkoutCtrl.js')])
.controller('stripePaymentCtrl', ['$scope', '$http', '$rootScope', require('./controllers/stripePaymentCtrl.js')])
// .controller('playerCtrl', ['$sce', require('./controllers/playerCtrl.js')])


.service('Videos', ['$resource', '$q', 'Video', require('./services/Videos.js')])
.service('Tracks', ['$resource', '$q', 'Track', require('./services/Tracks.js')])
.service('Tags', ['$resource', '$q', require('./services/Tags.js')])
.service('Cart', ['$rootScope', '$sce', 'Modals', require('./services/Cart.js')])
.service('Stripe', ['$rootScope', '$sce', 'Modals', '$http', require('./services/Stripe.js')])
.service('Audio', [ require('./services/Audio.js')])

.factory('Video', ['$sce', 'Modals', require('./factories/Video.js')])
.factory('Track', ['Cart', '$filter', require('./factories/Track.js')])

.directive('state', ['$rootScope', '$state', '$animate', '$timeout', require('./directives/state.js')])
.directive('parallax', ['$timeout', 'Scroller', require('./directives/Parallax.js')])
.directive('sticky', ['Scroller', require('./directives/navbar.js')])
.directive('remove', ['Scroller', require('./directives/removeBg2.js')])
.directive('addToCart', ['$rootScope', '$animate', '$timeout', require('./directives/addToCart.js')])
.directive('player', ['$rootScope', '$animate', '$timeout', 'Audio', require('./directives/player.js')])
.directive('audio', ['Audio', require('./directives/audio.js')])

.filter('secondsToDateTime', [require('./filters/secondsToDateTime.js')])
.filter('filterMultiple', [require('./filters/filterMultiple.js')])



angular.bootstrap(document, ['wolfandrabbit2']);

//Put your damn google analytics number here 
(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
e=o.createElement(i);r=o.getElementsByTagName(i)[0];
e.src='//www.google-analytics.com/analytics.js';
r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
ga('create','UA-XXXXX-X');ga('send','pageview');