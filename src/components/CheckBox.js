import React from "react";
import PropTypes from "prop-types";

const CheckBox = (props) => {
  const inputRef = React.useRef(null);

  const onChange = () => {
    if (props.onChange) {
      props.onChange(inputRef.current);
    }
  };

  return (
    <label
      className="custom-checkbox"
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <input
        type="checkbox"
        ref={inputRef}
        onChange={onChange}
        checked={props.checked}
        style={{ marginRight: "1rem", marginBottom: ".3rem" }}
      />
      {props.label}
      {/* <label className="pt-1">{props.label}</label> */}
    </label>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default CheckBox;
