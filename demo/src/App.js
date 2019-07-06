import React, { Component } from 'react';

import Header from './components/header'
import Content from './components/content'

import './App.css';
class App extends Component {
  
  constructor() {
    super()
    var count = 0;
    this.state = {
      todo: {
        list: [],
        add: (item) => {
          this.setState(preState => {
            let newTodo = preState.todo
            let list = Object.assign([], newTodo.list)
            list.push({
              text: item,
              id: count++,
              status: 'doing'
            })
            newTodo.list = list
            return {
              todo: newTodo
            }
          })
        },
        delete: (id) => {
          this.setState(preState => {
            let newTodo = preState.todo
            let list = newTodo.list.filter(item => id !== item.id)
            newTodo.list = list
            return {
              todo: newTodo
            }
          })
        },
        finish: (id) => {
          this.setState(preState => {
            let newTodo = preState.todo
            let list = newTodo.list.map(item => {
              if(item.id === id) {
                item.status = 'done'
              }
              return item
            })
            newTodo.list = list
            return {
              todo: newTodo
            }
          })
        }
      }
    }
  }
  render() {
    return (
      <div className="App">
        <Header todo={this.state.todo}></Header>
        <Content todo={this.state.todo}></Content>
      </div>
    );
  }
}

export default App;
