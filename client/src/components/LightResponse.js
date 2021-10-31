import { Box, Button, Form, FormField, Grid, TextInput } from "grommet";
import React, { Component } from "react";
import Header from "./Header";
import HueForm from "./HueForm";
import LightStats from "./LightStats";
import NavBar from "./NavBar";

export default class LightResponse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lights: [],
      lightNames: [],
      cardVisible: false,
      selectedLight: {},
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080", {
      headers: {
        "access-control-allow-origin": "http://localhost:8080",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        let lightNames = [];
        // Pass the light name and ID to show in the select menu.
        res.forEach((light) =>
          lightNames.push({ id: light["uniqueid"], name: light["name"] })
        );

        this.setState({
          lights: res,
          lightNames: lightNames,
        });
        console.log(this.state.lightNames);
      });
  }

  setSelectedCard = (e, id) => {
    let selectedLight = this.state.lights.filter(
      (light) => light["uniqueid"] == id
		)[0];
    this.setState({ selectedLight: selectedLight });
  };

  showCard = () => {
    this.setState({
      cardVisible: true,
    });
  };

  render() {
    return (
      <Grid
        fill
        rows={["xsmall", "flex"]}
        columns={["small", "flex"]}
        gap="small"
        areas={[
          { name: "header", start: [0, 0], end: [1, 0] },
          { name: "nav", start: [0, 1], end: [0, 1] },
          { name: "main", start: [1, 1], end: [1, 1] },
        ]}
      >
        <Box gridArea="header" background="brand">
          <Header />
        </Box>
        <Box gridArea="nav" background="light-5">
          <NavBar />
        </Box>
        <Box gridArea="main" background="gray" align="center">
          <HueForm
            setCard={this.showCard}
            setSelectedLight={this.setSelectedCard}
            lights={this.state.lightNames}
          />
          {this.state.cardVisible && (
            <LightStats selectedLight={this.state.selectedLight} />
          )}
        </Box>
      </Grid>
    );
  }
}
