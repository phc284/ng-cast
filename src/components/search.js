angular.module('video-player')

  .component('search', {
    //bind the controller functions from 'app' component
    bindings: {
      updateVideo: '<'
    },

    //Way 2: Comment out if doing Way 1
    controller: function (youTube) {
      this.search = () => {
        youTube.search(this.query, this.updateVideo);
      };
    },

    templateUrl: 'src/templates/search.html'

  });
