import './index.html';
import './index.css';
import dva from 'dva';

// 1. Initialize
const app = dva({
  initialState:{
    products: [
      {name: 'xincanpin', id:1},
      {name: '产品2号', id:2},
    ]
  }
});

// 2. Plugins
//app.use({});

// 3. Model
app.model(require('./models/products'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
