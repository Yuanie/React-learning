import React, { Component, Fragment } from 'react'

// 子组件与父组件通信 需要调用父组件的方法
class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    const { deleteFunc, index } = this.props
    deleteFunc(index)
  }

  render() {
    // console.log(this.props)
    const { content } = this.props
    return (
      <Fragment>
        <li onClick={this.handleDelete}>{content}</li>
      </Fragment>
    )
  }
}

export default TodoItem
