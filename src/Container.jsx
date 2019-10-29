import React, { Component } from 'react';
import ZingChart from './ZingChart.jsx';

class Container extends Component {
  constructor(props) {
    super(props);
    this.changeConfig = this.changeConfig.bind(this)    
    this.handleAction= this.handleAction.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.mouseOver = this.mouseOver.bind(this);

    this.state = {
      config: {
        type: 'line',
        series: [{
          values: [4,5,3,4,5,3,5,4,11]
        }]
      }
    };
    
    this.chart = React.createRef();
  }
  handleAction() {
    this.chart.current.addplot({
      graphid: 0,
      plotindex: 1,
      data: {
        values: [10, 20, 15],
        text: "My new plot"
      }
    });
  }

  mouseOver(e) {
    console.log(e);
  }
  handleComplete() {
    console.log('complete')
  }

  changeConfig() {
    this.setState({
      config: {
        type: 'bar',
        series: [{
          values: [4,5,3,4,5,3,5,4,11]
        }]
      }
    });
  }

  render() {
    return (
      <div >
        {JSON.stringify(this.state.config)}
        <ZingChart ref={this.chart} data={this.state.config} complete={this.handleComplete} node_mouseover={this.mouseOver}/>
        <button onClick={this.handleAction}>Handle Click</button>
        <button onClick={this.changeConfig}>Change Config</button>
      </div>
    );
  }
}

export default Container