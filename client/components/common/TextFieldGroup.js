import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./TextFieldGroup.scss";

class TextFieldGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { field, value, label, error, type, onChange, checkUserExists } = this.props;

    console.log(error);

    let fieldElement = (
      <input
        value={value}
        onChange={onChange}
        onBlur={checkUserExists}
        type={type}
        name={field}
        className="form-control" />
    );

    if (type === "date") {
      fieldElement = (
        <DatePicker
          name={field}
          selected={value}
          onChange={onChange}
          dateFormat="yyyy-MM-dd"
          className="form-control"
        />
      );
    } else if (type === "select") {
      fieldElement = (
        <select
          value={value}
          onChange={onChange}
          name={field}
          className="form-control">
          <option>1E0</option>
          <option>1E3</option>
          <option>1E6</option>
          <option>1E9</option>
          <option></option>
        </select>
      );
    } else if (type === "checkbox") {
      fieldElement = (
        <input
          value={value}
          onChange={onChange}
          onBlur={checkUserExists}
          type={type}
          name={field}
          className="checkbox" />
      );
    }

    return (
      <div className={classnames("form-group", { 'has-error': error })}>
        <label className="control-label">{label}</label>
        {fieldElement}
        {error && <span className="text-danger">{error}</span>}
      </div>
    );
  }
}

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checkUserExists: PropTypes.func
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;