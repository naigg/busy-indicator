import React from "react";
import PropTypes from "prop-types";

const BusyIndicator = ({ test }) => {
  return (
    <div>
      BusyIndicator {test}
    </div>
  )
};

BusyIndicator.propTypes = {
  test: PropTypes.bool
};

export default BusyIndicator;