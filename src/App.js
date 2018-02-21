import React, { Component } from 'react';
//import Chart from './chart';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data : []
    }
  }
  convertToArrayOfObjects(data) {
      var keys = ["date","open","close","hight","low","volume"],
          i = 0, k = 0,
          obj = null,
          output = [];
      for (i = 0; i < data.length; i++) {
          obj = {};
          for (k = 0; k < keys.length; k++) {
              obj[keys[k]] = data[i][k];
          }
      output.push(obj);
      }
    return output;
  }

getData() {
	const promiseData = fetch("https://api.bitfinex.com/v2/candles/trade:1m:tBTCUSD/hist")
		.then(response => response.json())
	return promiseData;
}

  componentDidMount(){
  this.getData().then( data => {
    this.setState({data:this.convertToArrayOfObjects(data)},()=>{
      console.log(this.state.data)
    })
  })

  }
  render() {
    return (

     <div>
      
     </div>

    );
  }
}
export default App;
