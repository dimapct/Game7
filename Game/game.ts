/// <reference path="lib/typings/easeljs/easeljs.d.ts" />

class Game {
    canvas: any;
    stage: createjs.Stage;
    map: Map;
    imagesFactory: ImagesFactory;

    constructor(canvas) {
        this.canvas = canvas;
        this.stage = new createjs.Stage(this.canvas);
        this.map = new Map();
        this.imagesFactory = new ImagesFactory(this.map.tileSize);
    }

    run() {
        var t = this.imagesFactory.createImage(GameTypes.PLAYERTANK);
        t.x = 100;
        t.y = 100;
        this.stage.addChild(t);
        createjs.Ticker.addEventListener("tick", this.update);
    }

    update = () => {
        this.stage.update();
    }

    
}