import React from "react";


export default class MeterForm extends React.Component {
    constructor(props) {
        super(props);
        this.pushButton = this.props.pushButton.bind(this);                
    }
    
    pushButton() {}

    render () {
        return (
            <div>
                <h2>{this.props.header}</h2>
                <form onSubmit={this.pushButton}>
                    <p>
                        <label htmlFor='description'>Description:</label>
                        <input id='description' type='text' />
                        <button>{this.props.buttonText}</button>
                    </p>                    
                </form>
            </div>
    )}
}