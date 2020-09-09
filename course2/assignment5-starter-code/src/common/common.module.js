(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://powerful-sea-50478.herokuapp.com/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
