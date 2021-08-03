import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../pages/Login';
import Main from '../pages/Main';
import Signup from '../pages/Signup';
import GoodsMain from '../pages/GoodsMain';
import GoodsCollections from 'src/pages/GoodsCollections';
import Shopping from 'src/pages/Shopping';
import GoodsDonation from 'src/pages/GoodsDonation';

import 'bootstrap/dist/css/bootstrap.min.css';
import UploadProduct from 'src/pages/UploadProduct/UploadProduct';

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route
        path="/login"
        exact
        render={() => (isAuthenticated ? <Redirect to="/" /> : <Login />)}
      />
      <Route
        path="/signup"
        exact
        render={() => (isAuthenticated ? <Redirect to="/" /> : <Signup />)}
      />
      <Route path="/goods" exact component={GoodsMain} />
      <Route path="/goods/:goodsId" exact component={GoodsCollections} />
      <Route path="/shopping" exact component={Shopping} />
      <Route path="/donation" exact component={GoodsDonation} />
      <Route path="/product/upload" component={UploadProduct} />
    </Switch>
  );
};

export default App;
