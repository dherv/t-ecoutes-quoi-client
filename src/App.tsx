import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { AuthPage } from './components/pages/AuthPage';
import { SongPage } from './components/pages/SongPage';
import { TemplateApp } from './components/templates/TemplateApp';

export const App = () => {
  return (
    <Router>
      <TemplateApp>
        <Switch>
          <Route exact path="/songs" component={SongPage} />
          <Route exact path="/auth" component={AuthPage} />
          <Redirect to="/auth"></Redirect>
        </Switch>
      </TemplateApp>
    </Router>
  );
};
