import React, { Component } from 'react';
import Chart from './chart';
import { getData} from "./utils"
class App extends Component {
  constuctor(){

      this.State={
        rmi:[]
      }

  }
tickers(){
  getData().then(data => {
      this.setState({data},()=>{
      console.log(this.state.data)
    })
  })
}
componentDidMount() {
    this.tickers()
   setInterval(()=>{
     this.tickers()
   },100000000000000000000)
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
<div className="container chartContainer">
  <Chart  data={this.state.data} />
</div>
		)
	}

}
export default App;
