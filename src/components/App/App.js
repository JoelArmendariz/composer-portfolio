import React from 'react';
import './App.css';

import Header from '../Header/Header';
import PageContent from '../PageContent/PageContent'
import Footer from '../Footer/Footer'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      tab: 0
    }
    this.setTab = this.setTab.bind(this);
  }

  componentDidMount() {
    this.setState({ tab: 0 });
  }

  setTab(tab) {
    this.setState({
      tab: tab
    })
  }
  
  render () {
    const { tab } = this.state;
    return (
      <div className="App">
        <Header tab={tab} setTab={this.setTab} />
        <PageContent tab={tab} />
        <Footer />
      </div>
    );
  }
}

export default App;
