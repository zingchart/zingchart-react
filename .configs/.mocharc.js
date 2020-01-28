'use strict';

// Here's a JavaScript-based config file.
// If you need conditional logic, you might want to use this type of config.
// Otherwise, JSON or YAML is recommended.

module.exports = {
  diff: true,
  extension: ['spec'],
  opts: false,
  exit: true, // end bash script when done
  slow: 75,
  timeout: 5000,
  ui: 'bdd',
  spec: ['test/*.spec.js'],
  color: true,
  output: 'test/test.js'
};