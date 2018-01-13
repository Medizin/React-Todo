import React from 'react';
import ReactDOM from 'react-dom';
import {Todo} from './Todo'
import './index.css';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [], 
      text: '',  
      edit: false
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.text.length) return;

    const newItem = {
      text: this.state.text,
      id: Date.now(),
      checked: false
    };

    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: '',
    }));
  }

  handleDelete = (id) => {
    let items = this.state.items.filter((item) => {
      return item.id !== id;
    });
  
    this.setState({
      items: items 
    });
  }

  toggleAllComplete = () => {
    const checkedAll = (itemsChecked.length && itemsChecked.every((i) => i));
    let items = this.state.items;
    let itemsChecked = this.state.items.map((item) => {
      return item.checked 
    });

    items.map((item) => 
      item.checked = !checkedAll
    );

    this.setState({
      items: items
    });
  }

  toggleCompleted = (id) => {
    let items = this.state.items;

    items.forEach((item) => {
      if (item.id === id) {
       item.checked = !item.checked
      }
    });

    this.setState({
      items: items
    });
  }

  clearCompleted = () => {
    let items = this.state.items.filter((item) => {
      return !item.checked
    });
    
    this.setState({
      items: items
    });
  }

  render() {
    return (
      <Todo 
        items={this.state.items}
        text={this.state.text}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleDelete={this.handleDelete}
        toggleCompleted={this.toggleCompleted}
        toggleAllComplete={this.toggleAllComplete}
        clearCompleted={this.clearCompleted}
      />
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));