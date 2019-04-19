import React, { Component, ErrorInfo } from 'react';

export default class PotentialError extends Component {
  state = {
    error: '',
    info: null,
  };

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ error, info });
  }
  render() {
    const { children } = this.props;
    const { error, info } = this.state;
    return (
      <>
        {!error ? (
          children
        ) : (
          <>
            <h1>{error.toString()}</h1>
            <p>{info}</p>
          </>
        )}
      </>
    );
  }
}
