'use strict';

const index = require('./index-d80b2fdd.js');

const uid = () => {
  // @ts-ignore
  let value;
  return (() => { value = index.E(); })();
};

exports.uid = uid;
