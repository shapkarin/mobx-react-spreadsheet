import React from "react";

export default class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /*value for <input/> changes... */
      value: props.value,
      editing: false
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextState.value !== this.state.value ||
      nextState.editing !== this.state.editing ||
      nextProps.value !== this.props.value
    ) {
      return true;
    }

    return false;
  }

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  onKeyPressOnInput = e => {
    if (e.key === "Enter") {
      this.setNewValue(e.target.value, this.props.field);
    }
  };

  onBlur = e => {
    this.setNewValue(e.target.value, this.props.field);
  };

  setNewValue = (value, field) => {
    this.props.editCell(value, field);
    this.setState({ editing: false });
  };

  onDoubleClick = (e, field) => {
    if (this.props.booleanFields.indexOf(field) !== -1) {
      this.props.editCell(!this.props.value, field);
      return;
    }
    this.setState({ editing: true });
  };

  render() {
    const { editing } = this.state;
    const { field, value } = this.props;

    if (editing) {
      return (
        <td className={`Table_Cell Table_Cell__${field}`}>
          <input
            className="Table_Input"
            type="text"
            onBlur={this.onBlur}
            onKeyPress={this.onKeyPressOnInput}
            value={this.state.value}
            onChange={this.onChange}
            autoFocus
          />
        </td>
      );
    }
    return (
      <td
        onDoubleClick={e => this.onDoubleClick(e, field)}
        className={`Table_Cell Table_Cell__${field}`}
      >
        {value}
      </td>
    );
  }
}
