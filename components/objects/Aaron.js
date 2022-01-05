

class Aaron extends THREE.Group {
    constructor(parent) {
        // Call parent Group() constructor
        super();

        // // Init state
        // this.state = {
        //     // gui: parent.state.gui,
        //     // bob: true,
        //     // spin: this.spin.bind(this),
        //     // twirl: 0,
        // };

        // Load object
        const loader = new THREE.GLTFLoader();

        this.name = 'aaron';
        var rand = Math.random() * 3;
        if (rand < 1){
          loader.load('components/objects/aaron.gltf',
                      (gltf) => {
              this.add(gltf.scene);
          });
        } else if (rand < 2) {
          loader.load('components/objects/hao.gltf',
                      (gltf) => {
              this.add(gltf.scene);
          });
        } else {
          loader.load('components/objects/ver.gltf',
                      (gltf) => {
              this.add(gltf.scene);
          });
        }
    }

    update(timeStamp) {
    }
}
