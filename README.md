# fetch-the-parrot

[![npm version](https://badge.fury.io/js/fetch-the-parrot.svg)](https://badge.fury.io/js/fetch-the-parrot)
[![Build Status](https://travis-ci.org/breadadams/fetch-the-parrot.svg?branch=master)](https://travis-ci.org/breadadams/fetch-the-parrot)

A small JS client to handle fetching the ever-loved _Party Parrots_ (of all [varieties](http://cultofthepartyparrot.com/)).

![Mega parrot!](https://g.redditmedia.com/F2mSqRceNQbYdWhAaTo0xy4uR4QxQlBMRFYAn1xrKK4.gif?w=320&s=b2d1e56e82733371048a7e2b6d61b7f8)


## Installation

#### NPM

`npm i fetch-the-parrot --save`

#### Yarn

`yarn add fetch-the-parrot`


## Basic examples

##### ES5

```
var getParrotGif = require('fetch-the-parrot').getParrotGif;

var parrot = getParrotGif({
  'name': 'Parrot',
  'res': 'hd',
  'path': 'http://my-parrot-website.com/parrots/'
})

console.log(parrot)

/* Result */
http://my-parrot-website.com/parrots/parrots/hd/parrot.gif
```

##### ES6

```
import getParrotGif from 'fetch-the-parrot'

getParrotGif({
  'name': 'Fiesta Parrot',
  'path': 'http://my-parrot-website.com/parrots/'
}, gif => {
  console.log(gif)

  /* Result */
  http://my-parrot-website.com/parrots/parrots/fiestaparrot.gif
})
```

## Usage

This library exposes 3 methods in total.

So far we've seen `getParrotGif` in the above snippets, but `getParrotsJSON` & `searchParrotsByName` are also available. Let's run over all 3 methods in more detail:

* `getParrotGif(options, callback)`: This is the _primary_ (default) method, used to return a partyparrot's gif URL.

  * **options** `object`

    * **name** `string`: Party parrot's name, case insensitive (use names as labelled [here](http://cultofthepartyparrot.com/)).

    * **res** `string`: The resolution for our gif, `sd` (default) or `hd`. Note, not all party parrots have _HD_ support, in the case of a hd request on an _"sd-only"_ parrot, the _SD_ version will be returned.

    * **path** `string`: Optional string to set the path of where the party parrot images are located.

  * **callback(gif)** `function`: Returns the gif URL if successful.

* `getParrotsJSON(callback)`: Returns the main json object of _all_ parrots.

  * **callback(data)** `function`: Returns json object if successful.

* `searchParrotsByName(name, callback)`: Returns the single object for a parrot.

  * **name** `string`: Name, case insensitive, of the parrot we're searching for (use names as labelled [here](http://cultofthepartyparrot.com/)).

  * **callback(data)** `function`: Returns json object for queried parrot if successful.


## Also worth checking out

* [cultofthepartyparrot.com/](http://cultofthepartyparrot.com/)