var zingchart = require('zingchart');

var Core = React.createClass({
    render : function(){
        return (
            <div id={this.props.id}></div>
        );
    },
    //Called after the render function.
    componentDidMount : function(){
        zingchart.render({
            id : this.props.id,
            width: (this.props.width || 600),
            height: (this.props.height || 400),
            data : this.props.data,
            defaults : (this.props.theme) ? themes[this.props.theme] : null
        });
    },
    //Used to check the values being passed in to avoid unnecessary changes.
    shouldComponentUpdate : function(nextProps, nextState){
        //Lazy object comparison
        return !(JSON.stringify(nextProps.data) === JSON.stringify(this.props.data)) ;
    },
    componentWillUpdate : function(nextProps){
        zingchart.exec(this.props.id, 'setdata', {
            data : nextProps.data
        })
    }
});

var Line = React.createClass({
    render : function(){
        var myConfig = {
            type: "line",
        	series : this.props.series
        };
        applyAttrs(this.props, myConfig, this.props.theme);
        return (<Core id={this.props.id} height={this.props.height} width={this.props.width} data={myConfig} theme={this.props.theme}/>);
    }
});

var Area = React.createClass({
    render : function(){
        var myConfig = {
            type: "area",
        	series : this.props.series
        };
        applyAttrs(this.props, myConfig, this.props.theme);
        return (<Core id={this.props.id} height={this.props.height} width={this.props.width} data={myConfig} theme={this.props.theme}/>);
    }
});

var Bar = React.createClass({
    render : function(){
        var myConfig = {
            type: "bar",
        	series : this.props.series
        };
        applyAttrs(this.props, myConfig, this.props.theme);
        return (<Core id={this.props.id} height={this.props.height} width={this.props.width} data={myConfig} theme={this.props.theme}/>);
    }
});

var Scatter = React.createClass({
    render : function(){
        var myConfig = {
            type: "scatter",
        	series : this.props.series
        };
        applyAttrs(this.props, myConfig, this.props.theme);
        return (<Core id={this.props.id} height={this.props.height} width={this.props.width} data={myConfig} theme={this.props.theme}/>);
    }
});

var Pie = React.createClass({
    render : function(){
        var myConfig = {
            type: "pie",
        	series : this.props.series
        };
        applyAttrs(this.props, myConfig, this.props.theme);
        return (<Core id={this.props.id} height={this.props.height} width={this.props.width} data={myConfig} theme={this.props.theme}/>);
    }
});

function applyAttrs(oProps, oConfig, sTheme){
    if(oProps.legend && oProps.legend.toLowerCase() == "true"){
        oConfig.plotarea = oConfig.plotarea || {};
        oConfig.plotarea.marginRight = "150px";
        oConfig.legend = {
            maxItems : "4",
            overflow : "page"
        };
        //Temporary fix for zingchart defaults bug.
        switch(sTheme){
            case 'dark' :
            case 'slate' :
                oConfig.legend.pageOn = { backgroundColor : "#FFF" };
                oConfig.legend.pageOff = { backgroundColor : "#FFF" };
                oConfig.legend.pageStatus = { fontColor : "#FFF" };
            break;
            case 'light' :
                oConfig.legend.pageOn = { backgroundColor : "#000" };
                oConfig.legend.pageOff = { backgroundColor : "#000" };
                oConfig.legend.pageStatus = { fontColor : "#000" };
            break;
        }
    }
    if(oProps.title){
        oConfig.title = {
            text : oProps.title
        }
    }
}
module.exports = {
    core : Core,
    line : Line,
    area : Area,
    bar : Bar,
    pie : Pie,
    scatter : Scatter
};
