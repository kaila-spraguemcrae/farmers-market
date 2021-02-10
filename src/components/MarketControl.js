import React from 'react';
import MarketSchedule from "./MarketSchedule";
import AvailableProduce from "./AvailableProduce";

class MarketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      homeVisibleOnPage: true,
      scheduleVisibleOnPage: false,
      produceVisibleOnPage: false
    };
  }

  handleClick = (x) => {
    if(this.state.scheduleVisibleOnPage === false && this.state.produceVisibleOnPage ===false && x === "produce"){
      this.setState(({
      scheduleVisibleOnPage: false,
      produceVisibleOnPage: true
    }));
    } else if(this.state.scheduleVisibleOnPage === false && this.state.produceVisibleOnPage ===false && x === "schedule"){
      this.setState(({
      scheduleVisibleOnPage: true,
      produceVisibleOnPage: false
    })); 
    }else if(this.state.scheduleVisibleOnPage === true && this.state.produceVisibleOnPage === false && x === "produce") {
    this.setState(({
      produceVisibleOnPage: true,
      scheduleVisibleOnPage: false
    }));
    } else if(this.state.scheduleVisibleOnPage === false && this.state.produceVisibleOnPage === true && x === "produce") {
      this.setState(({
        produceVisibleOnPage: false,
        scheduleVisibleOnPage: false
      }));
    }else if(this.state.scheduleVisibleOnPage === false && this.state.produceVisibleOnPage === true && x === "schedule") {
      this.setState(({
        produceVisibleOnPage: false,
        scheduleVisibleOnPage: true
      }));
    }else if(this.state.scheduleVisibleOnPage === true && this.state.produceVisibleOnPage === false && x === "schedule") {
      this.setState(({
        produceVisibleOnPage: false,
        scheduleVisibleOnPage: false
      }));
    }else {
      this.setState({scheduleVisibleOnPage : false,
        produceVisibleOnPage: false});
    }
  }


  render() {
    let currentlyVisibleState = null;
    if (this.state.scheduleVisibleOnPage) {
      currentlyVisibleState = <MarketSchedule />
    } else if (this.state.produceVisibleOnPage) {
      currentlyVisibleState = <AvailableProduce />
    }
  
    return (
      <React.Fragment>
        <button onClick={() => this.handleClick("schedule")}>View Schedule</button>
        <button onClick={() => this.handleClick("produce")}>View Produce</button>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default MarketControl;