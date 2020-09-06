import axios from 'axios';
import {
  play,
  init,
  pause,
  getCurrentTime,
  getDuration,
  stop,
  initPlayer,
} from '@/config/sound';

const SHOW_URL = 'mock/11/bear/show';

const initialState = {
  id: '',
  soundUrl: '',
  playState: 'paused',
  currentTime: 0,
  duration: 0,
  thumbnailUrl: '',
  previousId: '',
  nextId: '',
  title: '',
  sounds: [],
};

const delay = (timeout) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

function* currentTime({call, put}) {
  while (true) {
    yield call(delay, 1000);
    const currentTime = yield call(getCurrentTime);
    yield put({type: 'setState', payload: {currentTime}});
  }
}

const playerModel = {
  namespace: 'player',
  state: initialState,
  reducers: {
    setState(state, {payload}) {
      return {...state, ...payload};
    },
  },
  effects: {
    *fetchShow({payload}, {call, put, select}) {
      const {data} = yield call(axios.get, SHOW_URL, {
        params: {id: payload.id},
      });
      try {
        yield call(initPlayer, data.soundUrl);
      } catch (error) {
        console.log('error: ', error);
      }

      yield put({type: 'play'});

      yield put({
        type: 'setState',
        payload: {
          id: payload.id,
          soundUrl: data.soundUrl,
          duration: getDuration(),
        },
      });
    },
    *play({payload}, {call, put}) {
      yield put({type: 'setState', payload: {playState: 'playing'}});
      yield call(play);

      yield put({type: 'setState', payload: {playState: 'paused'}});
    },
    *pause({payload}, {call, put, select}) {

      yield put({type: 'setState', payload: {playState: 'paused'}});
      yield call(pause);
      const {id, currentTime} = yield select(({player}) => player);
    },
    watcherCurrentTime: [
      function* (sagaEffects) {
        const {call, take, race} = sagaEffects;
        while (true) {
          yield take('play');
          yield race([call(currentTime, sagaEffects), take('pause')]);
        }
      },
      {type: 'watcher'},
    ],
    *previous({payload}, {call, put, select}) {

      const {id, sounds} = yield select(({player}) => player);
      const index = sounds.findIndex((item) => item.id === id);
      const currentIndex = index - 1;
      const currentItem = sounds[currentIndex];
      const previousItem = sounds[currentIndex - 1];
      yield put({
        type: 'setState',
        payload: {
          playState: 'paused',
          id: currentItem.id,
          title: currentItem.title,
          previousId: previousItem ? previousItem.id : '',
        },
      });
      yield put({type: 'fetchShow', payload: {id: currentItem.id}});
    },
    *next({payload}, {call, put, select}) {
      yield call(stop);
      const {id, sounds} = yield select(({player}) => player);
      const index = sounds.findIndex((item) => item.id === id);
      const currentIndex = index + 1;
      const currentItem = sounds[currentIndex];
      const nextItem = sounds[currentIndex + 1];
      yield put({
        type: 'setState',
        payload: {
          playState: 'paused',
          id: currentItem.id,
          title: currentItem.title,
          nextId: nextItem ? nextItem.id : '',
        },
      });
      yield put({type: 'fetchShow', payload: {id: currentItem.id}});
    },
  },
};

export default playerModel;
