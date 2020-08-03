const initialState= {
  myCategorys: [
    {
      id: 'home',
      name: '推荐',
    },
    {
      id: 'vip',
      name: 'Vip',
    },
  ]
}
const categoryModel = {
  namespace: 'category',
  state: initialState,
  effects: {},
  reducers: {},
  subscriptions: {},
};

export default categoryModel;
