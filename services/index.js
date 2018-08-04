'use strict';

const ipfs = require('./ipfs');

async function addToIPFS (data, existingHash) {
  const hash = await ipfs.addFiles(data, existingHash);

  return hash;
}

module.exports = {
  addToIPFS
};
