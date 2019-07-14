var express = require('express');
var router = express.Router();

// chane GET route to /staticPlanets to set the data
//of the planets to what is in the static model
/*router.get('/staticPlanets', function(req, res, next) {
  //instead of using res.render method the res.send method is needed.
  //This method will send out the data and allow it to be accessible
  //by a front-end application. The data that is send must be converted
  //to JSON using the JSON.stringify() method 
  res.send(JSON.stringify(staticModels.planet));
});
*/

//to be able to grab the planets data from the database
/*router.get('/planets', function (req, res, next) {
  models.planets.findAll().then(planetsAsPlainObjects => {
    const mappedPlanets = planetsAsPlainObjects.map(
      sequelizeModelForPlanet => ({
        id: sequelizeModelForPlanet.id,
        name: sequelizeModelForPlanet.name,
        numberOfMoons: sequelizeModelForPlanet.numberOfMoons
      })
    );
    res.send(JSON.stringify(mappedPlanets));
  });
});
*/

module.exports = router;
