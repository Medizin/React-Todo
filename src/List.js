import React from 'react';

export class List extends React.Component {
    render() {
      return (
        <ul className="todo-list">
          {this.props.items.map(item => (
            <li key={item.id}>
              <div className="view">
                <input 
                  className="toggle" 
                  type="checkbox" 
                  name={item.id} 
                  checked={item.checked} 
                  onChange={() => {this.props.toggleCompleted(item.id)}} />
                <label >{item.text}</label>
                <button className="destroy" onClick={() => {this.props.handleDelete(item.id)}}></button>
              </div>
            </li>
          ))}
        </ul>
      );
    }
  }  