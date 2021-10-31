import { Button, Form, FormField, Grid, TextInput } from "grommet";
import React, { Component } from "react";
import LightStats from "./LightStats";

export default class HueForm extends Component {
  constructor(props) {
    super(props);
	}

  render() {
		let cardSelected = true
    return (
      <Form alignContent="center">
        <FormField margin="medium" background="light-6">
          <TextInput placeholder="value" />
        </FormField>
        {this.props.lights.map((light, i) => {
          return (
            <Button
              onClick={(e) => {
                this.props.setSelectedLight(e, light.id);
								this.props.setCard();
							}}
							primary

              label={light["name"]}
            />
          );
        })}
      </Form>
    );
  }
}
