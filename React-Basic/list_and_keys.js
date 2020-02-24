// In React, transforming arrays into lists of elements is nearly identical.
function NumberList(props) {
  const numbers = props.numbers

  // don’t recommend using indexes for keys if the order of items may change.
  // This can negatively impact performance and may cause issues with component state.
  // Correct Key Usage
  const listItems = numbers.map(value => (
    <ListItems key={value.toString()} value={value} />
  ))
  // You can build collections of elements and include them in JSX using curly braces {}.
  return <ul>{listItems}</ul>
}

function ListItems(props) {
  // you should keep the key on the <ListItem /> elements in the array
  // rather than on the <li> element in the ListItem itself.
  return <li>{props.value}</li>
}

const numbers = [1, 2, 3, 4, 5]
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
)

// Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements
// inside the array to give the elements a stable identity:
