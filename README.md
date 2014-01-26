# jokepls
### A simple jokes app built using [Sails](http://sailsjs.org/)
I created this app to learn sails

#### Dependencies
* node (get it [here](http://nodejs.org/) and follow installation guide)
* sails.js `$ npm install sails`
* mongodb (install [it](http://www.mongodb.org/downloads) and run it locally or just like in my case, use hosted solution like [mongohq](https://www.mongohq.com/home))

clone this repo
```
$ git clone https://github.com/LFLachica/jokepls.git
```

go to jokepls folder and install other package dependencies
```
$ cd jokepls
$ npm install
```

configure database 
```
$ cd config
```
you can create local.js or just use adapters.js
```
$ vim local.js
```
or

```
$ vim adapters.js
```
and put your configuration

(included here is a `sample.local.js` file so you can have a reference)

and finally,

lift sails
```
$ sails lift
```

**To learn about sails**, see [sailsjs.org](http://sailsjs.org/) or you can follow this [screencast](http://irlnathan.github.io/sailscasts/) by [Irl Nathan](https://github.com/irlnathan)  

