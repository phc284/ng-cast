angular.module('video-player')
  .service('youTube', function($http) {

    this.search = function(query, callback) {
      $http.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          maxResults: 5,
          key: window.YOUTUBE_API_KEY,
          videoEmbeddable: 'true',
          type: 'video',
          q: query
        }
      })
        .then(function (data) {
          // console.log(data.data.items);
          // console.log('the callback function is: ', callback);
          callback(data.data.items);
        });
    };

    // return {};
  });
