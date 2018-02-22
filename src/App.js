import React, { Component } from 'react';
import './App.css';
import FilterComponent from './components/FilterComponent.js';
import DriverChart from './components/DriverChart.js';
import CarChart from './components/CarChart.js';
import SearchComponent from './components/SearchComponent';

import data from './data.js';

class App extends Component {

  state = {
      renderDriverId: true,
      renderCarId: false,
      id: 'wjeMsqdPOv',
      data: data
  }

  onFilter = (e) => {
      if (e.target.innerText === "Driver ID") {
        this.setState({
          renderDriverId: true,
          renderCarId: false
        })
      } else {
        this.setState({
          renderCarId: true,
          renderDriverId: false
        })
      }
  }

  handleInputChange = (e) => {
    this.setState({
      id: e.target.value
    })
  }
  
  render() {
    var objects = this.state.data.filter((obj) => { return obj["UserID"] === this.state.id });
    var carIDs = [...new Set(this.state.data.map(obj => obj["CarID"]))];
    var carScores = []; 
    // for(let i = 0; i < carIDs.length; i++) {
    //   carScores.push(this.state.data.find(obj => obj[carIDs[i]]).CarScore);
    // }
    var carScores = [87, 36, 13, 56, 78, 14, 34, 89, 48, 68]; 
    var scores = objects.map(obj => obj["UserScore"]);
    return (
      <div>
        <FilterComponent onFilter={this.onFilter} />
        {this.state.renderDriverId && <SearchComponent onChange={this.handleInputChange} className="flex-center" />}
        {this.state.renderDriverId && <DriverChart scores={scores} id={this.state.id} key={this.state.id} />}
        {this.state.renderCarId && <CarChart carIDs={carIDs} scores={carScores} />}
      </div>
    );
  }
}

export default App;
