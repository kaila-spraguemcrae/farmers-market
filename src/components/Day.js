import React from "react";
import PropTypes from "prop-types";

function Day(props){
  return(
    <React.Fragment>
      <h2>{props.day}</h2>
      <h4>{props.location} - {props.hours} - {props.booth}</h4>
    </React.Fragment>
  );
}

Day.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
}

export default Day;