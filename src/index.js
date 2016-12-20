import './index.html';
import './index.css';
import dva from 'dva';

// 1. Initialize
const app = dva({
  initialState:{
    products:[
      { name: '机体总成', id:1, code: 'RE0200Z'},
      { name: '发动机YC6MK375N-40-MKB00J', id:2, code: 'MKB00J'},
      { name: '发动机线束组件', id:3, code: 'G2V00-3823250SF1'},
    ],
    brands:[
    {name:"海格", id:1},
    {name:"宇通", id:2},
    {name:"金龙", id:3},
    {name:"玉柴",id:4}
    ],
  }
});

// 2. Plugins
//app.use({});

// 3. Model
//app.model(require('./models/example'));
app.model(require('./models/Products'));
app.model(require('./models/Brands'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
