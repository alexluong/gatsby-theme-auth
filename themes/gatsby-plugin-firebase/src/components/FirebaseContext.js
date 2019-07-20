import React from "react"

const FirebaseContext = React.createContext(null)

export function useFirebase() {
  const firebase = React.useContext(FirebaseContext)
  return firebase
}

export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
)

export default FirebaseContext
