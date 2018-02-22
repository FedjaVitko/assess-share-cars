import React, { Component } from 'react';
import {HorizontalBar} from 'react-chartjs-2';


class DriverChart extends Component {

    data = {
        labels: this.props.carIDs,
        datasets: [
            {
                label: 'Car Scores',
                backgroundColor: ["green", "green", "green", "orange", "orange", "orange", "orange", "#E20015", "#E20015", "#E20015"],
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
            <h3 style={{marginLeft: '3em'}}>Cars</h3>
            <HorizontalBar
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
