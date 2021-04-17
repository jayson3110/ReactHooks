import React ,{useState} from 'react';
import Proptypes from 'prop-types';


TodoForm.propTypes = {
   onSubmit: Proptypes.func
};


TodoForm.defaultProps ={
	onSubmit: null,
}

function TodoForm(props) {
	// body...

	const {onSubmit} = props;
	const [value, setValue]= useState('');
    
    function handleValueChange(e){
    	console.log(e.target.value);
    	setValue(e.target.value);
    }

    function handleSubmit(e) {
    	// Prevent reloading browser
    	e.preventDefault();

    	if(!onSubmit) return;
    	const formValues = {
    		title:value,
    	};
    	onSubmit(formValues);

    	//reset form

    	setValue('');

    }


	return(
		<form onSubmit={handleSubmit}>
		   <input type="text" value={value} onChange={handleValueChange}/>

		</form>
	);
}


export default TodoForm;