function FancyBorder(props) {
  return (
    // Anything inside the <FancyBorder> JSX tag gets passed into the FancyBorder component as a children prop.
    // Since FancyBorder renders {props.children} inside a <div>,
    // the passed elements appear in the final output.
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  )
}

/* function WelComeDialog() {
  return (
    <Dialog title="Welcome" message="Thank you for visiting our SpaceCraft!" />
  )
}
 */
class SignupDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = { login: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    this.setState({ login: e.target.value })
  }

  handleClick() {
    alert(`Welcome ${this.state.login}!`)
    this.setState({ login: '' })
  }

  render() {
    return (
      <Dialog title="Mars Project" message="How should we refer to you?">
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Sign Up</button>
      </Dialog>
    )
  }
}

ReactDOM.render(<SignupDialog />, document.getElementById('root'))
