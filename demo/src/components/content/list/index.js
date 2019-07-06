import React, { Component } from 'react'
import TodoItem from './todoItem'
import './index.css'

class List extends Component {
    render() {
        return (<div className="list">
            <h2 className="list-title">
                {this.props.title}   
            </h2>
            <div>
                {
                    this.props.todo.list.filter(item => {
                        return item.status === this.props.status
                    }).map(item => {
                        return <TodoItem item={item} checkboxCheck={this.props.todo.finish} key={item.id} clickDelete={this.props.todo.delete}/>
                    })
                }
            </div>
        </div>)
    }
}

export default List