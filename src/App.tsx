import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import DashboardContainer from './container/dashboard/dashboardContainer'
const App: React.FC = () => {

  return (
      <BrowserRouter>
            <Switch>
                 <Route path="/" exact component={DashboardContainer}/>
                 <Route/>
            </Switch>
      </BrowserRouter>
  );
}

export default App;
