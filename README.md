# ZingChart-React

*A React Component for ZingChart*

Quickly create dynamic JavaScript charts that react when your data changes by utilizing the ZingChart library and Facebook's React together. 

More information : http://www.zingchart.com/blog/2015/06/12/zingchart-component-for-react/

## Quick Start

### Install
```
npm install zingchart-react
```

### Usage

This component is dependent upon React and the ZingChart library. The module uses the CommonJS specification and can be included in your application with bundling tools such as browserify and webpack. For more information. 

---

The ZingChart-React Component exposes 2 types of components. 

* The first type allows for full utilization of the library with any chart type.
	* `Core`
* The second type are abstractions of the 5 most popular chart types to get your data charted quickly.
 	* `Line`
 	* `Area`
 	* `Bar`
 	* `Pie`
 	* `Scatter`


### Type 1 - Core Component
The core component is a wrapper around the entire library of ZingChart. At the top level, you define an id of an existing DOM
element for ZingChart to mount to, the optional height and width, and a ZingChart data configuration object. Every time the data object is changed inside your React component, the chart will re-render.

**id** [string] `(required)`

**data** [object] `(required)`

**height** [number] `(optional)` `default : 400`

**width** [number] `(optional)` `default : 600`


```html
<!--HTML-->
<div id="myContainer"></div>
```

```js
//JavaScript
var ZingChart = require('zingchart-react').core;
var myConfig = {
 	type: "bar", 
	series : [
		{
			values : [35,42,67,89,25,34,67,85]
		}
	]
};
React.render(
	<ZingChart id="myChart" height="300" width="600" data={myConfig} />, 
	document.getElementById('myContainer')
);
```
### Type 2 - Line, Area, Bar, Scatter, Pie
> *These components are provided for on-the-fly charting and have a limited subset of library functionality compared to using the core component. They are great for rapid-prototyping and development, but do not provide the immense functionality that the main ZingChart library provides. If you need more functionality, utilize the Type 1 component*

Create charts by simply inserting values directly into a component. Each series object contains a `text` parameter to define what the series values are, and a `values` parameter which takes an array of values formatted to the specific chart being created. Every time the data object is changed inside your React component, the chart will re-render.

**id** [string] `(required)`

**series** [array of objects] `(required)`  - (see below)

* `text` `(optional)`
* `values` `(required)` (see below for values requirements)

**height** [number] `(optional)` `default : 400`

**width** [number] `(optional)` `default : 600`

**legend** [boolean] `(optional)` `default : false`

**title** [string] `(optional)` `default : '' ` 

**theme** [string] `(optional)` `default : none` 

* `light`

![ScreenShot](https://github.com/zingchart/ZingChart-React/blob/assets/assets/light.png)

* `dark`

![ScreenShot](https://github.com/zingchart/ZingChart-React/blob/assets/assets/dark.png)

* `slate`

![ScreenShot](https://github.com/zingchart/ZingChart-React/blob/assets/assets/slate.png)


#### Line, Area, Bar

`series.values` - Takes a single dimensional array of numeric values.`


**Example**

```html
<!--HTML-->
<div id="component1"></div>
<div id="component2"></div>
<div id="component3"></div>
```

```js
//Javascript
var LineChart = require('zingchart-react').line;
var BarChart = require('zingchart-react').bar;
var AreaChart = require('zingchart-react').area;

var myLineValues = [
    { text : "First Series", values : [0,1,2,2,4,6,7] },
    { text : "Second Series", values : [18,12,7,14,1,19,4] },
    { text : "Third Series", values : [0,1,12,12,4,6,17] },
    { text : "Fourth Series", values : [18,22,17,4,1,9,4] },
    { text : "Fifth Series", values : [4,2,7,3,23,7,2] },
    { text : "Sixth Series", values : [10,6,8,2,6,3,9] },
];

var myBarValues = [
    { text : "First Series", values : [0,1,2,2,4,6,7] }
];

var myAreaValues = [
    { text : "First Series", values : [0,1,2,2,4,6,7] },
    { text : "Second Series", values : [18,12,7,14,1,19,4] },
    { text : "Third Series", values : [0,1,12,12,4,6,17] },
    { text : "Fourth Series", values : [18,22,17,4,1,9,4] },
];

React.render(
<LineChart id="chart1" height="300" width="600" series={myLineValues} legend="true" theme="light" title="Hello Line Chart"/>, 
document.getElementById('component1'));

React.render(
<BarChart id="chart2" height="300" width="600" series={myBarValues} legend="true" theme="dark" title="Hello Bar Chart"/>, 
document.getElementById('component2'));

React.render(
<AreaChart id="chart3" height="300" width="600" series={myAreaValues} legend="true" theme="slate" title="Hello Area Chart"/>, 
document.getElementById('component3'));
```

#### Scatter

`series.values` - Takes a multi-dimensional array of numeric values. Each array pair consists of an x & y value.


```html
<!--HTML-->
<div id="component1"></div>
```

```js
//Javascript
var ScatterChart = require('zingchart-react').scatter;
var myScatterValues = [
    { text : "First Series", values : [ [5,2], [8,1], [2,6], [9,1] ] },
    { text : "Second Series", values : [ [8,3], [2,8], [6,9], [3,5] ] },
    { text : "Third Series", values : [ [18,3], [22,8], [16,9], [13,5] ] },
    { text : "Fourth Series", values : [ [18,3], [12,8], [26,9], [32,5] ] },
];

React.render(
<ScatterChart id="chart1" height="300" width="600" series={myScatterValues} legend="true" theme="light" title="Hello Scatter Chart"/>, 
document.getElementById('component1'));
```

#### Pie

`series.values` - Takes a single-dimensional array of a single value representing each pie slice.

```html
<!--HTML-->
<div id="component1"></div>
```

```js
//Javascript
var PieChart = require('zingchart-react').pie;
var pieSlices = [
    { text : "First Slice", values : [10] },
    { text : "Second Slice", values : [20] },
    { text : "Third Slice", values : [30] },
    { text : "Fourth Slice", values : [40] }
];

React.render(
<PieChart id="chart1" height="300" width="600" series={pieSlices} legend="true" theme="light" title="Hello Pie Chart"/>, 
document.getElementById('component1'));
```

## Build

This component uses gulp to transform React JSX files and combine the rest of the JavaScript files into one single file.

###Usage

`gulp dev` - Builds the unminified version as /dist/zingchart-react.js

`gulp prod` - Builds the minified version as /dist/zingchart-react.min.js

This build tool **does not** require all dependent libraries (ZingChart and React) in the production file. It allows the user to use any bundling tool they choose such as browserify or webpack.
