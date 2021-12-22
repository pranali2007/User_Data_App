import React from 'react';
import GitHubUser from './components/GitHubUsers/gitHubUser';
import ShowList  from './components/ShowList/ShowList';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
    <Switch>
      <Route path="/" component={GitHubUser} exact/>
      <Route path="/list" component={ShowList}/>
    </Switch>
  </React.Fragment>
  );
}

export default App;
