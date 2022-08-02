import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, HashRouter } from 'react-router-dom';

import { ThemeContext } from './contexts/ThemeContext';
import { Main, BlogPage, ProjectPage, CertificatePage, AchievementPage } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'

import './App.css'
import { BiSitemap } from 'react-icons/bi';

function App() {

  const { theme } = useContext(ThemeContext);


  // console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
      <Router>
        <ScrollToTop/>
        <HashRouter basename="/">
          <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/projects" exact component={ProjectPage} />
          <Route path="/certificate" exact component={CertificatePage} />
          <Route path="/achievement" exact component={AchievementPage} />
   
          <Redirect to="/" />
          </Switch>
          
        </HashRouter>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
