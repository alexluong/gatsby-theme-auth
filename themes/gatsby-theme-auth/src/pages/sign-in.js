import React from "react"
// UIs
import Form from "../components/Form"
import TextField from "../components/TextField"
import SignInLayout from "../components/SignInLayout"

export function SignInPage({ signIn }) {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  function onSubmit(e) {
    e.preventDefault()
    signIn({ username, password })
  }

  return (
    <SignInLayout>
      <Form onSubmit={onSubmit}>
        <TextField
          label="Username:"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <TextField
          label="Password:"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button>Sign In</button>
      </Form>
    </SignInLayout>
  )
}

export default SignInPage
