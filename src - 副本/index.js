import './index.html';
import './index.css';
import dva from 'dva';
import catesInfo from '../codes/subcataInfo.json'

// 1. Initialize
const app = dva({
  initialState:{
    cates:{
      list:catesInfo
    },
  }
});

// 2. Plugins
//app.use({});

// 3. Model
//app.model(require('./models/example'));
app.model(require('./models/Cates'));
app.model(require('./models/Goods'));
app.model(require('./models/Menu'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
