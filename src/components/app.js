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

      this.search = function (query, callback) {
        //console.log(query);
        youTube.search(query, callback);
      }.bind(this);

      this.callback = function (videos) {
        this.videos = videos;
        this.currentVideo = videos[0];
      }.bind(this);



      // $scope.data = youTube.data();



    }
  });
