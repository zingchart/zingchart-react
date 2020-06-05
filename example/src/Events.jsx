import React, { Component } from 'react';
import 'zingchart/es6';
import ZingChart from 'zingchart-react';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: '',
      config: {
        type: 'line',
        series: [{
          values: [4,5,3,4,5,3,5,4,11]
        }]
      }
    }
    this.chart = React.createRef();
    this.chartDone = this.chartDone.bind(this);
    this.nodeInfo = this.nodeInfo.bind(this);
  }
  render() {
    const listOfEventListeners = ['complete', 'node_mouseover']

    const events = Array.from(listOfEventListeners.entries()).map(([index, value]) => {
      return <li key={index}>{value}</li>;
    });

    return (
      <div>
        <ZingChart ref={this.chart} data={this.state.config} complete={this.chartDone} node_mouseover={this.nodeInfo}/>
        <h2>Output from events</h2>
        <h3>Events bound:</h3>
        <ul>{events}</ul>
        <pre>{this.state.output}</pre>
      </div>
    );
  }
  chartDone() {
    this.setState({
      output: `Event "Complete" - The chart is rendered\n`,
    });
  }

  nodeInfo(result) {
    delete result.ev;
    this.setState({
      output:  `Node Info \n` + JSON.stringify(result) + "\n"
    });
  }

}

export default Events;