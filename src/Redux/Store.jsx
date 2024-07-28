import {configureStore} from '@reduxjs/toolkit';
import {changePageReducer} from './Reducer';

const pageStore = configureStore({
    reducer: changePageReducer
})

export default pageStore;