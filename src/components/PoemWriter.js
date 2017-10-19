import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poemText: '',
      isValid: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange( event ) {

      let poemText = event.target.value;

      this.setState({
        poemText: event.target.value,
        isValid: this.checkIfValidPoem( poemText )
      });

  }

  checkLineCount( poemText ) {
    return poemText.split(/\r\n|\r|\n/).length;
  }

  checkIfValidPoem( poemText ) {
    // Poem has three lines
    // first line has five words
    // Second line has three words
    // Third line has five words

    if( checkLineCount( poemText ) == 3 ) {

      // Check first line
//      if( checkWordCount == 5 )

    }
    else {
      return false;
    }

    return true;
  }

  checkWordCount( poemLine ) {

  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.poemText}
          onChange={this.handleInputChange}
        />
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>
      </div>
    );
  }
}

export default PoemWriter;
