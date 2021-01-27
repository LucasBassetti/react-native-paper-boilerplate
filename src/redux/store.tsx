import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { middleware as thunkMiddleware } from 'redux-saga-thunk';
import { persistReducer, persistStore } from 'redux-persist';

import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  storage: AsyncStorage,
  key: 'root',
  whitelist: ['user'], // only user will be persisted
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware, sagaMiddleware));
const persistor = persistStore(store as any);

sagaMiddleware.run(sagas);

export { persistor };

export default store;
