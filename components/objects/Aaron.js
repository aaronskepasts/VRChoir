

class Aaron extends THREE.Group {
    constructor(parent) {
        // Call parent Group() constructor
        super();

        // Init state
        this.state = {
            // gui: parent.state.gui,
            bob: false,
            spin: this.spin.bind(this),
            twirl: 0,
        };

        // Load object
        const loader = new THREE.GLTFLoader();
        this.counter = 0
        this.name = 'aaron';
        var rand = Math.random() * 3;
        if (rand < 1){
          loader.load('components/objects/aaron.gltf', (gltf) => {
            gltf.scene.traverse( function( node ) {

              if ( node.isMesh ) { node.castShadow = true; }
      
          } );
            this.add(gltf.scene);
          });
        } else if (rand < 2) {
          loader.load('components/objects/hao.gltf',
                      (gltf) => {
              gltf.scene.traverse( function( node ) {
                if ( node.isMesh ) { node.castShadow = true; }
              } );
              this.add(gltf.scene);
          });
        } else {
          loader.load('components/objects/ver.gltf',
                      (gltf) => {
              gltf.scene.traverse( function( node ) {
                if ( node.isMesh ) { node.castShadow = true; }
              } );  
              this.add(gltf.scene);
          });
        }
    }

    spin() {
      // Add a simple twirl
      this.state.twirl += 6 * Math.PI;

      // Use timing library for more precice "bounce" animation
      // TweenJS guide: http://learningthreejs.com/blog/2011/08/17/tweenjs-for-smooth-animation/
      // Possible easings: http://sole.github.io/tween.js/examples/03_graphs.html
      const jumpUp = new TWEEN.Tween(this.position)
          .to({ y: this.position.y + 1 }, 300)
          .easing(TWEEN.Easing.Quadratic.Out);
      const fallDown = new TWEEN.Tween(this.position)
          .to({ y: 0 }, 300)
          .easing(TWEEN.Easing.Quadratic.In);

      // Fall down after jumping up
      jumpUp.onComplete(() => fallDown.start());

      // Start animation
      jumpUp.start();
  }

    update() {
      // if (this.state.bob) {
      //     // Bob back and forth
      //     this.rotation.z = 0.05 * Math.sin(timeStamp / 300);
      // }
      if (this.state.bob) {
          // Lazy implementation of twirl
          // this.state.twirl -= Math.PI / 8;

          this.position.y += 0.005 * Math.sin(this.counter) * this.scale.x
          this.counter += 0.1
      }

      // Advance tween animations, if any exist
      // TWEEN.update();
  }
}
