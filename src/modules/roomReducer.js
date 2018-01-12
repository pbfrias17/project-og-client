import * as actionType from '../actions/types';

const defaultState = {
    roomId: '',
    game: {},
    token: '',
}

export default (state = {}, payload) => {
    switch(payload.type) {
        case actionType.SET_ROOM:
            return payload.room;
        case actionType.SET_GAME:
            return { ...state, game: payload.game };
        default: 
            return state;
    }
};