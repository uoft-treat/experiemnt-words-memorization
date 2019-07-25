import React from 'react';
import ExperimentBefore from './pages/Experiment/ExperimentBefore';
import ExperimentAfter from './pages/Experiment/ExperimentAfter';
import Surveypage from './pages/Survey_page/Survey_page';
import Breakpage from './pages/Break_page/Break_page';
import {BrowserRouter, Route } from 'react-router-dom';
import './App.css';

const App = props => {
  let content = (
    <React.Fragment>
      <BrowserRouter>
        <div>
          <Route path="/" component={Surveypage} exact/>
          <Route path="/experiment1" component={ExperimentBefore} exact/>
          <Route path="/experiment2" component={ExperimentAfter} exact/>
          <Route path="/break" component={Breakpage} exact/>
          </div>
        </BrowserRouter>
    </React.Fragment>
  );

  return content;
};







export default App;