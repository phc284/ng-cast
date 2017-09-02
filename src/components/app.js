angular.module('video-player')
  //create component in module
  .component('app', {
    templateUrl: 'src/templates/app.html',

    //create controller inside component
    controller: function(youTube, $window) {
      // //don't need these if we use updateVideo function
      // //set default video collection
      // this.videos = exampleVideoData;
      // //set default first video in player
      // this.currentVideo = this.videos[0];

      //function to change video in player
      // this.onClick = function(index) {
      //   this.currentVideo = this.videos[index];
      // }.bind(this);

      //arrow functions bind to this scope
      this.onClick = (index) => {
        this.currentVideo = this.videos[index];
      };

      //function to search youtube
      // this.search = function (query, callback) {
      //   youTube.search(query, callback);
      // }.bind(this);

      //arrow functions bind to this scope
      //Way 1: Comment out if doing Way 2
      // this.search = (query, callback) => {
      //   youTube.search(query, callback);
      // };

      //change state when search
      // this.updateVideo = function (videos) {
      //   this.videos = videos;
      //   this.currentVideo = videos[0];
      // }.bind(this);


      this.updateVideo = (videos) => {
        this.videos = videos;
        this.currentVideo = videos[0];
      };

      //change starting videos
      youTube.search('asdf', this.updateVideo);

    }
  });
