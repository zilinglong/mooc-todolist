// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react';
import Going from './component/Going';
import Done from './component/Done';
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todoList: [],
      doneList: []
    };
    this.checkItem = this.checkItem.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.deleteTodoList = this.deleteTodoList.bind(this);
    this.addTodoList = this.addTodoList.bind(this);
  }
  // input框改变并赋值
  inputChange(e) {
    this.setState({ inputValue: e.target.value });
  }
  // 添加到todoList
  addTodoList() {
    this.setState({
      todoList: [...this.state.todoList, this.state.inputValue],
      inputValue: ''
    });
  }
  // 删除
  deleteTodoList(idx) {
    // 尽量不要直接修改state中的数据，因此，需要将值赋值给另外一个变量
    const todoList = this.state.todoList;
    todoList.splice(idx, 1);
    // this.setState({
    //   todoList: todoList
    // });
    // 如果key和value的值相同，则可以写成一个
    this.setState({
      todoList
    });
  }
  checkItem(idx) {
    this.setState({
      doneList: [...this.state.doneList, this.state.todoList.splice(idx, 1)]
    });
  }
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.inputChange}
          />
          <button onClick={this.addTodoList}>添加到todoList</button>
        </div>
        <Going
          todoList={this.state.todoList}
          onDelete={this.deleteTodoList}
          onCheck={this.checkItem}
        />
        <Done doneList={this.state.doneList} />
      </div>
    );
  }
}

export default App;
