import { Button, Card, Text, Tip } from "grommet";
import Wheel from "@uiw/react-color-wheel";
import React, { Component, useState } from "react";


function LightStats(props) {

  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
  return (
      <Card margin="xlarge" width="medium" align="center">
        <Text>Name: {props.selectedLight.name}</Text>
        <Text>Status: {props.selectedLight.state.on ? "On" : "Off"}</Text>
    <Wheel
      hsva={hsva}
      onChange={(color) => {
        setHsva({ ...hsva, ...color.hsva });
      }}
    />
      </Card>
  );
}


/*
export default class LightStats extends Component {
  constructor(props) {
		super(props);
		console.log(this.props.selectedLight);
		
		this.state = {
			hsva: {h: 0, s: 0, v: 68, a: 1}
		}
	}


  render() {
    return (
      <Card margin="xlarge" width="medium" align="center">
        <Text>Name: {this.props.selectedLight.name}</Text>
        <Text>Status: {this.props.selectedLight.state.on ? "On" : "Off"}</Text>
				<Wheel 
					hasva={this.state.hsva}
					onChange={(color) => {
						this.setState({hsva: color})
					}}
				/>
      </Card>
    );
  }
}
*/


export default LightStats;