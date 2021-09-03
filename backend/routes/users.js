const router = require('express').Router();
let user = require('../models/user.model');

router.route('/').get((req, res)=>{
	User.find()
		.then(users => res.json(users))
		.catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req, res)=>{
	const username = req.body.username;
	const newUser = new User({username}); //create a new instance of user

	newUser.save() //save the new user to the database
		.then(() => res.json('User added!'))
		.catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;