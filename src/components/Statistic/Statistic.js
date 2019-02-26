import React, { Component } from 'react';
import './statistic.css'
class Statistic extends Component {
    render() {
        const {todolist,showType,changeType,clearCompleted} = this.props
        const rest = todolist.filter(ele=>ele.isCompleted === false)
        return (
            <div className="rest-list">
                <span>{rest.length}<span className="num"></span> {rest.length?'items':'item'} left</span>
                <ul>
                    <li><a href="javascript:;" onClick={()=>{changeType('all')}}>All</a></li>
                    <li><a href="javascript:;" onClick={()=>{changeType('active')}}>Active</a></li>
                    <li> <a href="javascript:;" onClick={()=>{changeType('completed')}}>Completed</a></li>
                </ul>
                <a href="javascript:;" onClick={clearCompleted}>Clear Completed</a>
            </div>
        );
    }
}

export default Statistic;