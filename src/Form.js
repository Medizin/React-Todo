import React from 'react';

export class Form extends React.Component {
    render() {
      let itemsChecked = this.props.items.map((item) => {
        return item.checked 
      });
  
      const checkedAll = (itemsChecked.length && itemsChecked.every((i) => i)); 
  
      return (
        <form onSubmit={this.props.handleSubmit}>
          <input 
            className="toggle-all" 
            id="toggle-all" type="checkbox" 
            checked={checkedAll} 
            onClick={this.props.toggleAllComplete} />
  
          <input 
            onChange={this.props.handleChange}
            value={this.props.text}
            className="new-todo"
            placeholder="What needs to be done?" />
        </form> 
      )
    }
  }