require('es6-promise').polyfill();
require('isomorphic-fetch');


// Get main JSON file of parrots
// @callback: function
export const getParrotsJSON = (callback) => {
  const cotpp_json_url = '//raw.githubusercontent.com/jmhobbs/cultofthepartyparrot.com/master/parrots.json';

  fetch(cotpp_json_url)
  .then(res => {
    if ( res ) {
      return res.json()
    } else {
      return []
    }
  })
  .then(parrots => {
    if ( callback ) {
      return callback(parrots)
    } else {
      return parrots
    }
  })
}


// Search parrots by name
// @name: string
// @callback: function
export const searchParrotsByName = (name='', callback) => {
  const name_lc = name.toLowerCase()

  getParrotsJSON( parrots => {
    parrots.filter(p => {
      if ( p.name.toLowerCase() === name_lc ) {
        if ( callback ) {
          return callback(p)
        } else {
          return p
        }
      } else {
        return false
      }
    })
  })
}


// Get a parrots gif
// @options: object
// @callback: function
export const getParrotGif = (options={}, callback) => {
  const defaultOptions = {
          'name': '',
          'res': 'hd',
          'path': '',
        },
        o = Object.assign(defaultOptions, options)

  let gif = '';

  searchParrotsByName(o.name, parrot => {
    const sdGif = parrot.gif ? parrot.gif : '',
          hdGif = parrot.hd ? parrot.hd : sdGif;


    gif = o.path + (o.res === 'sd' ? sdGif : hdGif)


    if ( callback ) {
      return callback(gif)
    } else {
      return gif
    }
  })

}

export default getParrotGif