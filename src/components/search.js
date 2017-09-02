angular.module('video-player')

  .component('search', {
    bindings: {
      search: '<',
      callback: '<'
    },

    templateUrl: 'src/templates/search.html'

  });
