/**
 * @author Wale Ayandiran
 * Passport to manage authentication and authorization
 * with the application.
 */

import Sequelize from 'sequelize';
import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import passportJWT from 'passport-jwt';

import models from '../models';

const { Op } = Sequelize;
const LocalStrategy = require('passport-local');

let token;

function passportController () {

passport.use(new LocalStrategy({
  usernameField: 'user[email]',
  passwordField: 'user[password]',
}, (email, password, done) => {
  models.User.findOne({ 
		where: {
			[Op.or]: [{ email }, { username: email }],
		},
	})
    .then((user) => {
      if(user) {
				bycrypt.compare(password, userExists.password, (err, result) => {
					if (err) {
						return done(err);
					}
					if (!result) {
						return done(null, false, { errors: { 'username or password': 'is invalid' } });
					}
				})
				return done(null, user);
      }
    }).catch(done);
}));
};

module.exports = passportController; 