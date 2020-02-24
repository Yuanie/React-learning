import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'

// Fragement 的作用在于代替 div 包裹且不引入新的标签

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ['learn react', 'learn english', 'learn vue'],
      inputValue: ''
    }

    this.handleDelete = this.handleDelete.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleDelete(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }

  getTodoItems() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          deleteFunc={this.handleDelete}
          content={item}
          index={index}
        />
      )
    })
  }
  // 父组件通过属性的形式传递参数
  // 子组件通过props接收
  render() {
    // jsx 语法
    return (
      <Fragment>
        <input
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        {/* 给按钮添加样式 1.可以用style方法 2.添加css文件 但是类名为className */}
        {/* <button style = {{color: red}} onClick={this.handleBtnClick}>add</button> */}
        <button className="btn" onClick={this.handleBtnClick}>
          add
        </button>
        <ul>{this.getTodoItems()}</ul>
      </Fragment>
    )
  }
}

export default TodoList
