import React, { Component } from 'react';
import ZingChart from 'zingchart-react';

class Dynamic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updater: null,
      config: {
        type: 'line',
      },
      series: [{
        values: [4,5,3,4,5,3,5,4,11]
      }]
    }
    this.chart = React.createRef();
  }
  render() {
    return (
      <div>
        <div>{JSON.stringify(this.state.series)}</div>
        <ZingChart ref={this.chart} data={this.state.config} series={this.state.series}/>
      </div>
    );
  }
  componentDidMount() {
    const updater = setInterval(() => {
      console.log(randomData(10));
      this.setState({
        series: {
          values: randomData(10)
        }
      });
    }, 1000);
    

  }
  componentWillUnmount() {
    window.clearInterval(this.state.updater);
  }
}

// Random numbers from 0-100
function randomData(count) {
  return Array.from(new Array(count)).map(() => {
    return Math.floor(Math.random() * 10);
  });
}

export default Dynamic;