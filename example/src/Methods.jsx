import React, { Component } from 'react';
import ZingChart from 'zingchart-react';

class Methods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        type: 'bar',
        series: [{
          values: [4,5,3,4,5,3,5,4,11]
        }]
      }
    };
    this.chart = React.createRef();
    this.addPlot = this.addPlot.bind(this);

  }
  render() {
    return (
      <div>
        <ZingChart ref={this.chart} data={this.state.config}/>
        <button onClick={this.addPlot}>AddPlot</button>
      </div>
    );
  }
  addPlot() {
    this.chart.current.addplot({
      data: {
        values: randomData(10),
        text: "My new plot"
      }
    });
  }
}

// Random numbers from 0-100
function randomData(count) {
  return Array.from(new Array(count)).map(() => {
    return Math.floor(Math.random() * 10);
  });
}

export default Methods;