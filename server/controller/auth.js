const User = require("../model/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");
// const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  // const { name, email, password } = req.body;
  // const salt = await bcrypt.genSalt(10);
  // const hashedpassword = await bcrypt.hash(password, salt);
  // const tempUser = { name, email, password: hashedpassword };
  console.log("register");
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token,
    },
  });
  // res.status(StatusCodes.CREATED).json({ user: { name: user.getName() }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide name,email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("invalid Credentials");
  }
  //  compared passwords
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("invalid Credentials");
  }
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token,
    },
  });
};
module.exports = {
  register,
  login,
};
