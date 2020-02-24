function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  )
}

function FormattedDate(props) {
  return (
    <div>
      <h2>It's No.{props.id} Clock</h2>
      <h2>now is {props.date.toLocaleTimeString()}</h2>
    </div>
  )
}

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      id: 1
    }
  }

  // Mount
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000)
  }

  // Unmount
  // If the Clock component is ever removed from the DOM,
  // React calls the componentWillUnmount() lifecycle method so the timer is stopped.
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <FormattedDate id={this.state.id} date={this.state.date} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
