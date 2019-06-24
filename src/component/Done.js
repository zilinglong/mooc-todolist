import React, { Component } from 'react';

class Done extends Component {
  render() {
    let doneList = this.props.doneList;
    return (
      <div>
        已经完成：
        <ul>{doneList.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
      </div>
    );
  }
}

export default Done;
