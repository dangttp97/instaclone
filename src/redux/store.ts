import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { appSlice } from './slices';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { userSlice } from './slices';

const persistedReducer = {
  app: appSlice.reducer,
  user: userSlice.reducer,
};

const nonPersistedReducer = {};
const rootReducer = combineReducers({
  ...persistedReducer,
  ...nonPersistedReducer,
});

const reducers = persistReducer<ReturnType<typeof rootReducer>>(
  {
    key: 'root',
    storage: AsyncStorage,
    timeout: 30000,
    stateReconciler: autoMergeLevel2,
    whitelist: Object.keys(persistedReducer),
  },
  rootReducer,
);

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      thunk: true,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });

    if (__DEV__) {
      const createDebugger = require('redux-flipper').default;
      middlewares.push(createDebugger());
    }

    return middlewares;
  },
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
