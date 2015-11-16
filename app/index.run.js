(function() {
  'use strict';

  angular
    .module('ucdGroup4FrontEndDemo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
