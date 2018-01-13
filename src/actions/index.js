import * as actionType from './types';

export const setRoom = room => {
    return {
        type: actionType.SET_ROOM,
        room,
    };
}

export const setGame = game => {
    return {
        type: actionType.SET_GAME,
        game,
    };
}

export const setPlayer = player => {
    return {
        type: actionType.SET_PLAYER,
        player,
    };
}