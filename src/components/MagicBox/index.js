import React from 'react';
import Proptypes from 'prop-types';
import useMagicColor from '../../hooks/useMagicColor';
import './MagicBox.css';



MagicBox.propTypes = {

};


function MagicBox() {
	// body...
    
    const color = useMagicColor();

	return(

		<div class="magic-box" style={{backgroundColor: color}}>


		</div>
	);
}

export default MagicBox;