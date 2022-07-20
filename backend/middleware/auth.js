import jwt from "jsonwebtoken";

export const auth = {
  verifyToken: [
    (req, res, next) => {
      const token = req.cookies.access_token;
      if (!token) {
        res.status(401).json({ message: `Not Authenticated` });
      }

      jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) res.status(403).json({ message: `Token not valid` });
        req.user = user;
        next();
      });
    },
  ],
  verifyUser: [
    (req, res, next) => {
      verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
          next();
        } else {
          res.status(403).json({ message: `Unauthorized` });
        }
      });
    },
  ],
};
