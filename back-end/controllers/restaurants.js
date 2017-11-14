let db = require('../models');
let Restaurant = db.models.Restaurant;

let newRest = {
	name: 'See if this works',
	googleId: null,
	placeId: null,
	latitude: null,
	longitude: null,
	address: null,
	rating: null,
	url: null
};

function index(req, res) {
	res.json('hitting the restaurant.index controller');
}

// CREATE A NEW RESTAURANT - USER FAVORITED
function create(req, res) {
	Restaurant.create(req.body).then(function(restaurant) {
		if(!restaurant) res.send("restaurant was not saved");
		res.json(restaurant);
	});
	/*
	db.Restaurant.create({
			name: restaurantsArray[n].name,
			googleId: restaurantsArray[n].googleId,
			placeId: restaurantsArray[n].placeId,
			latitude: restaurantsArray[n].latitude, 
			longitude: restaurantsArray[n].longitude,
			address: restaurantsArray[n].address,
			rating: restaurantsArray[n].rating,
			url: restaurantsArray[n].url
			}).then((restaurant, err) => {
				if (err) { console.log(err); }
				console.log('new restaurant create ' + restaurant);
			});
	*/
}

function show(req, res) {
	res.json('hitting the restaurant.show controller');
}

function update(req, res) {
	res.json('hitting the restaurant.update controller');
	/*
	// updates restaurant info in the DB with additional details
			db.Restaurant.update(restaurantObjectUpdate, {where: {googleId: restaurantObjectUpdate.googleId}})
			.then((err) =>{
				if (err) { console.log(err); }
				if (!restaurantObjectUpdate) { console.log('restaurant is not found'); }
			});
	*/
}

//DELETE RESTAURANT
function destroy(req, res) {
	Restaurant.findById(req.params.id)
	.then(function(restaurant){
		if(!restaurant) res.send("restaurant was not found");
		return restaurant.destroy();
	})
	.then(function() {
		res.send("restaurant was deleted");
	});
}

module.exports.index = index;
module.exports.create = create;
module.exports.show = show;
module.exports.update = update;
module.exports.destroy = destroy;

///////////////// COPY OF RESTAURANT MODEL FOR REFERENCE ////////////////

		// name: Sequelize.STRING,
		// googleId: Sequelize.STRING,
		// placeId: Sequelize.STRING,
		// latitude: Sequelize.STRING, 
		// longitude: Sequelize.STRING, 
		// address: Sequelize.STRING,
		// rating: Sequelize.STRING,
		// url: Sequelize.STRING