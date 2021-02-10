import React from "react";
import Day from "./Day";


const marketSchedule = [  
  {  
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
  },
  {  
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
  },
  {  
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
  },
  {  
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
  },
  {  
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
  },
  {  
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
  }
];

class MarketSchedule extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      homeVisibleOnPage: true,
      sundayVisibleOnPage: false,
      mondayVisibleOnPage: false,
      tuesdayVisibleOnPage: false,
      wednesdayVisibleOnPage: false,
      thursdayVisibleOnPage: false,
      fridayVisibleOnPage: false,
      saturdayVisibleOnPage: false
    };
  }

handleClick = (dayValue) => {
  if(dayValue==="Sunday"){
    this.setState({
      sundayVisibleOnPage: true,
      mondayVisibleOnPage: false,
      tuesdayVisibleOnPage: false,
      wednesdayVisibleOnPage: false,
      thursdayVisibleOnPage: false,
      fridayVisibleOnPage: false,
      saturdayVisibleOnPage: false
    });
  } else if(dayValue==="Monday"){
    this.setState({
      sundayVisibleOnPage: false,
      mondayVisibleOnPage: true,
      tuesdayVisibleOnPage: false,
      wednesdayVisibleOnPage: false,
      thursdayVisibleOnPage: false,
      fridayVisibleOnPage: false,
      saturdayVisibleOnPage: false
    });
  } else if(dayValue==="Tuesday"){
    this.setState({
      sundayVisibleOnPage: false,
      mondayVisibleOnPage: false,
      tuesdayVisibleOnPage: true,
      wednesdayVisibleOnPage: false,
      thursdayVisibleOnPage: false,
      fridayVisibleOnPage: false,
      saturdayVisibleOnPage: false
    });
  } else if(dayValue==="Wednesday"){
    this.setState({
      sundayVisibleOnPage: false,
      mondayVisibleOnPage: false,
      tuesdayVisibleOnPage: false,
      wednesdayVisibleOnPage: true,
      thursdayVisibleOnPage: false,
      fridayVisibleOnPage: false,
      saturdayVisibleOnPage: false
    });
  } else if(dayValue==="Thursday"){
    this.setState({
      sundayVisibleOnPage: false,
      mondayVisibleOnPage: false,
      tuesdayVisibleOnPage: false,
      wednesdayVisibleOnPage: false,
      thursdayVisibleOnPage: true,
      fridayVisibleOnPage: false,
      saturdayVisibleOnPage: false
    });
  } else if(dayValue==="Friday"){
    this.setState({
      sundayVisibleOnPage: false,
      mondayVisibleOnPage: false,
      tuesdayVisibleOnPage: false,
      wednesdayVisibleOnPage: false,
      thursdayVisibleOnPage: false,
      fridayVisibleOnPage: true,
      saturdayVisibleOnPage: false
    });
  } else if(dayValue==="Saturday"){
    this.setState({
      sundayVisibleOnPage: false,
      mondayVisibleOnPage: false,
      tuesdayVisibleOnPage: false,
      wednesdayVisibleOnPage: false,
      thursdayVisibleOnPage: false,
      fridayVisibleOnPage: false,
      saturdayVisibleOnPage: true
    });
  }
};

render() {
  let currentlyVisibleState = null;
  let masterList = marketSchedule.map((day, index) =>
  <Day day={day.day}
    location={day.location}
    hours={day.hours}
    booth={day.booth}
    key={index}/>);
  if(this.state.sundayVisibleOnPage){
    currentlyVisibleState = masterList[0]
  } else if(this.state.mondayVisibleOnPage){
    currentlyVisibleState = masterList[1]
  } else if(this.state.tuesdayVisibleOnPage){
    currentlyVisibleState = masterList[2]
  } else if(this.state.wednesdayVisibleOnPage){
    currentlyVisibleState = masterList[3]
  } else if(this.state.thursdayVisibleOnPage){
    currentlyVisibleState = masterList[4]
  } else if(this.state.fridayVisibleOnPage){
    currentlyVisibleState = masterList[5]
  } else if(this.state.saturdayVisibleOnPage){
    currentlyVisibleState = masterList[6]
  } else {
    currentlyVisibleState = null
  }
  
  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={()=>this.handleClick("Sunday")}>Sunday</button>
      <button onClick={()=>this.handleClick("Monday")}>Monday</button>
      <button onClick={()=>this.handleClick("Tuesday")}>Tuesday</button>
      <button onClick={()=>this.handleClick("Wednesday")}>Wednesday</button>
      <button onClick={()=>this.handleClick("Thursday")}>Thursday</button>
      <button onClick={()=>this.handleClick("Friday")}>Friday</button>
      <button onClick={()=>this.handleClick("Saturday")}>Saturday</button>
    </React.Fragment>
  );
}
}

export default MarketSchedule;


// const AuthButton = props => {
//   let { isLoggedIn } = props;

//   switch (dayValue) {
//     case "sunday":
//     return 
//       break;
//     case false:
//       return <button>Login</button>;
//       break;
//     default:
//       return null;
//   }
// };
// case '1': <ComponentOne/>; break;