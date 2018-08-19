import React, { Component } from 'react';
import '../../compiled/containers/Inputs/Inputs.css';
import {fetchTokenStatistics} from "../../redux/tokens/creators";
import {connect} from "react-redux";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
class Inputs extends Component {
  constructor() {
    super();
    this.state = {token: '', windowsLimit: 3};
  }

  componentDidMount() {
    this.props.fetchTokenStatistics('0xB8c77482e45F1F44dE1745F52C74426C631bDD52');
  }

  handleChange = (event) => {
    this.setState({token: event.target.value});
  };

  handleSubmit = () => {
    this.props.fetchTokenStatistics(this.state.token);
  };

  render() {
    return (
      <div className={'inputs'}>
        <div> example token address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52"</div>
        <div className={'inputs-row'}>
          <TextField value={this.state.token}
                     fullWidth
                     onChange={this.handleChange}
                     label={'ERC20 Token Address'}
                     placeholder={'Please enter smart contract address of a ERC20 Token'}/>
          <TextField value={this.state.windowsLimit}
                     label={'Number of windows'}
                     type={'number'}
                     placeholder={'Please enter smart contract address of a ERC20 Token'}/>
        </div>
        <div>
          <Button variant="contained"
                  color="primary"
                  disabled={!this.state.token}
                  onClick={this.handleSubmit}>
            Get statistics
          </Button>
        </div>

      </div>
    );
  }
}

export default connect(
  null,
  {fetchTokenStatistics}
)(Inputs);