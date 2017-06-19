'use strict';

angular.module('services.config', []).constant('configuration', {
    BASE_URL: '@@BASE_URL',    
    GAPI_NAME: '@@GAPI_NAME',
    GAPI_VERSION: '@@GAPI_VERSION',
    GAPI_URL: '@@GAPI_URL'
});