import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Main from '../pages/Main';
import Signup from '../pages/Signup';
import GoodsMain from '../pages/GoodsMain';
import GoodsDetail from 'src/pages/GoodsDetail';
import Shopping from 'src/pages/Shopping';
import GoodsDonation from 'src/pages/GoodsDonation';

import 'bootstrap/dist/css/bootstrap.min.css';
import UploadGoods from 'src/pages/UploadGoods/UploadGoods';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/goods" exact component={GoodsMain} />
      <Route path="/goods/:goodsId" exact component={GoodsDetail} />
      <Route path="/goods/shopping" exact component={Shopping} />
      <Route path="/goods/donation" exact component={GoodsDonation} />
      <Route path="/goods/upload" component={UploadGoods} />
    </Switch>
  );
};

export default App;
