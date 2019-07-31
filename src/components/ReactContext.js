import React, { Component } from 'react';
import PropTypes from 'prop-types';

let messages = [1, 2, 3];

class Container extends Component {
  getChildContext() {
    return {
      color: 'red'
    };
  }
  render() {
    return <MessageList messages={messages}></MessageList>;
  }
}
Container.childContextTypes = {
  color: PropTypes.string
};

class MessageList extends Component {
  render() {
    return (
      <ul>
        {this.props.messages.map((message, index) => (
          <Message key={index} message={message}></Message>
        ))}
      </ul>
    );
  }
}

class Message extends Component {
  render() {
    return <li style={{ color: this.context.color }}>{this.props.message}</li>;
  }
}
Message.contextTypes = {
  color: PropTypes.string
};

export default class ReactContext extends Component {
  render() {
    return (
      <div>
        <Container />
      </div>
    );
  }
}
