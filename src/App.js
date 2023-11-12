import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Signup from './components/signup';
import Signin from './components/Signin';
import { useSelector } from 'react-redux';
import Movies from './components/Movies';

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  return (
    <Switch>
      <Route exact path="/">
        <Signup/>
      </Route>
      <Route path="/signin">
        <Signin/>
      </Route>
      <Route path="/movies">
      {isLoggedIn ? <Movies/> : <Redirect to="/"/>}
      </Route>
    </Switch>
  );
}

export default App;
