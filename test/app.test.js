const test = require('node:test');
const assert = require('node:assert');
const app = require('../app');

test('Validación inicial de la API', () => {
  assert.ok(app);
});
