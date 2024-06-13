const User = require('../models/userModel');
const Role = require('../models/roleModel');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const jwtSecret = process.env.JWTSECRET
const generateTokens = (id, roles, username) => {
    const payload =  {
      id,
      username,
      roles
    }

    const accessToken = jwt.sign(payload, jwtSecret, {
      expiresIn: "60m",
    });

    return accessToken;
}
class userController {

  async registration (req, res) {
    try {
        const {username, email, gender, password, confirmPassword} = req.body
        if (!username || !email || !gender || !password || !confirmPassword) {
            return res.status(400).json({message: "Все поля обязательны для заполнения!"})
        }

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
          return res.status(400).json({message: "Ошибка при регистрации", errors})
        }

        if (confirmPassword != password) {
          return res.status(400).json({error: "Пароли не совпадают!"})
        }

        const candidate = await User.findOne({username})
        if (candidate) {
          return res.status(400).json({message: "Пользователь с таким именем уже существует!"})
        }

        const hashPassword = bcrypt.hashSync(password, 7);
        const userRole = await Role.findOne({value: "CLIENT"})
        const user = new User({username, email, gender, password: hashPassword, roles: [userRole.value]})
        await user.save()
        return res.json({message: "Succesfully registered!", "user": user})
    } catch (e) {
      console.log(e)
      res.status(400).json({message: 'Registration error'})
    }
  }

  async login (req, res) {
    try {
        const {username, password} = req.body
        if (!username || !password) {
            return res.status(400).json({message: "Все поля обязательны для заполнения!"})
        }

        const user = await User.findOne({username})
        if (!user) {
            return res.status(400).json({message: `Пользователя "${username}" не существует!`})
        }

        const validPassword = bcrypt.compareSync(password, user.password)
        if (!validPassword) {
            return res.status(400).json({message: "Неправильный пароль!"})
        }

        const accessToken = generateTokens(user._id, user.roles, user.username)
        res.status(200).json({accessToken});

    } catch (e) {
        console.log(e)
        res.status(400).json({message: 'Login error'})
    }
}

// async logout (req, res) {
//     res.clearCookie("accessToken");
//     res.clearCookie("refreshToken");
//     res.json({ message: "Logout successful" });
// }

// // async refreshToken (req, res) {
// //   const refreshToken = req.cookies.refreshToken;

// //   if (!refreshToken) {
// //     return res.status(401).json({ message: "Unauthorized" });
// //   }

// //   jwt.verify(refreshToken, config.jwtSecret, (err, decoded) => {
// //     if (err) {
// //       return res.status(401).json({ message: "Invalid token" });
// //     }

// //     const accessToken = jwt.sign({ userId: decoded.userId }, config.jwtSecret, {
// //       expiresIn: config.accessTokenExpiration,
// //     });

// //     res.cookie("accessToken", accessToken, { httpOnly: true });
// //     res.json({ message: "Token refreshed" });
// //   });
// };

//   async getUsers (req, res) {
//     try {
//       const users = await User.find()
//       res.json(users)
//     } catch (e) {
//       res.status(400).json({message: 'Registration error'})
//     }
//   }

}

module.exports = new userController()