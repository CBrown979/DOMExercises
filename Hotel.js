//Hotel Exercise

var hotel = {
    name: "Afrique",
    rate: 200 + "/per night",
    location: "Ghana",
    totalRooms: 45,
    roomsBooked: 30,
    checkAvailability: function(){
        return this.totalRooms - this.roomsBooked
    },
    contactNumber: "781-352-1212",
    contactPerson: "Sistar Afeni",
    getHotelDetails: function(){
        return "Thank you for selecting " + this.name + " located in " + this.location + ". The room rate is: " + this.rate + " and we currently have " + this.checkAvailability() + " rooms available for reservation. If interested, please call " + this.contactNumber + " and ask for " + this.contactPerson + "." 
    }
};
hotel.getHotelDetails();