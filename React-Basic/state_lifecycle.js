class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
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
        <h2> It is{this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

ReactDOM.render(<Clock />, document.getElementById('root'))
