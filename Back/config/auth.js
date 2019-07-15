//added the required statement for working with models and jwt
const jwt = require('jsonwebtoken');
const models = require('../models/index');
const bcrypt = require("bcryptjs");

//code is needed to use JWT to log in
//here are two methods signUser and verifyUser
//add code into these methods and then the routes/users.js file will use
//these methods to either sign in the user or verify the user
module.exports = {
    //this function takes in a user which will be located in the routes/user.js file
    signUser: function(user) {
        //here is the token(card to present to people to get access to places according
        //to what Mr. Bishop said) the token is set to the jwt.sign method to be used 
        //when the user is signing in
        const token = jwt.sign(
            //the first parameter are the columns in th users table that are important
            //when finding a user to sign in
            {
              Username: user.Username,
              UserId: user.UserId
            },
            //the next parameter is what holds the secret key 
            'secret',
            //the last parameter is when the users time logged in expires
            {
              expiresIn: '1h'
            }
          );
          //return token so it can be used when this method is called.
          return token;
    },
  //takes in the request and response objects
    verifyUser: function(req, res, next) {
        //the try catch is used to try and find some data and if not 
        //it will catch the error and send a message back that an error occured
        try {
            //token is set to the cookies part of the object
            //its finding the jtw cookie specifically
            let token = req.cookies.jwt;
            //decoded is using the .verify method to verify that the token
            //variable in accurate, the second part is setting the secret
            //to the string secret
            const decoded = jwt.verify(token, 'secret');
            //user data part of the request object is being set to the decoded variable
            req.userData = decoded;
            //the findOne method on the users model finds the UserId on the verified token
            //once the user is found it hits then() and sets the req.user to user and users the next()
            //method which will maintain the information
            models.users
              .findOne({
                where: {
                  UserId: decoded.UserId
                }
              })
              .then(user => {
                req.user = user;
                next();
              });
          } catch (err) {
            console.log(err);
            return res.status(401).json({
              message: 'Auth Failed'
            });
          }
    },
    //this method takes in a plainTextPassword (the one the user inputs) as its 
    //one parameter
    hashPassword: function(plainTextPassword) {
      //will salt the password
      let salt = bcrypt.genSaltSync(10);
      //will take the plainTextPassword and the salt variable and hash it so it
      //becomes a long string of letters,numbers, and special characters
      let hash = bcrypt.hashSync(plainTextPassword, salt);
      //hash is returned so when the method is called the hash password will be available
      return hash;
    }
  };