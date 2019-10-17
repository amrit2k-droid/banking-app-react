import React from 'react'
import './StyleSidebar.css'

class Sidebar extends React.Component{

    constructor(props) {
        super(props);
        this.sendDataToParent = this.sendDataToParent.bind(this);
    }
    /*
        This function transfers data from Sidebar to ShowSliderData
    */
    sendDataToParent = () => {
        this.props.transferData(this.props.loanData, this.props.monthsData, this.props.interestData);
    }
    render() {

            return (
                <div className="contents">
                <table>
                    <tr onClick={this.sendDataToParent}>
                        <td>{this.props.stmt1}</td>
                        <td>{this.props.loanData}&nbsp;</td>
                        <td>{this.props.stmt2}&nbsp;</td>
                        <td>{this.props.monthsData}</td>
                        <td>{this.props.stmt3}&nbsp;</td>
                        <td>{this.props.interestData}</td>
                        <td>{this.props.stmt4}</td>
                        <td>{this.props.totalData}</td>
                    </tr>
                </table>
                </div>
            )
        }
    }

export default Sidebar
