angular.module('video-player')
.component('app', {
  templateUrl: 'src/templates/app.html',

  controller: function(youTube) {

    console.log(youTube);
    // this.videos = youTube($http)
    this.videos = exampleVideoData;
    this.currentVideo = this.videos[0];

    this.onClick = function(index) {
      this.currentVideo = this.videos[index];
    }.bind(this);

    this.search = function (query) {
      console.log(query);
      youTube(query);
    }.bind(this);


    // $scope.data = youTube.data();



  }
});
