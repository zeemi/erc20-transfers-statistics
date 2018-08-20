import React, { Component } from 'react';
import '../../compiled/containers/Inputs/Inputs.css';
import {fetchTokenStatistics, setWindowsLimit, reset} from "../../redux/tokens/creators";
import {connect} from "react-redux";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from "@material-ui/core/CircularProgress";
import {getWindowsLimit, isFetchingInProgress, wasFetchingTriggered} from "../../redux/tokens/selectors";


class Inputs extends Component {
  constructor() {
    super();
    this.state = {token: ''};
  }

  handleChange = (event) => {
    this.setState({token: event.target.value});
  };

  handleSubmit = () => {
    this.props.fetchTokenStatistics(this.state.token);
  };

  render() {
    const {isFetchingInProgress, setWindowsLimit, windowsLimit, wasFetchingTriggered, reset} = this.props;
    return (
      <div className={'inputs'}>
        <div> example token address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52"</div>
        <div className={'inputs-row'}>
          <TextField value={this.state.token}
                     fullWidth
                     onChange={this.handleChange}
                     label={'ERC20 Token Address'}
                     placeholder={'Please enter smart contract address of a ERC20 Token'}/>
          <TextField value={windowsLimit}
                     label={'Number of windows'}
                     type={'number'}
                     onChange={(event) => {setWindowsLimit(parseInt(event.target.value, 10))}}
                     disabled={wasFetchingTriggered}
                     placeholder={'Please enter smart contract address of a ERC20 Token'}/>
        </div>
        <div>
          {isFetchingInProgress
            ? <CircularProgress />
            : <div className='button-container'>
                <Button variant="contained"
                        color="primary"
                        disabled={!this.state.token || isFetchingInProgress}
                        onClick={this.handleSubmit}>
                  Get statistics
                </Button>
                <Button variant="contained"
                        color="secondary"
                        disabled={!wasFetchingTriggered}
                        onClick={reset}>
                  Reset
                </Button>
              </div>
          }

        </div>

      </div>
    );
  }
}

export default connect(
  (state) => ({
    isFetchingInProgress: isFetchingInProgress(state),
    wasFetchingTriggered: wasFetchingTriggered(state),
    windowsLimit: getWindowsLimit(state)
  }),
  {fetchTokenStatistics, setWindowsLimit, reset}
)(Inputs);