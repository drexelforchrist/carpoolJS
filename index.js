/* global require */

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
}

require(['underscore'], function (_) {
    var numPeople = 20;


    var locations = ["Ocean City, NJ"]; // destination
    // possible origins:  (to make the problem not insane, limit the number of possible origins)
    locations.push("3700 Powelton Ave, Philadelphia, PA");
    locations.push("101 N. 34th St, Philadelphia, PA");
    locations.push("3400 Hamilton St, Philadelphia, PA");
    locations.push("3200 Cuthbert St, Philadelphia, PA");
    locations.push("3200 Chestnut St, Philadelphia, PA");


    var distances = [ // get from Google or Bing maps API // syntax: distances[from][to]
        [0, 100, 101, 101, 101, 101], // Destination OC, NJ
        [100, 0, 1, 1, 1, 1], // 3700 Powelton
        [101, 1, 0, 1, 1, 1], // 101 N. 34th St
        [102, 1, 1, 0, 1, 1], // 3400 Hamilton St
        [103, 1, 1, 1, 0, 1], // 3200 Cuthbert St
        [104, 1, 1, 1, 1, 0]  // 3200 Chestnut St
    ];



    /* COST EVALUATIONS */
    var evaluations = [

        // Base.  Currently, number of different origins.
        function (car, passengers) {
            var origins = [];
            passengers.forEach(function (passenger) {
                if (!origins.contains(passenger.origin)) {
                    origins.push(passenger.origin);
                }
            });
            return origins.length + 10;
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
     * The Person class.  Creates a Person object.  Currently using random data.
     *
     * @class Person
     * @constructor
     */
    function Person() {
        this.id = people.length;
        this.wantsToDrive = _.random(0, 1) * _.random(0, 5);         // 0 = have no car and can't drive; 1 = has car, doesn't wanna drive; 5 = has car, really wants to drive
        this.seats = this.wantsToDrive < 0 ? 0 : _.random(2, 8);
        this.sex = _.random(0, 1);                   // Single-Sex cars are preferable; there tends to be less drama that way (at least from my perspective as a male)
        this.origin = _.random(1, locations.length - 1); // initial location, references "locations" var
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


    /**
     * The addPassenger method adds a passenger to a given car.
     *
     * @method addPassenger
     * @param {Person} passenger The passenger being added to
     */
    Car.prototype.addPassenger = function (passenger) {
        if (passenger.inCar >= 0) {
            // KURTZ remove passenger from the car they're already in.
        }
        passenger.inCar = this.id;
        this.passengers.push(passenger);
        if (passenger.origin !== this.origin) {
            if (!_.contains(this.travelLegs, passenger.origin)) {
                this.travelLegs.push(passenger.origin); // KURTZ change travel legs to have intelligent ordering.
            }
        }
    };
    /**
     * The costDifferenceIfAdd method evaluates how the cost will be different if a given person is added to a given car.
     *
     * @method costDifferenceIfAdd
     * @param {Person} addition The potential additional people.
     * @return {float} the cost difference
     */
    Car.prototype.costDifferenceIfAdd = function (newPassenger) {

    };








    /* THE ACTUAL PROCEDURE: */


    /* Initializes the test people */
    var people = [];
    for (var i = 0; i < numPeople; i++) {
        people.push(new Person());
    }


    /* Put all potential drivers in their cars.  */
    var canDrive = "has car";
    var cantDrive = "no car";
    people = _.groupBy(people, function (person) {
        return (person.wantsToDrive > 0) ? canDrive : cantDrive
    }); // separates those who could drive from those who can't.

    people[canDrive].forEach(function (driver) {
        cars.push(new Car(driver))
    });


    /* For each non-driver, assign to best car */

    people[cantDrive].forEach(function (passenger) {

        cars = _.sortBy(cars, function(car) {
            var passengers = [passenger].concat(car.passengers);
            return evalCost(car, passengers)
        });
        cars[0].addPassenger(passenger);
    });



    window.console.log("people", people);

    window.console.log("cars", cars);

    window.console.info("Total Cost: ", evalTotalCost().toString());


/* Old.  The following stuff should largely be ignored. */


    //// assign passengers to drivers (cars)
    //loop:
    //while (true) {
    //    for (passengersInCar=0; ++passengersInCar < people[driver].seats;) {
    //        if (driver >= passenger) {
    //            break loop;
    //        }
    //        people[driver].inCarOf = people[driver].id;
    //        people[passenger].inCarOf = people[driver].id;
    //        passenger--;
    //    }
    //    driver++;
    //}
    //
    //
    //// split up the cars
    //people = _.groupBy(people, function(person) { return person.inCarOf; });
    //
    //
    //// add "empty seats" to cars
    //_.forEach(cars, function(car) {
    //    while(car.length < _.first(car).seats) {
    //        car.push(null);
    //    }
    //    document.write("did something!");
    //    return this;
    //});
    //
    //
    //console.info(cars);
});






