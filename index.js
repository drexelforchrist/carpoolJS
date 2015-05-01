/* global require, _ */

require.config({
    paths: {
        'underscore': 'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min'
    }
});

Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
};

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

require(['underscore'], function (_) {


    /* Spring Retreat 2015 Data */
    var p, people;
    people = [];
    //p = new Person();	p.id = 492;	p.wantsToDrive = 5;	p.seats = 4;	p.sex = 0;	p.origin = 1;	people.push(p);
    //p = new Person();	p.id = 1;	p.wantsToDrive = 5;	p.seats = 2;	p.sex = 0;	p.origin = 12;	people.push(p);
    p = new Person();	p.id = 268;	p.wantsToDrive = 5;	p.seats = 5;	p.sex = 0;	p.origin = 4;	people.push(p);
    p = new Person();	p.id = 73;	p.wantsToDrive = 5;	p.seats = 4;	p.sex = 0;	p.origin = 5;	people.push(p);
    p = new Person();	p.id = 51;	p.wantsToDrive = 5;	p.seats = 4;	p.sex = 0;	p.origin = 5;	people.push(p);
    p = new Person();	p.id = 213;	p.wantsToDrive = 5;	p.seats = 4;	p.sex = 0;	p.origin = 5;	people.push(p);
    p = new Person();	p.id = 229;	p.wantsToDrive = 5;	p.seats = 7;	p.sex = 0;	p.origin = 4;	people.push(p);
    p = new Person();	p.id = 45;	p.wantsToDrive = 3;	p.seats = 5;	p.sex = 0;	p.origin = 1;	people.push(p);
    p = new Person();	p.id = 170;	p.wantsToDrive = 3;	p.seats = 5;	p.sex = 0;	p.origin = 1;	people.push(p);
    p = new Person();	p.id = 144;	p.wantsToDrive = 3;	p.seats = 5;	p.sex = 1;	p.origin = 4;	people.push(p);
    p = new Person();	p.id = 94;	p.wantsToDrive = 1;	p.seats = 5;	p.sex = 0;	p.origin = 5;	people.push(p);
    //p = new Person();	p.id = 90;	p.wantsToDrive = 0;	p.seats = 0;	p.sex = 1;	p.origin = 5;	people.push(p);
    p = new Person();	p.id = 87;	p.wantsToDrive = 0;	p.seats = 0;	p.sex = 1;	p.origin = 1;	people.push(p);
    p = new Person();	p.id = 57;	p.wantsToDrive = 0;	p.seats = 0;	p.sex = 1;	p.origin = 4;	people.push(p);
    p = new Person();	p.id = 270;	p.wantsToDrive = 0;	p.seats = 0;	p.sex = 0;	p.origin = 1;	people.push(p);
    p = new Person();	p.id = 710;	p.wantsToDrive = 0;	p.seats = 0;	p.sex = 0;	p.origin = 1;	people.push(p);
    //p = new Person();	p.id = 1067;	p.wantsToDrive = 0;	p.seats = 0;	p.sex = 0;	p.origin = 1;	people.push(p);
    //p = new Person();	p.id = 92;	p.wantsToDrive = 0;	p.seats = 0;	p.sex = 0;	p.origin = 4;	people.push(p);
    p = new Person();	p.id = 692;	p.wantsToDrive = 0;	p.seats = 0;	p.sex = 1;	p.origin = 1;	people.push(p);
    p = new Person();	p.id = 604;	p.wantsToDrive = 0;	p.seats = 0;	p.sex = 1;	p.origin = 1;	people.push(p);
    p = new Person();	p.id = 263;	p.wantsToDrive = 0;	p.seats = 0;	p.sex = 0;	p.origin = 1;	people.push(p);
    p = new Person();	p.id = 589;	p.wantsToDrive = 0;	p.seats = 0;	p.sex = 1;	p.origin = 1;	people.push(p);
    p = new Person();	p.id = 637;	p.wantsToDrive = 0;	p.seats = 0;	p.sex = 1;	p.origin = 1;	people.push(p);
    //p = new Person();	p.id = 673;	p.wantsToDrive = 0;	p.seats = 0;	p.sex = 1;	p.origin = 4;	people.push(p);
    p = new Person();	p.id = 112;	p.wantsToDrive = 0;	p.seats = 0;	p.sex = 1;	p.origin = 5;	people.push(p);
    p = new Person();	p.id = 22;	p.wantsToDrive = 0;	p.seats = 0;	p.sex = 1;	p.origin = 4;	people.push(p);
    p = new Person();	p.id = 7;	p.wantsToDrive = 0;	p.seats = 0;	p.sex = 0;	p.origin = 4;	people.push(p);
    p = new Person();	p.id = 600;	p.wantsToDrive = 0;	p.seats = 0;	p.sex = 1;	p.origin = 1;	people.push(p);
    p = new Person();	p.id = 1066;	p.wantsToDrive = 0;	p.seats = 0;	p.sex = 1;	p.origin = 1;	people.push(p);
    p = new Person();	p.id = 98;	p.wantsToDrive = 0;	p.seats = 0;	p.sex = 0;	p.origin = 4;	people.push(p);
    p = new Person();	p.id = 476;	p.wantsToDrive = 0;	p.seats = 0;	p.sex = 1;	p.origin = 4;	people.push(p);
    p = new Person();	p.id = 227;	p.wantsToDrive = 0;	p.seats = 0;	p.sex = 0;	p.origin = 1;	people.push(p);








    /* COST EVALUATIONS */
    var evaluations = [

        // Base.  Currently, primarily number of different origins.
        function (car, passengers) {
            var origins = [];
            passengers.forEach(function (passenger) {
                if (!origins.contains(passenger.origin)) {
                    origins.push(passenger.origin);
                }
            });
            return origins.length + 2;
        },


        // Over seatbelt limit.
        function (car, passengers) {
            if (passengers.length > car.seats) {
                return 10000000000000000;
            }
            return 1;
        },


        // Car Fullness.  Ideally 80%.
        function (car, passengers) {
            return Math.cos((passengers.length/car.seats * Math.PI+0.8)+1)*0.2+1;
        },


        // Car Gender Composition.  Single-gender cars are ideal, but a perfectly even split is the next-best.
        function (car, passengers) {
            var numerator = 0,
                denominator = 0;
            passengers.forEach(function (person) {
                numerator += person.sex;
                denominator += 1;
            });

            var sexRatio = numerator/denominator;

            return 1 + 0.2 * (Math.sin(sexRatio * 2.8) + Math.abs(Math.sin(sexRatio * 2 * Math.PI)));
        },


        // Desire to Drive.  This is important.
        function (car, passengers) {
            return 2.25 - (0.25 * car.driver.wantsToDrive); // more efficient form of (5 - x) * 0.25 + 1
        }

    ];


    /**
     * The evalCost function.  Evaluates the cost of a car, with a separate given passenger list.  Iterates through each
     * of the 'evaluations', and multiplies those results together.
     *
     * @param car
     * @param passengers
     * @returns {number}
     */
    function evalCost(car, passengers) {
        var cost = 1;
        evaluations.forEach(function(test) {
            cost *= test(car, passengers);
        });
        return cost;
    }


    /**
     * The evalTotalCost function returns the total cost for all car assignments.
     *
     */
    function evalTotalCost() {
        var cost = 0;
        cars.forEach(function (car) {
            cost += evalCost(car, car.passengers);
        });
        return cost;
    }


    /**
     * The remainingSeats function returns the total number of seats unclaimed in all cars.
     *
     */
    function remainingSeats() {
        var seats = 0;
        cars.forEach(function (car) {
            seats += car.emptySeats;
        });
        return seats;
    }


    /**
     * The totalSeats function returns the total number of seats in all cars.
     *
     */
    function totalSeats() {
        var seats = 0;
        cars.forEach(function (car) {
            seats += car.seats;
        });
        return seats;
    }


    /**
     * The Person class.  Creates a Person object.  Initial generation inserts random data.
     *
     * @class Person
     * @constructor
     */
    function Person() {
        this.id = people.length;
        this.wantsToDrive = _.random(0, 1) * _.random(0, 5);         // 0 = have no car and can't drive; 1 = has car, doesn't wanna drive; 5 = has car, really wants to drive
        this.seats = this.wantsToDrive < 0 ? 0 : _.random(2, 8);
        this.sex = _.random(0, 1);                   // Single-Sex cars are preferable; there tends to be less drama that way (at least from my perspective as a male)
        this.origin = -1; //KURTZ TESTING _.random(1, locations.length - 1); // initial location, references "locations" var
        this.inCar = -1; // default of -1, meaning unassigned.
    }


    var cars = [];

    /**
     * The Car class.  Creates a car object, which has passengers.
     *
     * @class Car
     * @param {Person} driver the driver of the car.  Number of seats available is taken from this person's information.
     * @constructor
     */
    function Car(driver) {
        this.id = cars.length;
        this.passengers = [];
        this.seats = driver.seats;
        this.origin = driver.origin;
        this.travelLegs = [];
        this.addPassenger(driver);
    }


    Car.prototype.getDriver = function () {
        return this.passengers[0];
    };
    Car.prototype.__defineGetter__('driver', Car.prototype.getDriver);


    Car.prototype.getCost = function () {
        return evalCost(this, this.passengers);
    };
    Car.prototype.__defineGetter__('cost', Car.prototype.getCost);


    Car.prototype.getEmptySeats = function () {
        return this.seats - this.passengers.length;
    };
    Car.prototype.__defineGetter__('emptySeats', Car.prototype.getEmptySeats);


    /**
     * The addPassenger method adds a passenger to a given car.
     *
     * @method addPassenger
     * @param {Person} passenger The passenger being added to
     */
    Car.prototype.addPassenger = function (passenger) {
        if (passenger.inCar !== -1) {
            passenger.inCar.passengers.remove(passenger);
        }
        passenger.inCar = this;
        this.passengers.push(passenger);
        if (passenger.origin !== this.origin) {
            if (!this.travelLegs.contains(passenger.origin)) {
                this.travelLegs.push(passenger.origin); // KURTZ change travel legs to have intelligent ordering.
            }
        }
    };







    /* THE ACTUAL PROCEDURE: */


    ///* Initializes the test people */
    //var people = [];
    //for (var i = 0; i < numPeople; i++) {
    //    people.push(new Person());
    //}


    /* 1.  Put all potential drivers in their cars.  */
    var canDrive = "has car";
    var cantDrive = "no car";
    people = _.groupBy(people, function (person) {
        return (person.wantsToDrive > 0) ? canDrive : cantDrive
    }); // separates those who could drive from those who can't.

    people[canDrive].forEach(function (driver) {
        cars.push(new Car(driver))
    });


    /* 2.  For each non-driver, assign to best car */
    people[cantDrive].forEach(function (passenger) { // KURTZ make into a "assign to some car" function
        cars = _.sortBy(cars, function(car) { // sort to get least expensive. // KURTZ do something more efficient
            var passengers = [passenger].concat(car.passengers);
            return evalCost(car, passengers);
        });
        cars[0].addPassenger(passenger);
    });


    people = _.union(people[cantDrive], people[canDrive]);


    /* 3. The Most Expensive cars are eliminated */
    var removedCar;

    while (totalSeats()*.80 > people.length) { // KURTZ develop the exit condition
        cars = _.sortBy(cars, function (car) { // sort to get most expensive.  // KURTZ do something more efficient
            return car.cost;
        });

        removedCar = cars.pop();

        while (removedCar.passengers.length > 0) {
            var passenger = removedCar.passengers.pop();
            cars = _.sortBy(cars, function (car) { // sort to get least expensive. // KURTZ do something more efficient
                var passengers = [passenger].concat(car.passengers);
                return evalCost(car, passengers);
            });
            cars[0].addPassenger(passenger);
        }
    }




    /* preparing the output...  */
    cars = _.sortBy(cars, function (car) {
        return evalCost(car, car.passengers)
    });



    window.console.log("people", people);

    window.console.log("cars", cars);

    window.console.info("Total Cost: ", evalTotalCost().toString());

    window.console.info("Empty Seats: ", remainingSeats().toString());

    window.console.info("Total Seats: ", totalSeats().toString());


    people = _.sortBy(people, function (person) {
        return person.id;
    });

    var div = document.createElement('div');
    div.innerHTML = "id";
    div.innerHTML += ",";
    div.innerHTML += "car";
    div.innerHTML += ",";
    div.innerHTML += "peopleInCar";
    div.innerHTML += ",";
    div.innerHTML += "personIsDriver";

    document.body.appendChild(div);

    people.forEach(function(passenger) {
        div = document.createElement('div');
        div.id = passenger.id;

        div.innerHTML = passenger.id;
        div.innerHTML += ",";
        div.innerHTML += passenger.inCar.id.toString();
        div.innerHTML += ",";
        div.innerHTML += passenger.inCar.passengers.length.toString();
        div.innerHTML += ",";
        div.innerHTML += (passenger.inCar.passengers[0].id === passenger.id).toString().toUpperCase();

        document.body.appendChild(div);
    });




});






