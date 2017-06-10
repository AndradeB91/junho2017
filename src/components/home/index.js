import React from 'react';
import Toolbar from 'components/home/toolbar';
import Login from 'components/home/login';
import Brewery from 'components/brewery/list';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    const { user } = this.props;
    if (!user.uid) {
      return <Login />;
    }
    return (
      <div>
        <Toolbar />
        <Brewery />
      </div>
    );
  }
}

export default connect(state => {
  return {
    user: state.user,
  }
})(Home);
