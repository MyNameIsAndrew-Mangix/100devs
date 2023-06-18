//Create a constructor with 4 properties and 3 methods
 function Game(genre, difficulty, style, isReleased) {
    this.genre = genre;
    this.difficulty = difficulty;
    this.style = style;
    this.isReleased = isReleased;
    this.play = function() {
        console.log("Game is playing!");
    }
    this.save = function(){
        console.log("Game has saved!");
    }
    this.quit = function(){
        console.log("quitting game");
    }

    let darksouls = new Game("action-rpg", "hard", "souls-like", true);
 }