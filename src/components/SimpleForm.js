import React, { Component } from 'react';
import request from 'request';

class SimpleForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textInput: '',
        };

        this.onTextChange = this.onTextChange.bind(this);
        this.onPressButton = this.onPressButton.bind(this);
    }

    onTextChange(e) {
        let textInput = e.target.value;
        if (this.props.input.capslock)
            textInput = textInput.toUpperCase();

        this.setState({textInput});
    }

    onPressButton(e) {
        if (this.state.textInput || !this.props.input)
            this.props.onSubmit(this.state.textInput);
    }

    renderInput() {
        let { input } = this.props;
        if (input) {
            return (
                <div>
                    <input type={input.type} value={this.state.textInput} onChange={this.onTextChange} />
                    <br />
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderInput()}
                <button style={style.button} onClick={this.onPressButton}>
                    <p style={style.buttonLabel}>{this.props.buttonText}</p>
                </button>
            </div>
        )
    }
}

const style = {
    button: {
        margin: 10,
        height: 100,
        width: 200,
        borderRadius: 5,
    },
    buttonLabel: {
        fontSize: 26,
    }
}

export default SimpleForm;