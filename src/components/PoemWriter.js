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
      if( poemText ) {
        this.setState({
          poemText: poemText,
          isValid: this.checkIfValidPoem( poemText ),
        });
      }

  }

  checkIfValidPoem( poemText ) {
    // Poem has three lines
    // first line has five words
    // Second line has three words
    // Third line has five words
    const poemLines = poemText.split(/\r\n|\r|\n/);

    //console.log( "Line1: " + poemLines[0] + "Length: " + poemLines[0].trim().split(" ").length);
    //console.log( "Line2: " + poemLines[1] + "Length: " + poemLines[1].trim().split(" ").length);
    //console.log( "Line3: " + poemLines[2] + "Length: " + poemLines[2].trim().split(" ").length);

    if( this.checkLineCount( poemText ) == 3 ) {

      // Check first line
      if( this.checkWordCounts( poemLines ) ) {
        return true;
      }
      else {
        return false;
      }

    }
    else {
      return false;
    }

  }


  checkLineCount( poemText ) {
    return poemText.split(/\r\n|\r|\n/).length;
  }

  checkWordCounts( poemLines ) {
    if( poemLines[0].trim().split(" ").length != 5 || poemLines[1].trim().split(" ").length != 3 || poemLines[2].trim().split(" ").length != 5  )
    {
          return false;
    }
    return true;
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
        {!this.state.isValid ? <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div> : null }
      </div>
    );
  }
}

export default PoemWriter;
