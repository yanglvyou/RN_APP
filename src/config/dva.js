import {create} from 'dva-core';
import createLoading from 'dva-loading';
import models from '@/models/index';


// 创建实例
const app=create();


//加载model对象

models.forEach(model=>{
    app.model(model);
})


app.use(createLoading());

// 启动dva;
app.start();

//导出数据

export default app._store;
