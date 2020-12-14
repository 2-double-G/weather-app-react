import React, { Component } from "react";
import { connect } from "react-redux";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { checkCity } from './../../store/actions/city';

class GetWeather extends Component {
  state = {
    isFormValid: false,
    isTouched: false,
    inputControl: {
      value: "",
      label: "City",
      errorMessage: "Enter the city name correctly",
      valid: false,
      touched: false,
      validation: {
        minLength: 1,
        required: true,
      },
    },
  };

  validation(value, validation) {
    if (!validation) return true;

    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }

    return isValid;
  }

  onFormSubmit = (event) => {
    event.preventDefault();
  };

  handleInputChange = (event) => {
    const inputControl = { ...this.state.inputControl };

    inputControl.value = event.target.value;
    inputControl.touched = true;
    inputControl.valid = this.validation(
      inputControl.value,
      inputControl.validation
    );

    const isFormValid = inputControl.valid;

    this.setState({
      isFormValid,
      inputControl,
    });
  };

  getWeather = () => {
    const { checkCity } = this.props;
    const { value } = this.state.inputControl;

    checkCity(value);
  };

  render() {
    const inputValid = !this.state.inputControl.valid && this.state.inputControl.touched;   
    const disabled = this.props.loading || !this.state.isFormValid;

    return (
      <div>
        <Form onSubmit={this.onFormSubmit}>
          <InputGroup className="mb-0">
            <FormControl
              placeholder="Enter city name"
              aria-label="Enter city name"
              aria-describedby="basic-addon2"
              onChange={this.handleInputChange}
              isInvalid={inputValid}
            />
            <InputGroup.Append>
              <Button
                variant="success"
                onClick={this.getWeather}
                disabled={disabled}
              >
                Get weather
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.city.loading
  };
}

const mapDispatchToProps = dispatch => {
  return {
    checkCity: (city) => dispatch(checkCity(city)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GetWeather);
