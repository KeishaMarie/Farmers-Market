import React from "react";
import PropTypes from "prop-types";

function SeasonalDetails(props){
  return(
    <React.Fragment>
      <h2>{props.month}</h2>
      <p>{props.selection}</p>
    </React.Fragment>
  )
}

SeasonalDetails.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired,
};

export default SeasonalDetails;