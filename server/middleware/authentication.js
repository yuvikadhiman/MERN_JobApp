const User = require('../model/User')
const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')

const auth = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnauthenticatedError('Authentication invalid !')
  }
  const token = authHeader.split(' ')[1]

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    // console.log(payload)
    // attach the user to the job routes
    req.user = { userId: payload.userId, firstName: payload.firstName}
    // console.log(req.user)
    next()
  } catch (error) {
    console.log(error)
    throw new UnauthenticatedError('Authentication invalid')
  }
}

module.exports = auth