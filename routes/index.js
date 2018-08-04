'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const { auth } = require('./auth');
const routes = require('./routes');
const h = require('./handlers.js');

const router = express.Router();
const baseUrl = '/rest/v1';

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));

router.post(`${baseUrl}/add_to_ipfs`, auth, routes.addToIPFS);
router.post(`${baseUrl}/get_ipfs_file`, auth, routes.getIPFSFile);
router.use(h.error);

module.exports = router;
