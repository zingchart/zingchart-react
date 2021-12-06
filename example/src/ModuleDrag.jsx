import React, { Component } from 'react';
import 'zingchart/es6';
import ZingChart from 'zingchart-react';
// EXPLICITLY IMPORT ZingChart MODULE
// import chart modules used on that page
import 'zingchart/modules-es6/zingchart-dragging.min.js';

class ModuleDrag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      config: {
        type: 'vbullet',
        title: {
          text: 'Pushups Per Day'
        },
        subtitle: {
          text: 'Bars are draggable'
        },
        plot: {
          valueBox: [
            {
              type: 'all',
              text: '[%node-value / %node-goal-value]',
              color: '#000',
              placement: 'goal'
            }
          ]
        },
        scaleX: {
          labels: ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
        },
        tooltip: {
          borderRadius: '3px',
          borderWidth: '0px',
          fontSize: '14px',
          shadow: true
        },
        series: [
          {
            values: [20, 40, 14, 50, 15, 35, 5],
            dataDragging: true,
            goal: {
              backgroundColor: '#64b5f6',
              borderWidth: '0px'
            },
            goals: [25, 43, 30, 40, 21, 59, 35],
            rules: [
              {
                backgroundColor: '#81c784',
                rule: '%v >= %g'
              },
              {
                backgroundColor: '#ef5350',
                rule: '%v < %g/2'
              },
              {
                backgroundColor: '#ffca28',
                rule: '%v >= %g/2 && %v < %g'
              }
            ]
          }
        ]
      }
    }
    this.chart = React.createRef();
    this.log = this.log.bind(this);
  }

  log(result) {
    console.log('event: ', result);
    console.log('drag value: ', result['zingchart.plugins.dragging.update.value'])
  }

  render() {
    return (
      <div >
        <ZingChart
          ref={this.chart}
          data={this.state.config}
          height='600px'
          modules='dragging'
          zingchart_plugins_dragging_complete={this.log}/>
      </div>
    );
  }

}

export default ModuleDrag;