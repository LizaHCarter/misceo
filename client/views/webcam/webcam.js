(function(){
  'use strict';

  angular.module('misceo')
  .controller('WebcamCtrl', ['$scope', '$state', 'User', '$modalInstance', function($scope, $state, User, $modalInstance){
    $scope.user = {};
    $scope.mode = $state.current.name;
    User.getProfile().then(function(response){
      $scope.user = response.data;
    });
    var streaming = false,
        video        = document.querySelector('#video'),
        canvas       = document.querySelector('#canvas'),
        photo        = document.querySelector('#photo'),
        width = 320,
        height = 0;
    console.log(video);
    navigator.getMedia = (navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia);
    navigator.getMedia(
      {
          video: true,
          audio: false
      },
      function(stream){
          if (navigator.mozGetUserMedia) {
              video.mozSrcObject = stream;
          } else {
              var vendorURL = window.URL || window.webkitURL;
              video.src = vendorURL.createObjectURL(stream);
          }
          video.play();
      },
      function(err){
          console.log('An error occured! ' + err);
      }
    );
    video.addEventListener('canplay', function(ev){
        if (!streaming) {
            height = video.videoHeight / (video.videoWidth/width);
            video.setAttribute('width', width);
            video.setAttribute('height', height);
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);
            streaming = true;
        }
    }, false);
    $scope.takePicture = function(){
      canvas.width = width;
      canvas.height = height;
      canvas.getContext('2d').drawImage(video, 0, 0, width, height);
      var data = canvas.toDataURL('image/png');
        console.log(data);
      $scope.user.pic = data;
      photo.setAttribute('src', data);
      User.updateProfile($scope.user).then(function(res){
        toastr.success('Your profile has been saved');
      });
      console.log($scope.user);
    };
  }]);
})();

