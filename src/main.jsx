import zingchart from 'zingchart';
import React, { Component } from 'react';

export class Core extends Component{
    render() {
        return (
            <div id={this.props.id}></div>
        );
    }
    //Called after the render function.
    componentDidMount(){
        zingchart.render({
            id : this.props.id,
            width: (this.props.width || 600),
            height: (this.props.height || 400),
            data : this.props.data,
            theme : (this.props.theme) ? this.props.theme : "light",
            hideprogresslogo: this.props.hideprogresslogo
        });
    }
    //Used to check the values being passed in to avoid unnecessary changes.
    shouldComponentUpdate(nextProps, nextState){
        //Lazy object comparison
        return !(JSON.stringify(nextProps.data) === JSON.stringify(this.props.data)) ;
    }
    componentWillUpdate(nextProps){
        zingchart.exec(this.props.id, 'setdata', {
            data : nextProps.data
        });
    }
    componentWillUnmount(){
        zingchart.exec(this.props.id, 'destroy');
    }
};

export class Line extends Component{
    render(){
        var myConfig = {
            type: "line",
        	series : this.props.series
        };
        applyAttrs(this.props, myConfig);
        return (<Core id={this.props.id} height={this.props.height} width={this.props.width} data={myConfig} theme={this.props.theme}/>);
    }
};

export class Area extends Component{
    render(){
        var myConfig = {
            type: "area",
        	series : this.props.series
        };
        applyAttrs(this.props, myConfig);
        return (<Core id={this.props.id} height={this.props.height} width={this.props.width} data={myConfig} theme={this.props.theme}/>);
    }
};

export class Bar extends Component{
    render(){
        var myConfig = {
            type: "bar",
        	series : this.props.series
        };
        applyAttrs(this.props, myConfig);
        return (<Core id={this.props.id} height={this.props.height} width={this.props.width} data={myConfig} theme={this.props.theme}/>);
    }
};

export class Scatter extends Component{
    render(){
        var myConfig = {
            type: "scatter",
        	series : this.props.series
        };
        applyAttrs(this.props, myConfig);
        return (<Core id={this.props.id} height={this.props.height} width={this.props.width} data={myConfig} theme={this.props.theme}/>);
    }
};

export class Pie extends Component{
    render(){
        var myConfig = {
            type: "pie",
        	series : this.props.series
        };
        applyAttrs(this.props, myConfig);
        return (<Core id={this.props.id} height={this.props.height} width={this.props.width} data={myConfig} theme={this.props.theme}/>);
    }
};

function applyAttrs(oProps, oConfig){
    if(oProps.legend && oProps.legend.toLowerCase() == "true"){
        oConfig.plotarea = oConfig.plotarea || {};
        oConfig.plotarea.marginRight = "150px";
        oConfig.legend = {
            maxItems : "4",
            overflow : "page"
        };
    }
    if(oProps.title){
        oConfig.title = {
            text : oProps.title
        }
    }
}
