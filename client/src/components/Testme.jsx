import React from "react";
import { Input } from "semantic-ui-react";

class InputExampleLeftLoading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  handleclick=()=> {
    this.setState({ isLoading : true });
  }


  render() {
    return (
      <React.Fragment>
        <Input
          loading={this.state.isLoading} 
          iconPosition="right"
          placeholder="Search..."
        />
        <button onClick={this.handleclick}>get me</button>
      </React.Fragment>
    );
  }
}

export default InputExampleLeftLoading;
