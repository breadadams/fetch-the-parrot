const fetchTheParrot = require('./index.js'),
      expect = require('chai').expect;

describe('fetchTheParrot', () => {

  describe('getParrotsJSON', () => {

    it('it should be a function', () => {
      expect(fetchTheParrot.getParrotsJSON).to.be.an('function')
    })

    it('it should return an array', () => {
      fetchTheParrot.getParrotsJSON(parrots => {
        expect(parrots).to.be.an('array')
      });
    })

  })


  describe('searchParrotsByName', () => {

    it('it should be a function', () => {
      expect(fetchTheParrot.searchParrotsByName).to.be.an('function')
    })

    it('it should return an object', () => {
      fetchTheParrot.searchParrotsByName('Beret Parrot', parrot => {
        expect(parrot).to.be.an('object')
      });
    })

  })


  describe('getParrotGif', () => {

    it('it should be a function', () => {
      expect(fetchTheParrot.getParrotGif).to.be.an('function')
    })

    it('it should return a string', () => {
      fetchTheParrot.getParrotGif({
        'name': 'Parrot'
      }, gif => {
        expect(gif).to.be.an('string')
      });
    })

  })

})