module.exports = (sequelize, Sequelize) => {
	let model = sequelize.define("food", {
<<<<<<< HEAD
		photoUrl: Sequelize.TEXT, //because they are longer than the String allowed max of 255 characters
		restaurantId: Sequelize.INTEGER,
		wasSeen: Sequelize.BOOLEAN,
		//foodType: Sequelize.STRING
=======
		photoUrl: Sequelize.TEXT, //because this data type is longer than the String allowed max of 255 characters
>>>>>>> 0fc0aef6a42463f335061c5d93f9aadda314ebc0
	});
	return model;
};