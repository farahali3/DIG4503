const chalk = require ('chalk');

class Person {
    constructor (name, favoriteColors, backgroundColors) {
        this.name = name;
        this.favoriteColors = favoriteColors;
        this.backgroundColors = backgroundColors;
    }
    speak () {
        for (let i=0; i <this.favoriteColors.length; i++) {
            console.log(chalk.bgHex(this.backgroundColors[1]).hex(this.favoriteColors[i])(this.name));
        }
    }
}


module.exports = Person;