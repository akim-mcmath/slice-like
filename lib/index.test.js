'use strict';

var expect = require('chai').expect;
var sliceLike = require('./index');

var fixt = {
  0: 'zero',
  1: 'one',
  2: 'two',
  length: 3
};

describe('module: index', function() {

  it('is the main module', function() {
    expect(sliceLike).to.equal(require('..'));
  });

  it('is a function', function() {
    expect(sliceLike).to.be.a('function');
  });

  describe('sliceLike()', function() {

    it('returns an Array', function() {
      expect(sliceLike(fixt)).to.be.an.instanceof(Array);
    });

    describe('arrayLike is void, i.e., null or undefined', function() {
      it('throws Error', function() {
        expect(sliceLike.bind(null, undefined)).to.throw(Error);
        expect(sliceLike.bind(null, null)).to.throw(Error);
        expect(sliceLike.bind(null)).to.throw(Error);
      });
    });

    describe('arrayLike is neither Array-like nor void', function() {
      it('returns an empty Array', function() {
        expect(sliceLike.bind(null, 0)).not.to.throw(Error);
        expect(sliceLike.bind(null, '')).not.to.throw(Error);
        expect(sliceLike.bind(null, false)).not.to.throw(Error);
      });
    });

    describe('neither start nor end indeces are passed', function() {
      it('returns an Array of the entire length', function() {
        expect(sliceLike(fixt)).to.deep.equal(['zero', 'one', 'two']);
      });
    });

    describe('only start index is passed', function() {
      it('begins slice at start index, inclusive', function() {
        expect(sliceLike(fixt, 1)).to.deep.equal(['one', 'two']);
      });
    });

    describe('only end index is passed', function() {
      it('ends slice at end index, exclusive', function() {
        expect(sliceLike(fixt, null, 2)).to.deep.equal(['zero', 'one']);
      });
    });

    describe('both start and end indeces are passed', function() {
      it('slices both ends at respective indeces, as above', function() {
        expect(sliceLike(fixt, 1, 2)).to.deep.equal(['one']);
      });
    });
  });
});
