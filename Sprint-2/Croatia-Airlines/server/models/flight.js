var mongoose = require('mongoose');

module.exports = mongoose.model('flight', {
	_id: String,
    flight_number: Number,
    aircraft: String,
    origin: String,
    destination: String,
    date: Date,
    time: String,
    duration: String,
    capacity: [
    	{"capacity_first": Number ,"capacity_business": Number ,"capacity_economy": Number}
    ],
    available_seats: [
    	{"available_first": Number ,"available_business": Number ,"available_economy": Number}
    ],
    price: [
    	{"price_first": Number,"price_business": Number,"price_economy": Number}
    ]
});

/*
 'ticket', {
    _id: String,
    first_name: String,
    last_name: String,
    email: String,
    phone_number: Number,
    country: String,
    address: String,
    class: String,
    seat_number: Number,
    price: Number,
    flight: [
    	{"_id": Number, "flight_number": Number, "origin": String, "destination": String, "date": Date, "time": String}
    ]
});*/
