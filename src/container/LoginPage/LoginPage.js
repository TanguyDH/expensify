import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../../store/actions/auth';

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.startLogin}>Login</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        startLogin: () => dispatch(startLogin())
    }
}


export default connect(
  null,
  mapDispatchToProps
)(LoginPage);