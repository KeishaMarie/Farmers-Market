import React from "react";
import PropTypes from "prop-types";

function ScheduleDetails(props){
  return(
    <React.Fragment>
      <h4>{props.day}</h4>
      <h5>{props.location}</h5>
      <h5>{props.hours}</h5>
      <h5>{props.booth}</h5>
    </React.Fragment>
  )
}

ScheduleDetails.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string,
  booth: PropTypes.string.isRequired
};

export default ScheduleDetails;