var express = require('express');
var router = express.Router();
//add the require statement to be able to use sqlite
const sqlite = require('sqlite3').verbose();
//add the require statements to be able to work with the models and authentication
var models = require('../models');
const auth = require('../config/auth');

//use a findOne and a create separately, I could use a findOrCreate
//but to make it readable ill separate it that way i can debug it separately too
router.post('/register', function (req, res, next) {
  //this calls the hashPassword method located in the auth.js file
  const hashedPassword = auth.hashPassword(req.body.password);
  //find a username based on the requested username
  models.users.findOne({
    where: {
      Username: req.body.username
    }
  }).then(user => {
    //check if user has been created already
    if (user) {
      res.send('this user already exists')
    } else {
      //if user hasnt been created then create it
      models.users.create({
        FirstName: req.body.firstName,
        LastName: req.body.lastName,
        Email: req.body.email,
        Username: req.body.username,
        Password: hashedPassword //password is now hashedPassword not req.body.password
      }).then(createdUser => {
        //isMatch calls the comparePassword method onteh newly created user
        //it takes the plain text password(req.body.pasword), salts and hashes it
        //and then compares it against the users hashedPassword that was made upon creation
          const isMatch = createdUser.comparePassword(req.body.password);
        //checks that isMatch is true and that if that is true,
        //it runs through the code already created from earlier in the lesson
          if(isMatch){
          //set the createdUserid to the variable userId
          const userId = createdUser.UserId;
          //token is set to the signUser method thats from the auth.js file
          const token = auth.signUser(createdUser);
          //use the .cookie method() to set the jwt and token to the cookie itself
          res.cookie('jwt', token);
          //if everything is good send them to the profile page
          res.redirect('profile/' + userId)
        } else {
          //if it fails throw this error
          console.error('not a match');
        }
      });
    }
  });
});



router.post('/login', function (req, res, next) {
  const hashedPassword = auth.hashPassword(req.body.password);
  //find user based on username and password
  models.users.findOne({
    where: {
      Username: req.body.username
    }
  }).then(user => {
    const isMatch = user.comparePassword(req.body.password)
    
    //if not found show log in failed
    if (!user) {
      return res.status(401).json({
        message: "Login Failed"
      });
    }
    //take the user that was found
    if (isMatch) {
       //set the user to the variable userId
      const userId = user.UserId;
      //token is set to the signUser method thats from the auth.js file
      const token = auth.signUser(user);
      //use the .cookie method() to set the jwt and token to the cookie itself
      res.cookie('jwt', token);
      //if everything is good send them to the profile page
      res.redirect('profile/' + userId)
    } else {
      console.log(req.body.password);
      res.redirect('login')
    }
  });
});

//in their profile page show the user info 
router.get('/profile/:id', auth.verifyUser, function (req, res, next) {
  if (req.params.id !== String(req.user.UserId)) {
    res.send('This is not your profile')
  } else {
    res.render('profile', {
      FirstName: req.user.FirstName,
      LastName: req.user.LastName,
      Email: req.user.Email,
      UserId: req.user.UserId,
      Username: req.user.Username
    });
  }
});

//set the route to log out
router.get('/logout', function (req, res) {
  //set the response of the cookie to null instead of token
  res.cookie('jwt', null);
  //redirect to the log in page
  res.redirect('/users/login');
});

module.exports = router;
