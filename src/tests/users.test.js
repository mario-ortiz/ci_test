const assert = require('assert');

describe('users route', function() {

    describe('GET /users', function() {
      it('should return an array', function() {
        assert.equal([1,2,3].indexOf(4), -1);
      });
    });

  });