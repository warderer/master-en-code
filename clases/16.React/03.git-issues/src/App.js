import React from "react";
import "./App.css";
import axios from 'axios';
import SearchBar from './components/SearchBar';
import IssueItem from './components/IssueItem';

class App extends React.Component {

  state = {
    results: []
  }

  sendSearch = (search) => {
    //console.log(this.state.results.map(filteredIssue => ((filteredIssue))))
    console.log( this.state.results.filter(query => query.title.includes(search)))
    this.setState({results: 
    this.state.results
      .filter(query => query.title.includes(search))

    });
    //console.log(this.results);
  }

  getData = () => {
    axios.get(`https://api.github.com/repos/facebook/react/issues`)
    .then((response) => {
        console.log(response.data);
        this.setState({results: response.data});
    }).catch((err) => {
        console.log(err);
    });
  }

  componentDidMount(){
    this.getData();
  };

  render() {
    return (
      <div className="App">
        <SearchBar emitSearch={this.sendSearch} />

        <div className="grid-cards">
        {
        this.state.results.map ( issue => (<IssueItem url={issue} />))
        }
        </div>
      </div>
    );
  };
};

export default App;
