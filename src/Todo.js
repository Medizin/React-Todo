import React from 'react';
import {Form} from './Form';
import {List} from './List';
import {Footer} from './Footer';

export class Todo extends React.Component {
    render() {
      return (
      <div>  
        <section className="todoapp">
          <header className="header">
            <h1>Todo List</h1>
            <Form 
              handleSubmit={this.props.handleSubmit}
              toggleAllComplete={this.props.toggleAllComplete}
              handleChange={this.props.handleChange}
              text={this.props.text}
              items={this.props.items}
            />
          </header>
          <section className="main">
            <List 
              items={this.props.items} 
              handleDelete={this.props.handleDelete} 
              toggleCompleted={this.props.toggleCompleted} 
            />
          </section>
          <Footer 
            items={this.props.items}
            clearCompleted={this.props.clearCompleted}
          />
            </section>   
      </div>
      );
    }
  }