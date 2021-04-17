import React, {useState, useEffect} from 'react';
import useClock from '../../hooks/useClock';
import PropTypes from 'prop-types';

// Clock.propTypes = {};







function Clock(props) {
	// body...
    const {timeString} = useClock();

	return (
		<p style={{fontSize: '42px'}}>{timeString}</p>
	);
}

export default Clock;