import React from "react";
import { Input } from "semantic-ui-react";
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

  componentWillMount(){
   console.log(this.props.data);
  }


  render() {
    return (
      <React.Fragment>
        <h1>test</h1>
      </React.Fragment>
    );
  }
}

export default connect(mapState)(Testme);
