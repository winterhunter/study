import React, { Component } from 'react'
import './index.css'

class ToDoItem extends Component {
    checkboxCheck = () => {
        this.props.item.status === 'doing' && this.props.checkboxCheck(this.props.item.id)
    }
    clickDelete = () => {
        this.props.clickDelete(this.props.item.id)
    }
    render() {
        return (<div className={'ToDoItem' + (this.props.item.status === 'done' ? ' ToDoItem-finish' : '')}>
           <input type="checkbox" onChange={this.checkboxCheck} checked={this.props.item.status === 'done'}></input>
           <p>{this.props.item.text}</p>
           <a onClick={this.clickDelete}>删除</a> 
        </div>)
    }
}

export default ToDoItem 