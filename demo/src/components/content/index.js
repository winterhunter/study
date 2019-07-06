import React, { Component } from 'react'
import List from './list'
import './index.css'
class Content extends Component{
    render() {
        return (<div className="content">
            <List title="已经存在的条目" todo={this.props.todo} status="doing"/>
        </div>)
    }
}

export default Content