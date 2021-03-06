 'use strict';
 
 /**
  * @ngdoc service
  * @name saludWebApp.ProfileMeasurements
  * @description
  * # ProfileMeasurements
  * Service in the saludWebApp
  */
 angular.module('saludWebApp')
   .factory('ProfileMeasurements',function(global, $resource) {

    // URL of specific API resource
    var url=global.getApiUrl()+'/my/measurements';

     return $resource( url,
        { },
        {query:{method:'GET',isArray:false}}); 
   });

