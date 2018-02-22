import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';


class DriverChart extends Component {

    data = {
        labels: ['12.02.2018', '13.02.2018', '14.02.2018', '15.02.2018', '16.02.2018', '17.02.2018', '18.02.2018', '19.02.2018', '20.02.2018', '21.02.2018'],
        datasets: [
            {
                label: 'Driver Scores',
                backgroundColor: ["red", "red", "orange", "orange", "red", "orange", "green", "orange", "red", "red"],
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: this.props.scores
            },
        ]
    };

      
    render() {
        return (
          <div>
            <h3 style={{marginLeft: '3em'}}>Driver ID: {this.props.id}</h3>
            <Bar
              data={this.data}
              height={100}
              options={{
                maintainAspectRatio: true,
                responsive: true,
              }}
            />
          </div>
        );
      }
}

export default DriverChart;
