'use strict';
import * as types from './ActionTypes';

function requestData() {
    return {
        types: types.REQUEST_DATA,
    };
}

function receiveData(reponseData) {
    return {
        types: types.RECEIVE_DATA,
        dataSource: reponseData
    }
}

export function fetchData(date) {
    return function (dispatch) {
        // dispatch(requestData());

        return fetch('http://gank.io/api/day/${date}')
            .then(response => response.json())
            .then(json => dispatch(receiveData(json)));
    }
}