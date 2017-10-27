import React, { Component } from 'react';
import logo from './logo.svg'
import SkillsList from './components/SkillsList'
import EducationHistory from './components/EducationHistory'
import WorkHistory from './components/WorkHistory'

class App extends Component {
  render() {
    return (
      <div id="app-container" className="App">
        <SkillsList skills={this.props.skills} />
        <EducationHistory eduList={this.props.eduList} />
        <WorkHistory jobsList={this.props.jobsList} />
      </div>
    );
  }
}

export default App;
