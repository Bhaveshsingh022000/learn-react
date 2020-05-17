import React, { Component } from 'react';
import classesStyle from './App.module.css';
import Layout from './components/Layout/Layout';


class App extends Component {
  render() {
    return (
      <div className={classesStyle.App}>
        <Layout>
          <p>Test</p>
        </Layout>
      </div>
    );
  }
}

export default App;