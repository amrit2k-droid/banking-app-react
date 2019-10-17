import React from 'react'
import Sidebar from './Sidebar'

class ShowData extends React.Component {

    /*
    dataArray: takes input value (loan amount) from the slider,
    dataOfMonths: takes no. of months input from 'months' field
    totalData: takes total payable amount at the end of total months for which loan is taken
    pushMonthsData: stores data from dataOfMonths,
    dataOfInterest: stores interest data from 'interest field',
    pushTotalData: stores data from totalData,
    minInterest: minimum value for the interest rate,
    maxInterest: maximum value for the interest rate,
    value: minimum value for months that can be given to 'interest' field
    receivedLoanData: storing the value from Slider 
    */

    constructor(props) {
        super(props);
        this.state = {
            dataArray: [],
            dataOfMonths: [],
            totalData: [],
            pushMonthsData: [],
            dataOfInterest: [],
            pushInterestData: [],
            pushTotalData: [],
            minInterest: 2,
            maxInterest: 10,
            value: 6,
            stmt1: "Loan of $",
            stmt2: "taken for",
            stmt3: "months at an interest of",
            stmt4: "%.Total payable amount is $",
            receivedLoanData: this.props.dataVal
        }
    }

    /*
        This function saves the data to localStorage
    */
    saveToLocalStorage = () => {  
        this.setState({
            receivedLoanData: this.props.dataVal
        })
        this.state.totalData = this.props.dataVal + Number(this.state.dataOfMonths) * Number(this.state.dataOfInterest) / 100;  // calculating total amount payable at the end of interest period
        this.state.dataArray.push(this.props.dataVal);  // pushing the loan amount from loan input slider to dataArray
        this.state.pushMonthsData.push(this.state.dataOfMonths);  // pushing total months from 'months' field to pushMonthsData
        this.state.pushInterestData.push(this.state.dataOfInterest);  // pushing rate of interest from 'interest' field to pushInterestData
        this.state.pushTotalData.push(this.state.totalData);  // pushing total calculated amount to pushTotalData
        
        localStorage.setItem('dataToSave', this.state.dataArray);  // pushing dataArray values to local storage  
        localStorage.setItem('monthsDataToSave', this.state.pushMonthsData);  // pushing pushMonthsData values to local storage
        localStorage.setItem('interestDataToSave', this.state.pushInterestData); // pushing pushInterestData values to local storage
        localStorage.setItem('totalDataToSave', this.state.pushTotalData)  // pushing pushTotalData values to local storage

    }

    /*
        This function is called when there is an onChange event on 'months' field

    */
    setMonths = event => {
        let { value, min, max } = event.target;  // defining value and min, max values that can be  given as input in 'months' field (validation)
        value = Math.max(Number(min), Math.min(Number(max), Number(value))); // if the value is less than 6, 6 is taken as input OR if value is more than 24, 24 is taken as input
        this.setState({
            dataOfMonths: event.target.value,    // taking value of number of months from 'months' field 
            dataOfInterest: Math.floor(Math.random()*(this.state.maxInterest-this.state.minInterest+1)+this.state.minInterest), // generating a random interest value between 2 and 10
            value: value  // updating value in state
           
        })
    }
    /*
        This function takes data from the Child component (Sidebar) to autopopulate in the required fields.
    */
    dataHandler = (loanDataFromChild, monthsDataFromChild, interestDataFromChild) => {
        document.getElementById('usr').value = loanDataFromChild;
        this.setState({
            value: monthsDataFromChild,
            dataOfInterest: interestDataFromChild,
            receivedLoanData: loanDataFromChild
        })
      
    }
    render() {
        let bankingData = (
            <div>
                {this.state.dataArray.map((loanData,index) => {
                    const monthsData = this.state.pushMonthsData[index];
                    const interestData = this.state.pushInterestData[index];
                    const totalData = this.state.pushTotalData[index]
                    return <Sidebar  
                    loanData={loanData} 
                    monthsData={monthsData} 
                    interestData={interestData} 
                    totalData={totalData}
                    stmt1={this.state.stmt1}
                    stmt2={this.state.stmt2}
                    stmt3={this.state.stmt3}
                    stmt4={this.state.stmt4} 
                    transferData={this.dataHandler}
                    transferLoanData={this.loanDataHandler}
                   />
                })}    
            </div>
        )
        
       
        
        return (
            <div className="App">
                <b>Loan Amount </b>: <input type="text"  value={this.state.receivedLoanData} placeholder="amr" className="form-control" id="usr" required/>
                <b>Months</b>: <input type="number" value={this.state.value} onChange={event => this.setMonths(event)}  className="form-control" id="pwd" min="6" max="24" />
                <br />
                <b>Interest Rate</b>: <span><input type="text" value={this.state.dataOfInterest}  className="interest"/></span>
                <br />
                <br />
                <button type="button" onClick={this.saveToLocalStorage} className="btn">Save Data</button>
                <br />
                <br />
                <h2 className="total">Total ${this.state.receivedLoanData + Number(this.state.dataOfMonths) * Number(this.state.dataOfInterest) / 100 }</h2>
                {bankingData}
                
            </div>
        )
    }
}
export default ShowData
