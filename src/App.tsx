import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { AuthPage } from './components/pages/AuthPage';
import { SongPage } from './components/pages/SongPage';

export const App = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/songs" component={SongPage} />
          <Route exact path="/auth" component={AuthPage} />
          <Redirect to="/auth"></Redirect>
        </Switch>
    </Router>
  );
};
