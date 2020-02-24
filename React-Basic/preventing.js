class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showWarning: true }
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.setState({
      showWarning: !this.state.showWarning
    })
  }

  render() {
    return (
      <div>
        <Warning warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'SHOW' : 'HIDE'}
        </button>
      </div>
    )
  }
}

function Warning(props) {
  if (!props.warn) {
    return null
  }

  return (
    <div style={{ backgroundColor: 'red' }} className="warning">
      Warning!
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById('root'))
