(function () {
    var canvas = document.getElementById('canvas'); //notice onn hover it detects its an html element
    var stage;
    var helloLabel;
    function Init() {
        console.log('initialisation started....');
        Start();
    }
    function Start() {
        console.log("starting application");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; //defines how many times a stage is redrawn
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        helloLabel.rotation += 5;
        stage.update();
    }
    function Main() {
        console.log('game started...');
        helloLabel = new createjs.Text('Hello World', '40px Consolas', '#000000');
        helloLabel.x = 100;
        helloLabel.y = 100;
        stage.addChild(helloLabel);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map