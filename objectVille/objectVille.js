var camaro = {
    make: 'chevrolet',
    model: 'HyperSonic',
    year: 2017,
    color: 'teal',
    mileage: 500,
    passengers: 4,
    convertible: false
};

var benz = {
    make: 'benz class',
    model: 'GT-11',
    year: 2021,
    color: 'black',
    mileage: 750,
    passengers: 4,
    convertible: false
};


function prequal(car) {
    if (car.mileage > 1000) {
        return false;
    } else if (car.year < 2020){
        return false;
    }
    return true;
}

camaro.name = 'Chevy Camaro';
benz.name = 'Mercedes Benz';
var testingWaters = prequal(camaro);
var test = prequal(benz); 

if(testingWaters){
    alert(camaro.name + 'has a mileage of ' + camaro.mileage + ' and was made in ' + camaro.year +
     ' so therefore it is a fairly good car');
}   else{
    alert("I can't buy a car that was made in " + camaro.year);
}

if(test){
    alert(benz.name + ' has a mileage of ' + benz.mileage + ' and was made in ' + benz.year +
     ' so therefore it is a fairly good car');
}   else{
    alert("I can't buy a car that was made in " + benz.year);
}

function makeCar(params) {
    var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
    var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
    var years = [1955, 1957, 1948, 1954, 1961];
    var colors = ["red", "blue", "tan", "yellow", "white"];
    var convertible = [true, false];

    var rand1 = Math.floor(Math.random() * makes.length);
    var rand2 = Math.floor(Math.random() * models.length);
    var rand3 = Math.floor(Math.random() * years.length);
    var rand4 = Math.floor(Math.random() * colors.length);
    var rand5 = Math.floor(Math.random() * 5) + 1;
    var rand6 = Math.floor(Math.random() * 2);

    var car = {
        make: makes[rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        convertible: convertible[rand5],
    }
    return car;
}

function displayCar(car) {  
    console.log("Your new car is a " + car.year + " " + car.make + ' ' + car.model);
}

var chooseCar = makeCar();
displayCar(chooseCar);


