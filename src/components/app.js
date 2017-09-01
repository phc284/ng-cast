angular.module('video-player')
.component('app', {
  templateUrl: 'src/templates/app.html',


  controller: function() {
    this.videos = exampleVideoData;
    this.currentVideo = this.videos[0];
    this.onClick = function(index) {
      this.currentVideo = this.videos[index];
    }.bind(this);
    // this.onClick = this.onClick.bind(this);

    this.search = function (query) {
      console.log(query);
    }.bind(this);
  }
});
