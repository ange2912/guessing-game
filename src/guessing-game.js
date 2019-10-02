class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }
   
    guess() {
        this.rangeValues=[];
        for (var i=this.min; i<=this.max; i++){
        this.rangeValues.push(i);
    }     
        return this.guessValue = Math.floor(this.rangeValues.length/2)+this.min;
    }

    lower() {
        this.max = this.guessValue;
    }

    greater() {
        this.min = this.guessValue;
    }
}

module.exports = GuessingGame;
