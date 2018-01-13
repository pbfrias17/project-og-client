import React, { Component } from 'react';
import { connect } from 'react-redux';
import request from 'request';
import logo from '../components/logo.svg';
import { setGame } from '../actions';
import GameSettings from '../components/GameSettings';

class Room extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showGameSettings: false,
        };

        this.showGameSettings = this.showGameSettings.bind(this);
    }

    componentDidMount() {
        // this.setState({
        //     showGameSettings: true,
        // });
    }

    showGameSettings(show) {
        this.setState({
            showGameSettings: show,
        });
    }

    render() {
        return (
            <div>
                <p>Welcome to Room {this.props.room.roomId}</p>
                {/* <p>Let's play {this.props.room.game.name}</p> */}
                <GameSettings 
                    show={this.state.showGameSettings} 
                    onShow={this.showGameSettings}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        room: state.room,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setGame: game => dispatch(setGame(game)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(Room);
