import React, { Component } from 'react';
import 'zingchart/es6';
import ZingChart from 'zingchart-react';

class Simple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        type: 'bar',
        series: [{
          values: [4,5,3,4,5,3,5,4,11]
        }]
      }
    }
    this.chart = React.createRef();
  }
  render() {

    return (
      <div >
        <ZingChart ref={this.chart} data={this.state.config}/>
      </div>
    );

  }

}

export default Simple;