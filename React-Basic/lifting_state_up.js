const scaleName = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

function BoilingVerdict(props) {
  const temperature =
    props.scale === 'c'
      ? props.temperature
      : tryConvert(props.temperature, toCelsius)
  if (temperature >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value)
  }

  render() {
    const temperature = this.props.temperature
    const scale = this.props.scale
    return (
      <fieldset>
        <legend>Enter temperature in {scaleName[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />

        <BoilingVerdict temperature={parseFloat(temperature)} scale={scale} />
      </fieldset>
    )
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: '',
      scale: 'c'
    }
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
  }

  handleCelsiusChange(value) {
    this.setState({
      temperature: value,
      scale: 'c'
    })
  }

  handleFahrenheitChange(value) {
    this.setState({
      temperature: value,
      scale: 'f'
    })
  }

  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius =
      scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit =
      scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
      </div>
    )
  }
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}

ReactDOM.render(<Calculator />, document.getElementById('root'))
