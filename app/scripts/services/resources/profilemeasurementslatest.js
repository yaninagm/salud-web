'use strict';

/**
 * @ngdoc service
 * @name saludWebApp.profileMeasurementLatest
 * @description
 * # profileMeasurementLatest
 * Factory in the saludWebApp.
 */
angular.module('saludWebApp')
  .factory('ProfileMeasurementsLatest', function (global, $resource) {

    // URL of specific API resource
    var url=global.getApiUrl()+'/my/measurements/latest';

     return $resource( url,
        {},
        {query:{method:'GET',isArray:false}}); 
   });
