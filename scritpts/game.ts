(function () {
    let canvas = document.getElementById('canvas')//notice onn hover it detects its an html element
    let stage: createjs.Stage;
    let helloLabel: createjs.Text;

    function Init(): void {
        console.log('initialisation started....')
        Start()

    }
    function Start(): void {
        console.log("starting application")
        stage = new createjs.Stage(canvas)
        createjs.Ticker.framerate = 60 //defines how many times a stage is redrawn
        createjs.Ticker.on("tick", Update)
        Main()
    }
    function Update(): void {
        helloLabel.rotation += 5
        stage.update()
        console.log('hkunamatata')
    }
    function Main(): void {
        console.log('game started...')
        helloLabel = new createjs.Text('Hello World', '40px Consolas', '#000000')
        helloLabel.x = 100
        helloLabel.y = 100
        stage.addChild(helloLabel)
    }

    window.onload = Init
})()