import React from "react";
// import { Input } from "semantic-ui-react";
import {connect} from 'react-redux'

const mapState=(state)=>({
  data:state.getWeather.data
})

class Testme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.props.data ? <h1>{this.props.data.temp}</h1> : <h1>nothing</h1>}  
      </React.Fragment>
    );
  }
}

export default connect(mapState)(Testme);
