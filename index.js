require(['underscore'], function (_) {

    //underscore is now loaded.


    var numPeople = 50;


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

    var evaluations = [
        function (car, passengers) {
            car // KURTZ this needs to be written mad quick.
        }
    ];


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
        this.inCar = -1; // default of 0.
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
    Car.prototype.costDifferenceIfAdd = function (addition) {

    };


    /* Initializes the test people */
    var people = [];
    for (var i = 0; i < numPeople; i++) {
        people.push(new Person());
    }


    /* put all potential drivers in their cars.  */
    var canDrive = "has car";
    var cantDrive = "no car";
    people = _.groupBy(people, function (person) {
        return (person.wantsToDrive > 0) ? canDrive : cantDrive
    }); // separates those who could drive from those who can't.

    people[canDrive].forEach(function (driver) {
        cars.push(new Car(driver))
    });


    /* For each non-driver, assign to best car */



    window.console.log("people", people);

    window.console.log("cars", cars);


/* Old.  The following stuff should largely be ignored. */


    // assign passengers to drivers (cars)
    loop:
    while (true) {
        for (passengersInCar=0; ++passengersInCar < people[driver].seats;) {
            if (driver >= passenger) {
                break loop;
            }
            people[driver].inCarOf = people[driver].id;
            people[passenger].inCarOf = people[driver].id;
            passenger--;
        }
        driver++;
    }


    // split up the cars
    people = _.groupBy(people, function(person) { return person.inCarOf; });


    // add "empty seats" to cars
    _.forEach(cars, function(car) {
        while(car.length < _.first(car).seats) {
            car.push(null);
        }
        document.write("did something!");
        return this;
    });


    console.info(cars);
});






