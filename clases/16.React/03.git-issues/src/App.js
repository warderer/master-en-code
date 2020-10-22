import React from "react";
import "./App.css";
import axios from 'axios';
import SearchBar from './components/SearchBar';
import IssueItem from './components/IssueItem';

class App extends React.Component {

  state = {
    apiResults: [],
    searchResults : []
  }

  sendSearch = (search) => {
    console.log( this.state.apiResults.filter(query => query.title.includes(search)))
    const newSearch = this.state.apiResults.filter(query => query.title.toLowerCase().includes(search.toLowerCase()))
    this.setState({searchResults: newSearch});
  }

  getData = () => {
    axios.get(`https://api.github.com/repos/facebook/react/issues`)
    .then((response) => {
        console.log(response.data);
        this.setState({apiResults: response.data});
        this.setState({searchResults: response.data});
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
          this.state.searchResults.map ( issue => (<IssueItem url={issue} />))
        }
        </div>
      </div>
    );
  };
};

export default App;
