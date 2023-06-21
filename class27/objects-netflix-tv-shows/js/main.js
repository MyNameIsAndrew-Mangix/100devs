//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class NetflixShow {
    constructor (title, genre, language, goodOrBad) {
        this.title = title;
        this.genre = genre;
        this.language = language;
        this.goodOrBad = goodOrBad;
        this.isPaused;
    }


    play() {
        this.isPaused = false;
        console.log(`Now playing ${this.title}`)
    }

    about()
    {
        console.log(`${this.title} is a ${this.genre} show originally filmed in ${this.language}. It's a very ${this.goodOrBad} show.`)
    }

    pauseResume() {
        if (this.isPaused === true){
            this.isPaused = false;
            console.log(`Resuming ${this.title}`);
        }
        else {
            this.isPaused = true;
            console.log(`Paused ${this.title}`)
        }
    }
}

let dark = new NetflixShow('Dark', 'Time-travel', 'DE', 'good');
let stranger = new NetflixShow('Stranger Things', 'horror', 'EN', 'good');

dark.play();
dark.about();
dark.pauseResume();
dark.pauseResume();

