import React, { Component } from 'react';
import './todolist.css'
import axios from 'axios';
class TodoList extends Component {
    // componentDidMount() {
    //     axios.get('http://localhost:3008/todolist').then(
    //         res=>{
    //            this.setState({
    //                todolist:res.data
    //            }) 
    //         }
    //     )
    // }
    render() {
        const {todolist,deleteTodolist,onSelect,showType} = this.props 
        console.log(todolist);
        const showList = todolist.filter(ele => {
            switch(showType){
                case 'all':return true
                case 'active': return !ele.isCompleted
                default: return ele.isCompleted
            }
        })
        const li = showList?showList.map(ele=>
            <li key = {ele.id}>
            <div className="content-input">
            <input type="checkbox" name="" id={`checkbox${ele.id}`} onChange={()=>{onSelect(ele.id)}} checked={
                  todolist.filter(com=> com.id === ele.id)[0].isCompleted
                }
                />
            <label htmlFor={`checkbox${ele.id}`}>
                <span className="list-i">{ele.txt}</span>
                <svg t="1545032003706" class="icon icon-untouch"viewBox="0 0 1024 1024" version="1.1" p-id="5053" width="20" height="20"><defs><style type="text/css"></style></defs><path d="M597.333 85.333A341.333 341.333 0 0 0 256 426.667 341.333 341.333 0 0 0 597.333 768a341.333 341.333 0 0 0 341.334-341.333A341.333 341.333 0 0 0 597.333 85.333m0 85.334c141.654 0 256 114.773 256 256 0 141.653-114.346 256-256 256a256 256 0 0 1-256-256 256 256 0 0 1 256-256M210.347 248.32A341.76 341.76 0 0 0 85.333 512a341.333 341.333 0 0 0 341.334 341.333c27.306 0 54.186-3.413 80.213-9.813-75.093-16.64-144.213-54.187-200.96-105.813A256.043 256.043 0 0 1 170.667 512c0-12.8 1.28-25.173 2.986-37.973-1.706-15.787-2.986-31.574-2.986-47.36 0-61.44 13.653-122.454 39.68-178.347z" fill="#cccccc" p-id="5054"></path>
                </svg>
                <svg t="1545032029200" class="icon icon-touch" viewBox="0 0 1024 1024" version="1.1" p-id="5210" width="20" height="20"><defs><style type="text/css"></style></defs><path d="M597.333 85.333A341.333 341.333 0 0 0 256 426.667 341.333 341.333 0 0 0 597.333 768a341.333 341.333 0 0 0 341.334-341.333A341.333 341.333 0 0 0 597.333 85.333M210.347 248.32A341.76 341.76 0 0 0 85.333 512a341.333 341.333 0 0 0 341.334 341.333c27.306 0 54.186-3.413 80.213-9.813-75.093-16.64-144.213-54.187-200.96-105.813A256.043 256.043 0 0 1 170.667 512c0-12.8 1.28-25.173 2.986-37.973-1.706-15.787-2.986-31.574-2.986-47.36 0-61.44 13.653-122.454 39.68-178.347z" fill="#d81e06" p-id="5211"></path>
                </svg>
            </label>
            </div>
            
            <a href="javascript:;" className="del" onClick={()=>{deleteTodolist(ele.id)}}><svg t="1544875591230" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2169" width="20" height="20"><defs><style type="text/css"></style></defs><path d="M512 421.504l274.752-274.752 90.496 90.496L602.496 512l274.752 274.752-90.496 90.496L512 602.496l-274.752 274.752-90.496-90.496L421.504 512 146.752 237.248l90.496-90.496z" p-id="2170" fill="#cc9a9a"></path></svg></a>
        </li>
           
        ):<></>
        return (
            <div className="list">
                <ul className="list-con">
                    {li}
                </ul> 
            </div>
        );
    }
    

}

export default TodoList;