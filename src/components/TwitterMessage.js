import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      twMessage: '',
    };
  }

  updateMessage = event => {
    this.setState({
      twMessage: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.twMessage} onChange={this.updateMessage}/>
        <p>{this.props.maxChars - this.state.twMessage.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;

TwitterMessage.defaltProps = {
  maxChars: 140,
}
