class Center3 extends Platform{

    constructor(scene, x, y){
        super(scene, x, y, 'center3');
        this.create();
    }

    create(){
        this.platform.body.setSize(this.platform.body.width,70);
        this.platform.body.offset.y = 0;
    }
}
