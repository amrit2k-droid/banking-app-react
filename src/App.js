import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import ShowSliderData from './ShowSliderData'


 
class App extends React.Component {

  //defining the default value of the input slider
  state = { 
    value: 500,
  };

  render() {
    return (
      <div className="sliderInfoDiv">
        <h1 className="heading">LOAN SYSTEM</h1>
        <br />
         <p className="sliderInfo">Use Slider to set new loan amount.</p>

         {/* Input Slider for loan amount */}
         <InputRange
          maxValue={5000}
          minValue={500}
          value={this.state.value}
          onChange={value => this.setState({value})} className="slider" />

          <ShowSliderData dataVal={this.state.value} />

          
      </div>
    );
  }
}

export default App

