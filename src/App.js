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
let todoList = [];
let doneList = [];
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    };
    this.deleteTodoList = this.deleteTodoList.bind(this);
    this.checkItem = this.checkItem.bind(this);
  }
  // input框改变并赋值
  inputChange(e) {
    // console.log('e.target.value:', e.target.value);
    this.setState({ inputValue: e.target.value });
  }
  // 添加到todoList
  addTodoList() {
    console.log('inputValue:', this.state.inputValue);
    console.log('cur todoList:', todoList);
    todoList = [...todoList, this.state.inputValue];
    console.log('after todoList:', todoList);
  }
  // 删除 ()=>this.deleteTodoList()
  deleteTodoList(idx) {
    console.log('App delete idx:', idx);
    todoList.splice(idx, 1);
    console.log('after:', todoList);
  }
  checkItem(idx) {
    doneList.push(todoList.splice(idx, 1));
  }
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={e => this.inputChange(e)}
          />
          <button onClick={() => this.addTodoList()}>添加到todoList</button>
        </div>
        <Going
          todoList={todoList}
          onDelete={this.deleteTodoList}
          onCheck={this.checkItem}
        />
        <Done doneList={doneList} />
      </div>
    );
  }
}

export default App;
