import React from 'react';

export default class ToggleComponent extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			textDisplay: true,
		}
	}
 
	ToggleButton(){
        	this.setState((currentState) => ({
            	textDisplay: !currentState.textDisplay, 
        	}));
 	}

	render(){
		return(
		    <div>
			<button class ="button" onClick={ () => this.ToggleButton() }>
                  	Press me!
                	</button>
                	{!this.state.textDisplay && this.props.text}
		    </div>

		)
	}

}



