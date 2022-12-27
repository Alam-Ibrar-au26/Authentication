const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Autentication');
});

router.post('/register', Register.create);
router.post('/login', LoginService.login);

module.exports = router;
