import React from 'react';
import ReactDOM from 'react-dom';

class SliderForMonths extends React.Component {

    constructor(props) {
        super(props);
     
        this.state = { value: 24 };
      }
    render() {
        return (
            <div className="App">
                <InputRange
                 maxValue={24}
                 minValue={6}
                 value={this.state.value}
                 onChange={value => this.setState({ value })} />
                 
            </div>
        )
    }
}

export default SliderForMonths