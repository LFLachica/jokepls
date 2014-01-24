/**
 * Jokes
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	joke: {
		  type: "string",
			required: true
		},
		tag: {
		  type: "string"
		},
		source: {
		  type: "string"
		}
  }

};
