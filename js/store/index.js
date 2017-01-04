/**
 * Created by panguso on 2016/12/12.
 */
'use strict';

import {createStore,applyMiddleware} from 'redux';
import reduces from '../reducers/index';
import thunk from 'redux-thunk';

const  applyStroreMiddleware = applyMiddleware(thunk)(createStore);
export const store = applyStroreMiddleware(reduces);