angular.module('video-player')
  .service('youTube', function($http, $window) {

    this.search = function(query, callback) {
      $http.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          maxResults: 5,
          key: $window.YOUTUBE_API_KEY,
          videoEmbeddable: 'true',
          type: 'video',
          q: query
        }
      })
        .then(function ({data}) {
          callback(data.items);
        });
    };

  });
