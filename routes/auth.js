'use strict';

const { AUTH_SECRET } = process.env;

function auth (req, res, next) {
  if (req.get('auth-header') !== AUTH_SECRET) {
    res.status(401);
    res.end();
  } else {
    next();
  }
}

module.exports = {
  auth
}
;
