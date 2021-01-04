import React from "react";

import "./App.css";
import RoundedButton from "./components/RoundedButton";
import { Buttons, TrigButtons } from "./constants/Buttons";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      expression: [],
      operation: [],
      toggle: false,
      result: "",
      prevResult: "",
    };
  }

  handleButtonPress = (name, type, slug) => {
    //console.log("handleButtonPress() - name -", name, ", type -", type);
    // eg. 1+2
    // operations : ['1', '+', '2']
    // experessions : ['1', '+', '2']
    const { operation, expression } = this.state;
    const clickedButton = Buttons.filter((item) => item.slug === slug)[0];

    // for non AC and DEL buttons
    if (clickedButton.slug !== "reset" && clickedButton.slug !== "del") {
      // button (=)
      if (expression[expression.length - 1] === "=") {
        // if equals is pressed when null input
        if (operation.length !== 0) {
          let temp = expression;
          temp.pop();
          this.setState({
            expression: temp,
            result: "",
          });
        }
      }
      this.setState({
        operation: [...operation, clickedButton.formula],
        expression: [...expression, expression[0] !== "=" && name],
      });
    }

    if (clickedButton.slug === "reset") {
      this.setState({
        operation: [],
        expression: [],
        result: "",
      });
    }

    if (clickedButton.slug === "equals") {
      const res = eval(operation.join(""));
      this.setState({
        result: res,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="display">
          {this.state.value}
          <div className="expression">
            {this.state.expression.join("") &&
              "Exp: " + this.state.expression.join("") + this.state.result}
          </div>
        </div>
        <div className="button">
          {Buttons.sort((a, b) => a.order - b.order).map((item, index) => {
            return (
              <RoundedButton
                key={index}
                slug={item.slug}
                onPress={this.handleButtonPress}
                name={item.name}
                type={item.type}
              />
            );
          })}
        </div>

        <div
          className={"background " + (this.state.toggle ? " show" : " hide")}
        >
          <ul>
            {TrigButtons.map((item, index) => {
              return (
                <li key={index}>
                  <RoundedButton
                    key={index}
                    onPress={this.handleButtonPress}
                    name={item.name}
                    type={item.type}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="bot">
          <button
            className="buttons"
            onClick={() => this.setState({ toggle: !this.state.toggle })}
          >
            Toggle
          </button>
        </div>
      </div>
    );
  }
}

export default App;
