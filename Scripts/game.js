var game;
window.onload = function(){
    var config = {
        width: 1125,
        height: 2436,
        backgroundColor: 0xFFFFFF,
        scene: [titleScene, loadScene1, playScene1, loadScene2, playScene2, loadScene3, playScene3, endingBad, endingGood, testScene],
        pixelArt: true,
        physics: {
            default: 'arcade',
            arcade: {
                //debug: true,
                gravity: { y: 200 }
            }
        },
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
        }
        // plugins: {
        //     scene: [{
        //         key: 'rexUI',
        //         plugin: UIPlugin,
        //         mapping: 'rexUI'
        //     },
        //     ]
        // }
    }
    game = new Phaser.Game(config);
}
