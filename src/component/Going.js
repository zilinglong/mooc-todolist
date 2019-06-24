import React, { Component } from 'react';
class Going extends Component {
  deleteTodoList(idx) {
    this.props.onDelete(idx);
  }
  check(idx) {
    this.props.onCheck(idx);
  }
  render() {
    const { todoList } = this.props;
    return (
      <div>
        正在进行：
        <ul>
          {todoList.map((item, idx) => (
            <li key={idx}>
              <input type="checkbox" onChange={() => this.check(idx)} />
              {item}
              <span
                style={{ marginLeft: '10px' }}
                onClick={() => this.deleteTodoList(idx)}
              >
                删除
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Going;
