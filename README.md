This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# BANKING APP

In this project I have created a Banking App wherein a user takes loan from  the bank for a certain period of time(in months)
at a particular interest rate. The interest rate is calculated randomly using 'Math' function with range between 2% and 10%.
Moreover, when the user inputs loan amount (from the input slider),  months and interest rate, the total amount payable is calculated.
I store all the relevant data in local storage of  the browser on click of 'Save Data' button 
Adding to the functionality, after clicking the button, if there is an onChange event on input-slider, the previous loan details are displayed.On clicking a particular row, the respective values get autopopulated in the respective fields.

## Extra library used

For the input slider, I imported 'react-input-range' and to add style to it, I have the imported the css file 'react-input-range/lib/css/index.css'

## Installation of extra library used

On Windows, on cmd -> npm install react-input-range

