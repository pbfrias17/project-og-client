import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRoom, setGame } from '../actions';
import RoomOpener from '../components/RoomOpener';
import logo from '../components/logo.svg';
import './styles/Home.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.onNewRoomOpened = this.onNewRoomOpened.bind(this);
    }

    onNewRoomOpened(room) {
        this.props.setRoom(room);

        // Rooms should be opened with a default/chosen game.
        const game = {
            name: 'whofkncarestho',
            playerCounts: [1, 8],
            players: [],
        }
        this.props.setGame(game);
        
        this.props.history.push('/room');
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Project-OG</h1>
                </header>
                <p className="App-intro">Ready to play?</p>
                <p className="App-intro">Join a room to get started!</p>
                <p className='App-intro'>Or</p>
                <p className='App-intro'>Open a new room for your friends to join!</p>
                <RoomOpener onNewRoomOpened={this.onNewRoomOpened}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        room: state.room,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setRoom: room => dispatch(setRoom(room)),
        setGame: game => dispatch(setGame(game)),
    }
};

export default connect(null, mapDispatchToProps, null)(Home);
