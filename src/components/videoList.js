angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    clickHandler: '<'
  },
  templateUrl: 'src/templates/videoList.html'
});
