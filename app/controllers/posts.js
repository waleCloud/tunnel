/**
 * @author Wale Ayandiran
 * Post controller to manage posts and interaction
 * with the application.
 */

import Sequelize from 'sequelize';
import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import models from '../models';

const { Op } = Sequelize;

module.exports = { 
  /**
   * @param {*} req 
   * @param {*} res 
   * Create posts function by authenticated users
   */
   create(req, res) {
      models.Post.create(req.body);
      res.status(201).send({
        success: true,
        message: `post created successfully by ${res.userId}`,
      })
   },

   /**
    * @param {*} req 
    * @param {*} res 
    * Fetches paginated posts 10 per page with Authors
    */
   getPosts(req, res) {
     models.Post.findAll({ limit: 10,
      include: [{
        model: models.User, as: 'author', attributes: [ 'username', 'email' ],
      }]
    })
     .then((posts) => {
          return res.status(200).send({
            success: true,
            posts,
          })
        })
        .catch((error) => res.status(400).send(error));
   },

   /**
    * @param {*} req
    * @param {*} res
    * get single post with ID
    */
   getPost(req, res) {
     models.Post.findOne({
         where: { id: req.params.id },
         include: [{
           model: models.User, as: 'author', attributes: [ 'username', 'email' ],
         }]
     })
     .then((post) => {
         return res.status(200).send({
             success: true,
             post,
         })
     })
     .catch((error) => res.status(400).send(error));
   },

}
