// Definitions Info: https://templecoding.com/blog/2016/03/31/creating-typescript-typings-for-existing-react-components

// allow the use of the ZingChart default library and
// its global variable 'zingchart'
declare module 'zingchart/es6';

// define the zingchart-react wrapper definition
declare module 'zingchart-react' {
  // import React for reference
  import * as React from 'react';
  // import the component
  import ZingChart from 'zingchart-react';

  // define interface for props
  interface ZingChartReactProps {
    data?: Object;
    id?: String;
    series?: Array<Object>;
    width?: String | Number;
    height?: String | Number;
    theme?: Object;
    output?: String; 
  }

  class ZingChart extends React.Component<ZingChartReactProps, any> {}

  export default ZingChart;
}
