import React, { Component } from 'react';
import './components/static/global.css'
import Input from'./components/Input/Input'
import TodoList from './components/TodoList/TodoList'
import Statistic from './components/Statistic/Statistic'
import axios from 'axios'
import './app.css'
class App extends Component {
  state = {
    todolist:[],
    showType:'all',
    isSelect:false,
  }
  // componentDidMount() {
  //   axios.get('http://localhost:3008/todolist').then(
  //           res=>{
  //             const arr = res.data
  //             this.setState({
  //               todolist:arr,
  //               isSelect:arr.findIndex(ele=>ele.isCompleted===false)===-1?true:false
  //             }) 

  //           } 
  //       )
  // }
  render() {
      const {todolist,showType,isSelect}=this.state 
      const content = todolist.length? <Statistic todolist={todolist} showType={showType} changeType={this.changeType} clearCompleted={this.clearCompleted}/>:<></>
    return (
      <div className="todo">
      <h1>todos</h1>
          <Input addTodoList = {this.addTodoList} allChecked={this.allChecked} isSelect={isSelect}/>
          <TodoList todolist={todolist} deleteTodolist={this.deleteTodolist} showType={showType} changeType={this.changeType} onSelect={this.onSelect} />
         {content}
      </div>
    );
  }
  addTodoList = (addItem)=>{//此处应该传obj
    const{todolist} = this.state
        this.setState({
          isSelect:false,
          todolist:[...todolist,addItem]
      })
  }
  deleteTodolist = (id)=>{
    const{todolist} = this.state
    console.log(id);
    
    this.setState({
      todolist:todolist.filter(ele=> ele.id !== id)
    })
    // return axios.delete(`http://localhost:3008/todolist/${id}`).then(
    //   res=>{
        
    //     this.setState({
    //       todolist:todolist.filter(ele=> ele.id !== id)
    //     })
    //   }
    // )
  }
  changeType= type=>{
    this.setState({
      showType:type
    })
  }
  allChecked=()=>{
    const {isSelect,todolist}=this.state
    console.log(todolist);
    
    if(todolist.length){
      this.setState({
        isSelect:!isSelect,
        todolist:todolist.map(ele=>{
                  ele.isCompleted=!isSelect
                return ele
                    })
      })
    // const list = todolist.map(todo =>{
    //    return axios.patch(`http://localhost:3008/todolist/${todo.id}`,{isCompleted:!isSelect}).then(()=>{
    //      console.log(todo,!isSelect);
         
    //    }).catch(()=>{
    //      console.log(todo +'failure');
         
    //    })})
    //    console.log(list);
    //   Promise.all(list).then(()=>{
    //     console.log(list);
    //     this.setState({
    //       isSelect:!isSelect,
    //       todolist:todolist.map(ele=>{
    //                 ele.isCompleted=!isSelect
    //               return ele
    //                   })
    //     })
    //   })
    }
  }
  onSelect=(id)=>{
    const {todolist} = this.state 
    //找到id同的改变不要用索引值
    const changeList=todolist.filter((ele)=> ele.id === id)
    console.log(changeList);
    
    this.setState({
      isSelect:false,
      todolist:todolist.map(ele=>{
        if(ele.id === id){
           ele.isCompleted=!changeList[0].isCompleted
        }
        return ele
      })})
    // //put 是整体更新, patch 是修改某一个.
    // axios.patch(`http://localhost:3008/todolist/${id}`,{isCompleted:!changeList[0].isCompleted}).then(
    //   res=>{
    //     //法 1
    //     //修改后在发送获取数据请求,直接再次获取数组
    //     // axios.get('http://localhost:3008/todolist').then(
    //     //   res=>{
    //     //         const arr = res.data
    //     //         this.setState({
    //     //           isSelect:false,
    //     //           todolist:arr
    //     //         }) 
    //     //         })
    //     //法 2
    //             //map 内的这个参数就是 todolist 数组内的某个对象直接对 todolist 进行修改 相当于直接修改了 todolist
    //             this.setState({
    //               isSelect:false,
    //               todolist:todolist.map(ele=>{
    //                 if(ele.id === id){
    //                   return res.data
    //                 }
    //                 return ele
    //               })
    //       }
    //     )
    //   }
    // )
  }
 
clearCompleted=()=>{
    const {todolist} =this.state
    // let newList=[]
    this.setState({
      todolist:todolist.filter(ele=>!ele.isCompleted)
    })
    // const list = todolist.filter(ele=>ele.isCompleted).map(todo =>{
    //    return axios.delete(`http://localhost:3008/todolist/${todo.id}`)
    //   })
      
    //   Promise.all(list).then(()=>{
    //     console.log(111111);
    //     this.setState({
    //       todolist:todolist.filter(ele=>!ele.isCompleted)
    //     })
    //   })
}
//  deleteClear = ()=>{
//   const {todolist}=this.state
//   console.log(this.clearCompleted());
  
//   Promise.all(this.clearCompleted()).then(()=>{
//     this.setState({
//       todolist:todolist.filter(ele=>!ele.isCompleted)
//     })
//   }) 
//  }
}

export default App;
