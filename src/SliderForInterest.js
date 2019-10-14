import React from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'

class SliderForInterest extends React.Component {

    constructor(props) {
        super(props);
     
        this.state = { value: 5 };
      }
    render() {
        return (
            <div className="App">
                <InputRange
                 maxValue={10}
                 minValue={2}
                 value={this.state.value}
                 onChange={value => this.setState({ value })} />
                 
            </div>
        )
    }
}

export default SliderForInterest