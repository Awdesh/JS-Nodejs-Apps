var assert = require('assert');

describe('Array', function () {
	describe('#indexOf()', function () {
	// body...
	it('should return -1 when value is not present', function() {
		assert.equal(-1, [1,2,3].indexOf(5));
		assert.equal(-1, [1,2,3].indexOf(6));
		assert.equal(-1, [1,2,3].indexOf(7));
	});
  });
});