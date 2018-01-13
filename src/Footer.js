import React from 'react';

export class Footer extends React.Component {
    render() {
      let itemsChecked = this.props.items.map((item) => {
        return item.checked 
      });
  
      const someChecked = (itemsChecked.length && itemsChecked.some((i) => i));
  
      let displayClearCompleted = {
        display: someChecked ? 'block': 'none'
      }
  
      return (
        <footer className="footer" >
          <span className="todo-count">
            <strong>{this.props.items.length}</strong>
            {this.props.items.length === 1 ? ' item' : ' items'} left
          </span> 
          <button 
            className="clear-completed" 
            style={ displayClearCompleted } 
            onClick={this.props.clearCompleted}>
            Clear completed
          </button>
        </footer>
      )  
    }
  }