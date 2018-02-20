import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data : []
    }
  }
  componentDidMount(){
    axios.get('https://api.bitfinex.com/v2/candles/trade:1m:tBTCUSD/hist')
         .then(response=> {
           this.setState({data:response.data})
       }).then(()=>{
         console.log(this.state.data)
       })

  }
  render() {
    return (
      <div className="container text-center">
      </div>
    );
  }
}
export default App;
