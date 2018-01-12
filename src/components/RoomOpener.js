import React, { Component } from 'react';
import request from 'request';

class RoomOpener extends Component {
    constructor(props) {
        super(props);

        this.onPressNewRoomButton = this.onPressNewRoomButton.bind(this);
    }

    onPressNewRoomButton(e) {
        request.post('http://localhost:4200/room/open', {}, (err, response, body) => {  
            if (err) {
                console.log(err);
            } else {
                const res = JSON.parse(response.body);
                console.log(res);
                let { success, roomId, token } = res;
                if (success) {  
                    this.props.onNewRoomOpened({
                        roomId,
                        token
                    });
                }
            }
        });
    }

    render() {
        return (
            <button style={style.button} onClick={this.onPressNewRoomButton}>
                <p style={style.buttonLabel}>OPEN</p>
            </button>
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

export default RoomOpener;