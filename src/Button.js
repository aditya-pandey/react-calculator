import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div className="pad">
        <button
          onClick={this.props.clear}
          id="clear"
          className="spanned-column"
        >
          AC
        </button>
        <button onClick={this.props.operatorInput} id="divide" className="operator" value="/">
        ÷
        </button>
        <button onClick={this.props.operatorInput} id="multiply" className="operator" value="*">
          x
        </button>
        <button onClick={this.props.numberInput} id="seven">
          7
        </button>
        <button onClick={this.props.numberInput} id="eight">
          8
        </button>
        <button onClick={this.props.numberInput} id="nine">
          9
        </button>
        <button onClick={this.props.operatorInput} id="add" className="operator" value="+">
          +
        </button>
        <button onClick={this.props.numberInput} id="four">
          4
        </button>
        <button onClick={this.props.numberInput} id="five">
          5
        </button>
        <button onClick={this.props.numberInput} id="six">
          6
        </button>
        <button onClick={this.props.operatorInput} id="subtract" className="operator" value="-">
          -
        </button>
        <button onClick={this.props.numberInput} id="one">
          1
        </button>
        <button onClick={this.props.numberInput} id="two">
          2
        </button>
        <button onClick={this.props.numberInput} id="three">
          3
        </button>
        <button id="equals" className="spanned-row" onClick={this.props.solve}>
          =
        </button>

        <button
          onClick={this.props.numberInput}
          id="zero"
          className="spanned-column"
        >
          0
        </button>
        <button id="decimal" onClick={this.props.decimal}>
          .
        </button>
      </div>
    );
  }
}

export default Button;
