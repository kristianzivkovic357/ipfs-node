'use strict';

const ipfsAPI = require('ipfs-api');
const errors = require('../utils/errors');

const ipfs = ipfsAPI('localhost', '5001', {protocol: 'http'});

async function addIPFSFile (data, existingHash) {
  let ipfsNotation = Buffer.from(data);
  let successfullyUnpined = 1;

  try {
    await ipfs.pin.rm(existingHash);
  } catch (err) {
    successfullyUnpined = 0;
  } finally {
    const hashArr = await ipfs.files.add(ipfsNotation);

    return {
      items: hashArr,
      successfully_unpined: successfullyUnpined
    };
  }
}

async function getIPFSFile (hash) {
  try {
    const content = await ipfs.files.cat(hash);
    return content.toString();
  } catch (err) {
    throw new errors.NotFoundError();
  }
}

module.exports = {
  addIPFSFile,
  getIPFSFile
}
;
