// Basic test for the secrets demo application
const assert = require('assert');
const app = require('../src/index');

console.log('Running application tests...');

// Test that the app module exports correctly
assert(app !== undefined, 'App should be defined');
assert(typeof app === 'function', 'App should be an Express application');

console.log('All tests passed!');
process.exit(0);
