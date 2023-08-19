const express = require("express");
const router = express.Router();
const authenticateUser = require('../middleware/authentication');

const { register, login, updateUser } = require('../controller/auth');


router.route("/login").post(login);
router.route("/register").post(register);
router.patch('/updateUser', authenticateUser, updateUser);

module.exports = router;
