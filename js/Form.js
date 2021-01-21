class Form{
    constructor(){
       this.input = createInput("Enter Your Name");
       this.button = createButton('Play');
       this.reset = createButton('Reset');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(500,400);
        this.input.style('width', '200px');
        this.input.style('height', '50px');
        this.input.style('background', 'lightblue');
        this.button.position(560,500);
        this.reset.position(900,500);
        this.reset.style('background', 'lightgreen');
        this.reset.style('width', '60px');
        this.reset.style('height', '30px');
        this.button.style('width', '100px');
        this.button.style('height', '40px');
        this.button.style('background', 'pink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(300,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        })
    }
}