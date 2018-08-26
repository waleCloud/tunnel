/**
 * Token middleware for signing and verifying token claims
 */
import jwt from 'jsonwebtoken';

  /**
   * verify a request token from header [x-access-token]
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token']; // get token from headers
    if (!token) {
      return res.status(403).send({
        auth: false,
        error: {
          body: ['No token provided'],
        },
      });
    }
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res.status(500).send({
          auth: false,
          error: {
            body: ['Access could not be verified'],
          },
        });
      }
      // token verified successfully return next
      res.userId = decoded.id;
      return next();
    });
  };

  export default verifyToken;
