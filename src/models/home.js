import axios from 'axios';
const CAROUSEL_URL = 'mock/11/bear/carousel';
const GUESS_URL = 'mock/11/bear/guess';
const CHANNEL_URL = 'mock/11/bear/channel';

const initialState = {
  carousels: [],
  guess: [],
  channels: [],
  activeCarouselIndex: 0,
  gradientVisible: true,
  pagination: {
    current: 1,
    total: 0,
    hasMore: true,
  },
};
const HomeModel = {
  namespace: 'home',
  state: initialState,
  reducers: {
    setState(state = initialState, {payload}) {
      return {...state, ...payload};
    },
  },
  effects: {
    *fetchCarousels({payload}, {call, put}) {
      const {data} = yield call(axios.get, CAROUSEL_URL);
      if (data && data.length) {
        yield put({
          type: 'setState',
          payload: {
            carousels: data,
          },
        });
      }
    },
    *fetchGuess({payload}, {call, put}) {
      const {data} = yield call(axios.get, GUESS_URL);
      if (data.length) {
        yield put({type: 'setState', payload: {guess: data}});
      }
    },
    *fetchChannels({payload, callback}, {call, put, select}) {
      const {channels, pagination} = yield select((state) => state.home);
      let page = 1;
      if (payload && payload.loadMore) {
        page = pagination.current + 1;
      }
      const {data} = yield call(axios.get, CHANNEL_URL, {
        params: {
          page,
        },
      });

      let newChannels = data.results;
      if (payload && payload.loadMore) {
        newChannels = channels.concat(newChannels);
      }
      yield put({
        type: 'setState',
        payload: {
          channels: newChannels,
          pagination: {
            current: data.pagination.current,
            total: data.pagination.total,
            hasMore: newChannels.length < data.pagination.total,
          },
        },
      });

      if (typeof callback === 'function') {
        callback();
      }
    },
  },
  subscriptions: {
    setup({dispatch}) {
      // dispatch({type:'fetchCarousels'});
      // dispatch({type:'fetchGuess'})
    },
  },
};

export default HomeModel;
