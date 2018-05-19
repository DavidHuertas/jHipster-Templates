(function () {
    'use strict';

    angular
        .module('jHipsterMonolithicApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
