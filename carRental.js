var carRentals = {
    carTypes: {
        makeModel: ["Mercedes", "BMW", "Audi"],
        bodyTypes: ["sedan", "convertible", "SUV"]
    },
    totalCars: 108,
    carsBooked: 72,
    colorsRemaining: {
        black: 15, 
        blue: 8,
        silver: 9, 
        royalBlue: 4,
    },
    rate: {
        weekday: 45,
        weekend: 70
    },
    carAvailability: function(){
        return this.totalCars - this.carsBooked
    },
    carListings: function(){
        return "We have the following make and models available: " + this.carTypes.makeModel + " in " + this.carTypes.bodyTypes + "." 
    },
    fiveWeekDays: function(){
        return "We have the following make and models available: " + this.carTypes.makeModel + " in " + this.carTypes.bodyTypes + ". The base rate for 5 weekdays will be: " + (5*this.rate.weekday) + "." 
    }
};