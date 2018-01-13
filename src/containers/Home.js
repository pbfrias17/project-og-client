import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRoom, setGame } from '../actions';
import request from 'request';
import SimpleForm from '../components/SimpleForm';
import logo from '../components/logo.svg';
import './styles/Home.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.onJoinRoom = this.onJoinRoom.bind(this);
        this.onOpenRoom = this.onOpenRoom.bind(this);
    }

    onJoinRoom(roomId) {
        request.post(
            'http://localhost:4200/room/playerEnter', 
            { 
                headers: {
                    'room-id': roomId 
                }
            }, 
            (err, response, body) => {  
                if (err) {
                    console.log(err);
                } else {
                    const res = JSON.parse(response.body);
                    console.log(res);
                    let { success, player, room } = res;
                    if (success) {  
                        this.props.setRoom(room);
                        this.props.history.push('/controller');
                    }
                }
            }
        );
    }

    onOpenRoom(data) {
        request.post('http://localhost:4200/room/open', {}, (err, response, body) => {  
            if (err) {
                console.log(err);
            } else {
                const res = JSON.parse(response.body);
                console.log(res);
                let { success, roomId, token } = res;
                if (success) {  
                    const room = { roomId, token };
                    this.props.setRoom(room);
                    this.props.history.push('/room');
                }
            }
        });
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
                <SimpleForm input={{type: 'text', capslock: true}} buttonText='JOIN' onSubmit={this.onJoinRoom} />
                <p className='App-intro'>Or</p>
                <p className='App-intro'>Open a new room for your friends to join!</p>
                <SimpleForm buttonText='OPEN' onSubmit={this.onOpenRoom} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setRoom: room => dispatch(setRoom(room)),
        setGame: game => dispatch(setGame(game)),
    }
};

export default connect(null, mapDispatchToProps, null)(Home);
