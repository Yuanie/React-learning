class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = { isLoggledIn: false }
  }

  handleLoginClick() {
    this.setState({ isLoggledIn: true })
  }

  handleLogoutClick() {
    this.setState({ isLoggledIn: false })
  }

  render() {
    const isLoggledIn = this.state.isLoggledIn
    let button

    if (isLoggledIn) {
      button = <LogoutBtn onClick={this.handleLogoutClick} />
    } else {
      button = <LoginBtn onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <Greeting isLoggledIn={this.state.isLoggledIn} />
        {button}
      </div>
    )
  }
}

function Greeting(props) {
  const isLoggledIn = props.isLoggledIn
  if (isLoggledIn) {
    return <UserGreeting />
  } else {
    return <GuestGreeting />
  }
}

function UserGreeting() {
  return <h1>Welcome, Friends!</h1>
}

function GuestGreeting() {
  return <h1>Please Sign Up!</h1>
}

function LoginBtn(props) {
  return <button onClick={props.onClick}>LOG IN</button>
}

function LogoutBtn(props) {
  return <button onClick={props.onClick}>LOG OUT</button>
}

ReactDOM.render(<LoginControl />, document.getElementById('root'))
