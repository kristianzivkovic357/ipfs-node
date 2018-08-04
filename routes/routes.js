'use strict';

const services = require('../services/ipfs');
const Response = require('../utils/response');

async function addToIPFS (req, res, next) {
  try {
    const IPFSData = await services.addIPFSFile(req.body.data, req.body.existingHash);
    res.send(Response.success(IPFSData));
  } catch (err) {
    next(err);
  }
}

async function getIPFSFile (req, res, next) {
  try {
    const IPFSFile = await services.getIPFSFile(req.body.hash);
    res.send(Response.success(IPFSFile));
  } catch (err) {
    next(err);
  }
}

module.exports = {
  addToIPFS,
  getIPFSFile
};
