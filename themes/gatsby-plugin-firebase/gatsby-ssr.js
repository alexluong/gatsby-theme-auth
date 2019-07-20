const React = require("react")
const Layout = require("./src").default

exports.wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
