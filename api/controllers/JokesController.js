/**
 * JokesController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
  random: function(req, res, next) {
     Jokes.find(function(err,jokes) {
       if(err) next(err);
       if(jokes.length === 0) {
       	  var joke = { "joke": "Ooops! No jokes for you."};
       	  res.view({ joke : joke });
       } else {
      	  getRndJoke(jokes, function(joke) {
       	    res.view({ joke : joke });
          });
       }
     });
  },

  index : function(req,res,next) {
     Jokes.find(function(err,jokes) {
       if(err) next(err);       
       res.view({ jokes : jokes });
     });	  
  }
      
};
//fcn to get a random joke from the pool of jokes
function getRndJoke (jokes, cb) {
  var limit = jokes.length + 1; 
  var rndNo = Math.floor(Math.random() * limit); //make random number fall between 1 and jokes.length
  cb(jokes[rndNo - 1]); //ensure no error if jokes.length = 1 and rndNo = 1
}
