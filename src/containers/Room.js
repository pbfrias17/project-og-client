import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../components/logo.svg';

class Room extends Component {
    constructor(props) {
        super(props);

        console.log(props.room);
    }
    render() {
        return (
            <div>
                <p>Welcome to Room {this.props.room.roomId}</p>
                <p>Let's play {this.props.room.game.name}</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        room: state.room,
    }
};

export default connect(mapStateToProps, null, null)(Room);
