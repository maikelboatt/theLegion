var range = {
    make: 'Range Rover',
    model: 'HyperSonic',
    year: 2017,
    color: 'teal',
    mileage: 500,
    passengers: 4,
    convertible: false,
    fuel: 0,
    started: false,
    

    start: function() {
        if(this.fuel == 0){
            alert('This car is empty, fill up before starting');
        } else {
            this.started = true;
        }
    },

    stop: function(){
        this.started = false;
    },

    drive: function(){
        if (this.started) {
            if(this.fuel > 0){
                alert(this.make + ' ' + this.model + " goes zoom zoom");
                this.fuel = this.fuel + 1;
            } else{
                alert('Please fill up your tank');
                this.stop();
            }
        } else{
            alert('You need to start the engine first');
        }
    },

    addFuel: function(amount){
        this.fuel = this.fuel + amount;
    }
};
range.start();
range.drive();
range.addFuel(2);
range.start();
range.drive();
range.stop();
range.drive();

// range.start();

// range.start();
// range.drive();
// range.drive();
// range.drive();
// range.stop();