/// <reference path="lib/typings/easeljs/easeljs.d.ts" />

class ImagesFactory {
    private builders: any[];
    private tileSize: number;

    constructor(tileSize: number) {
        this.builders = [];
        this.tileSize = tileSize;
        this.createBuilders();
    }

    createImage(imageType: number): createjs.DisplayObject {
        return this.builders[imageType]();

    }

    private createBuilders() {
        var duloSize = [0.1, 0.5];
        var self = this;
        this.builders[GameTypes.PLAYERTANK] = function () {
            var image = new createjs.Shape();
            image.graphics.beginFill("red").drawRect(0, 0, self.tileSize, self.tileSize);
            image.graphics.beginFill("black").drawRect(self.tileSize / 2 - (duloSize[0] * self.tileSize) / 2, -self.tileSize * duloSize[1], duloSize[0] * self.tileSize, duloSize[1] * self.tileSize);
            image.regX = self.tileSize / 2;
            image.regY = self.tileSize / 2;
            return image;
        }
        this.builders[GameTypes.NPCTANK] = function () {
            var image = new createjs.Shape();
            image.graphics.beginFill("blue").drawRect(0, 0, self.tileSize, self.tileSize);
            image.graphics.beginFill("black").drawRect(self.tileSize / 2 - (duloSize[0] * self.tileSize) / 2, -self.tileSize * duloSize[1], duloSize[0] * self.tileSize, duloSize[1] * self.tileSize);
            image.regX = self.tileSize / 2;
            image.regY = self.tileSize / 2;
            return image;
        }
        this.builders[GameTypes.BULLET] = function () {
            var image = new createjs.Shape();
            return image;
        }
        this.builders[GameTypes.TILEFOREST] = function () {
            var image = new createjs.Shape();
            return image;
        }
        this.builders[GameTypes.TILELAND] = function () {
            var image = new createjs.Shape();
            return image;
        }
        this.builders[GameTypes.TILEWALL] = function () {
            var image = new createjs.Shape();
            return image;
        }
        this.builders[GameTypes.TILEWATER] = function () {
            var image = new createjs.Shape();
            return image;
        }
    }

}