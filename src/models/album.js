import axios from 'axios';
const ALBUM_URL = 'mock/11/bear/album/list';

const initialState = {
    id: '',
    thumbnailUrl: '',
    title: '',
    summary: '',
    list: [],
    introduction: '',
    author: {
      name: '',
      avatar: '',
    },
  };

  const albumModel = {
    namespace: 'album',
    state: initialState,
    effects: {
      *fetchAlbum(_, {call, put}) {
        const {data} = yield call(axios.get, ALBUM_URL);
        yield put({type: 'setState', payload: data});
      },
    },
    reducers: {
      setState(state = initialState, {payload}) {
        return {
          ...state,
          ...payload,
        };
      },
      resetState(state = initialState,{payload}) {
        return {...state, ...initialState};
      },
    },
  };

  export default albumModel;
