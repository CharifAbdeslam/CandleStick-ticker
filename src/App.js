import React, { Component } from 'react';
import Chart from './chart';
import { getData } from "./utils"
class App extends Component {


    componentDidMount() {
		getData().then(data => {
			this.setState({data},()=>{
				console.log(this.state.data)
			})
		})
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (

	 <Chart  data={this.state.data} />

		)
	}

}
export default App;
