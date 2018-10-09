import React from 'react';
import { CellProps, CellState } from './types';

// const TD = ({children, onDoubleClick, field}) => (
//   <td
//     className={`Table_Cell Table_Cell__${field}`}
//     {...onDoubleClick}
//   >
//     {children}
//   </td>
// );

export default class Cell extends React.Component<CellProps, CellState> {
  constructor(props: CellProps) {
    super(props);
    this.state = {
      editing: false
    };
  }

  shouldComponentUpdate(nextProps: CellProps, nextState: CellState) {
    if (
      nextState.editing !== this.state.editing ||
      nextProps.value !== this.props.value
    ) {
      return true;
    }

    return false;
  }

  onChange = e => {
    this.props.editCell(e.target.value, this.props.field);
  }

  onKeyPressOnInput = e => {
    if (e.key === 'Enter') {
      this.setNewValue(e.target.value, this.props.field);
    }
  }

  onBlur = e => {
    this.setNewValue(e.target.value, this.props.field);
  }

  setNewValue = (value, field) => {
    this.props.editCell(value, field);
    this.setState({ editing: false });
  }

  onDoubleClick = (e, field) => {
    if (this.props.booleanFields.indexOf(field) !== -1) {
      this.props.editCell(!this.props.value, field);
      return;
    }
    this.setState({ editing: true });
  }

  render() {
    const { editing } = this.state;
    const { field, value, className } = this.props;

    if (editing) {
      return (
        <td className={`${className}_Cell ${className}_Cell__${field}`}>
          <input
            className={`${className}_Input`}
            type="text"
            onBlur={this.onBlur}
            onKeyPress={this.onKeyPressOnInput}
            value={value}
            onChange={this.onChange}
            autoFocus={true}
          />
        </td>
      );
    }
    return (
      <td
        onDoubleClick={e => this.onDoubleClick(e, field)}
        className={`${className}_Cell ${className}_Cell__${field}`}
      >
        {value}
      </td>
    );
  }
}
