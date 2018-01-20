

// class Calculator extends React.Component{
//   constructor(props){
//     super(props);
//     //your code here
//   }
//
//   //your code here
//
//   render(){
//     return (
//       <div>
//         <h1>Hello World</h1>
//         //your code will replace this
//       </div>
//     );
//   }
// }
//
// export default Calculator;

import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
//
document.addEventListener('DOMContentLoaded', function () {
  let tabDataArray = [{title: 'One', content: 'I am the First'},
                      {title: 'Two', content: 'I am second'},
                      {title: 'Three', content: 'I am third'}];
  ReactDOM.render(
    <div>
      <Clock/>
      <Tabs tabdata= {tabDataArray}/>
    </div>,  document.getElementById('main'));
});
