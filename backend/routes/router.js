const Register = require('../controller/signUpController');
// const LoginService = require("../controller/loginService");
const { Auth_ACCESS } = require('../middleware/auth');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Autentication');
});

router.post('/register', Register.create);
// router.post('/login', LoginService.login);

module.exports = router;
