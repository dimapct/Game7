var Game = (function () {
    function Game() {
        this.update = function () {
        };
    }
    Game.prototype.run = function () {
        createjs.Ticker.addEventListener("tick", this.update);
    };
    return Game;
})();
//# sourceMappingURL=game.js.map