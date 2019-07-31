import React, { Component } from 'react';
import PropTypes from 'prop-types';

let connect = (mapStateToProps, mapDispatchToProps) => __component => {
  class Proxy extends Component {
    constructor() {
      super();
      this.state = {};
    }
    subscribeState = () => {
      this.setState(mapStateToProps(this.context.store.getState()));
    };
    componentWillMount() {
      this.subscribeState();
      this.unsubscribe = this.context.store.subscribe(this.subscribeState);
    }
    componentWillUnmount() {
      this.unsubscribe();
    }
    render() {
      return (
        <__component
          {...this.state}
          {...mapDispatchToProps(this.context.store.dispatch)}
        />
      );
    }
  }
  Proxy.contextTypes = {
    store: PropTypes.object
  };
  return Proxy;
};

export default connect;
