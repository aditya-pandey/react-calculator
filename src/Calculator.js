import React from "react";
import Button from "./Button";
import UpperDisplay from "./UpperDisplay";
import BottomDisplay from "./BottomDisplay";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upperDisplay: "",
      bottomDisplay: "0",
      expression: [],
      decAllowed: true,
      solved: false,
    };
    this.clearAll = this.clearAll.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.solver = this.solver.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.maxDigitWarning = this.maxDigitWarning.bind(this);
  }
  clearAll() {
    this.setState({
      upperDisplay: "",
      bottomDisplay: "0",
      decAllowed: true,
      solved: false,
    });
  }
  maxDigitWarning() {
    this.setState({
      bottomDisplay: "Digit Limit Met",
      upperDisplay: this.state.bottomDisplay,
    });
    setTimeout(
      () => this.setState({ bottomDisplay: this.state.upperDisplay }),
      1000
    );
  }

  handleOperator(event) {
    if (!this.state.bottomDisplay.includes("Limit")) {
      const val = event.target.textContent;
      let main = this.state.upperDisplay.replace("x", "*").replace("÷", "/");
      let end = main.charAt(main.length - 1);
      let second = main.charAt(main.length - 2);
      if (val === end) {
        console.log("trying...");
      } else if (["+", "-", "*", "/"].includes(end)) {
        // 8+- +,*,/
        if (val === "-") {
          if (!["+", "-", "*", "/"].includes(second)) {
            this.setState({ upperDisplay: main + val });
          }
        } else if (end !== "-") {
          this.setState({ upperDisplay: main.replace(end, val) });
        } else {
          this.setState({
            upperDisplay: main.replace(/\+|\-|\*|\//g, "") + val,
          });
        }
      } else if (this.state.solved) {
        this.setState({
          upperDisplay: this.state.bottomDisplay + val,
          bottomDisplay: val,
          decAllowed: true,
          solved: false,
        });
      } else {
        this.setState({
          upperDisplay: main + val,
          bottomDisplay: val,
          decAllowed: true,
        });
      }
    }
  }
  handleNumber(event) {
    if (!this.state.bottomDisplay.includes("Limit")) {
      if (this.state.upperDisplay === "0") {
        this.setState({
          upperDisplay: this.state.upperDisplay.replace(
            "0",
            event.target.textContent
          ),
        });
      } else if (this.state.bottomDisplay.length > 21) {
        this.maxDigitWarning();
      } else if (this.state.solved) {
        this.setState({
          upperDisplay: event.target.textContent,
          bottomDisplay: event.target.textContent,
          solved: false,
        });
      } else {
        this.state.bottomDisplay === "0" ||
        this.state.bottomDisplay
          .toString()
          .split("")
          .some((k) => ["+", "-", "*", "/"].includes(k))
          ? this.setState({
              upperDisplay: this.state.upperDisplay + event.target.textContent,
              bottomDisplay: event.target.textContent,
              solved: false,
            })
          : this.setState({
              upperDisplay: this.state.upperDisplay + event.target.textContent,
              bottomDisplay:
                this.state.bottomDisplay + event.target.textContent,
              solved: false,
            });
      }
    }
  }
  solver() {
    if (!this.state.bottomDisplay.includes("Limit")) {
      var t = this.state.upperDisplay.replace("x", "*").replace("÷", "/");
      if (!this.state.solved) {
        if (
          /[+*-/]$/.test(this.state.upperDisplay) ||
          /^[+*\-/]/.test(this.state.upperDisplay)
        ) {
          this.setState({
            upperDisplay: t.replace(/\+|\-|\*|\//g, ""),
            solved: true,
          });
        } else {
          this.setState({
            upperDisplay:
              t.replace("*", "x").replace("/", "÷") + "\n= " + eval(t),
            // eslint-disable-next-line
            bottomDisplay: eval(t).toString(),
            decAllowed: true,
            solved: true,
          });
        }
      }
    }
  }
  handleDecimal(event) {
    if (!this.state.bottomDisplay.includes("Limit")) {
      if (this.state.solved) {
        this.setState({
          upperDisplay: "0.",
          bottomDisplay: "0.",
          solved: false,
        });
      } else {
        if (this.state.decAllowed) {
          this.setState({
            upperDisplay: this.state.upperDisplay + event.target.textContent,
            bottomDisplay: this.state.bottomDisplay + event.target.textContent,
            decAllowed: false,
            solved: false,
          });
        }
      }
    }
  }
  render() {
    return (
      <div className="container">
        <UpperDisplay upperDisplay={this.state.upperDisplay} />
        <BottomDisplay bottomDisplay={this.state.bottomDisplay} />
        <Button
          clear={this.clearAll}
          operatorInput={(event) => this.handleOperator(event)}
          numberInput={(event) => this.handleNumber(event)}
          solve={this.solver}
          decimal={(event) => this.handleDecimal(event)}
        />
      </div>
    );
  }
}
export default Calculator;
