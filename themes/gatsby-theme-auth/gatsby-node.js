const path = require("path")

const SIGN_IN_PATH = "sign-in"
const SIGN_UP_PATH = "sign-up"
const SIGN_OUT_PATH = "sign-out"

exports.createPages = ({ actions }, options) => {
  const { createPage } = actions
  const {
    signIn: signInOptions = {},
    signUp: signUpOptions = {},
    signOut: signOutOptions = {},
  } = options

  createPage({
    path: signInOptions.path || SIGN_IN_PATH,
    component: path.resolve(`${__dirname}/src/pages/sign-in.js`),
  })

  createPage({
    path: signUpOptions.path || SIGN_UP_PATH,
    component: path.resolve(`${__dirname}/src/pages/sign-up.js`),
  })

  createPage({
    path: signOutOptions.path || SIGN_OUT_PATH,
    component: path.resolve(`${__dirname}/src/pages/sign-out.js`),
  })
}
