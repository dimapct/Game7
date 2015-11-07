/// <reference path="lib/typings/easeljs/easeljs.d.ts" />
var Game = (function () {
    function Game(canvas) {
        var _this = this;
        this.update = function () {
            _this.stage.update();
        };
        this.canvas = canvas;
        this.stage = new createjs.Stage(this.canvas);
        this.map = new Map();
        this.imagesFactory = new ImagesFactory(this.map.tileSize);
    }
    Game.prototype.run = function () {
        var t = this.imagesFactory.createImage(GameTypes.PLAYERTANK);
        t.x = 100;
        t.y = 100;
        this.stage.addChild(t);
        this.stage.update();
        createjs.Ticker.addEventListener("tick", this.update);
    };
    return Game;
})();
//# sourceMappingURL=game.js.map