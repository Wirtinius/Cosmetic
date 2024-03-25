const jwt = require('jsonwebtoken');

const admin = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; 
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWTSECRET);
    req.user = decoded; 
    if (req.user.roles[0] !== 'ADMIN') {
      return res.status(401).json({ message: 'Unauthorized: Not an admin' });
    }
    next();
  } catch (e) {
    console.log(e);
    res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

module.exports = admin;

