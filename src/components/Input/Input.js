import React, { Component } from 'react';
import './input.css'
import axios from 'axios'
class Input extends Component {
    state = {
        val :''
    }
    render() {
        const {allChecked,isSelect}=this.props
        const {val} = this.state
        return (
            <div className="input-item">
                <input type="text" placeholder="What needs to be done?" value={val} onChange={
                    this.onChange
                } onKeyDown ={
                    this.addTodoList    
                }/>
                <a href="javascript:;" onClick={
                    allChecked
                }>
                <svg t="1544873127507" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3303" width="22" height="22"><defs><style type="text/css"></style></defs><path d="M959.429379 343.214852 890.590548 274.378068 511.268336 653.699256 131.944078 274.378068 63.105247 343.214852 501.1857 781.294282 521.348925 781.294282Z" p-id="3304" fill={isSelect?"#000":"#e6e6e6"}></path></svg>
                </a>
            </div>
        );
    }
    onChange = (event)=>{
        this.setState({
            val: event.target.value
        })
    }
    addTodoList = (event)=>{
        const {val} = this.state
        const{addTodoList}=this.props
        if(event.which === 13 && val.trim()){
            const newList = {
                id:new Date().getTime(),
                txt:val,
                isCompleted:false
            }
            addTodoList(newList)
              this.setState({
                  val:''
              })
        //     axios.post('http://localhost:3008/todolist',newList).then(
        //     res=>{
        //       addTodoList(res.data)
        //       this.setState({
        //           val:''
        //       })
        //     }
        // )
        }
    }
}

export default Input;