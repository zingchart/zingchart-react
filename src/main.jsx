import {zingchart} from 'zingchart';
import React, { Component } from 'react';
import {DEFAULT_WIDTH, DEFAULT_HEIGHT, EVENT_NAMES, METHOD_NAMES} from './constants.js';

// One time setup globally to handle all zingchart-vue objects in the app space.
if (!window.ZCReact) {
    window.ZCReact = {
        instances: {},
        count: 0
    };
}

class ZingChart extends Component{
    constructor(props) {
        super(props);
        this.id = this.props.id || 'zingchart-react-' + window.ZCReact.count++;

        // Bind all methods available to zingchart to be accessed via Refs.
        METHOD_NAMES.forEach(name => {
            this[name] = args => {
                return window.zingchart.exec(this.id, name, args);
            };
        });
    }
    render() {
        return (
            <div id={this.id}></div>
        );
    }
    // Called after the render function.
    componentDidMount() {
        this.renderChart();

        // Bind all events registered.
        Object.keys(this.props).forEach(eventName => {
            if (EVENT_NAMES.includes(eventName)) {
              // Filter through the provided events list, then register it to zingchart.
              window.zingchart.bind(this.id, eventName, result => {
                this.props[eventName](result);
              });
            }
          });

    }
    //Used to check the values being passed in to avoid unnecessary changes.
    shouldComponentUpdate(nextProps) {
        // Data change
        if(JSON.stringify(nextProps.data) !== JSON.stringify(this.props.data)) {
            zingchart.exec(this.id, 'setdata', {
                data: nextProps.data,
              });
        // Series change
        } else if(JSON.stringify(nextProps.series) !== JSON.stringify(this.props.series)) {
            zingchart.exec(this.id, 'setseriesdata', {
                data: this.props.series,
              });
        // Resize
        } else if(nextProps.width !== this.props.width || nextProps.height !== this.props.height) {
            zingchart.exec(this.id, 'resize', {
                width: this.props.width || DEFAULT_WIDTH,
                height: this.props.height || DEFAULT_HEIGHT,
            });
        }
        // React should never re-render since ZingChart controls this component.
        return false;
    }

    renderChart() {
        const renderObject = {
            id: this.id,
            width: this.props.width || DEFAULT_WIDTH,
            height: this.props.height || DEFAULT_HEIGHT,
            data: this.props.data,
        };
        if(this.props.series) {
            renderObject.data.series = this.props.series;
        }
        if(this.props.theme) {
            renderObject.defaults = this.props.theme;
          }
        zingchart.render(renderObject);
    }
    resizeChart() {
        zingchart.exec(this.id, 'resize', {
            width: this.props.width || DEFAULT_WIDTH,
            height: this.props.height || DEFAULT_HEIGHT,     
        })
    }
    refreshChart() {
        zingchart.exec(this.id, 'setdata', {
            data: this.props.data,
        })
    }
    componentWillUnmount(){
        zingchart.exec(this.id, 'destroy');
    }
};

export {
    ZingChart
};
