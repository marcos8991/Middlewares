const router = require('express').Router();
const{index, login, admin} = require('../controllers/mainController');

const usersLogs = require('../middlewares/userLogs');
const auth = require('../middlewares/authAdmin');

router
.get('/', index)
.get('/login', login)
.get('/admin', auth, admin)

module.exports = router;