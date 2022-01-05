var head = head || {};

(function () {
    "use strict";

    var freqTransform = function (value) {
        return (value * 6000) + 60;
    };

    var identityTransform = function (value) {
        return value;
    };

    head.HeadSocket = function () {

      // y_pos set by note (lower = lower y; higher = higher y)
      // var y_pos = (note - 60) / 3 - 3
      // console.log(y_pos);
      //
      // // scale set by velocity of the note
      // let scale = (velocity / 127) * 14 + 2

      for (let i = 0; i < 2 * Math.PI; i += Math.PI/8) {
        var ron = new Aaron(group);

        var rand = (Math.random() * 2 * Math.PI);
        var distRand = (Math.random() * 3) + 2;


        ron.position.x = (Math.cos(rand)* 2) * distRand;
        ron.position.y = i
        ron.position.z = (Math.sin(rand)* 2) * distRand;

        ron.lookAt(0, ron.position.y, 0);

        ron.scale.setScalar(2);

        ron.castShadow = true;
        ron.receiveShadow = true;
        console.log('here');
      }

      // ron.lookAt(camera.position)
      rons.add( ron );
        this.valueMap = {
        };
    };


}());
