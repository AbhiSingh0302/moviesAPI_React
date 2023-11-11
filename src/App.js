import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Signup from './components/signup';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Signup/>
      </Route>
    </Switch>
  );
}

export default App;
